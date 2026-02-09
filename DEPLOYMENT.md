# Deployment Guide for X4ET Web Application

## ⚠️ IMPORTANT: Current API Issue on AWS Amplify

**Problem**: The form submission returns a 404 error because AWS Amplify only supports static hosting without a backend API.

**Temporary Fix Applied**:
- Forms now detect Amplify deployment and log data to console
- Shows "Demo Mode" message to users
- Works perfectly when deployed to Netlify or run locally

**Permanent Solutions** (see detailed instructions below):
1. **Deploy to Netlify** (easiest - already configured)
2. **Add AWS Lambda + API Gateway** to Amplify
3. **Deploy backend separately** (Railway, Render, Heroku)

---

This guide explains how to deploy your application to AWS Amplify, EC2, and Netlify.

## Prerequisites

Before deploying, install the required dependencies:

```bash
npm install
```

## Environment Variables

Set these environment variables in your deployment platform:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@x4et.com
EMAIL_FROM_NAME=X4ET Platform
EMAIL_FROM_ADDRESS=noreply@x4et.com
PORT=3000
NODE_ENV=production
```

---

## 1. AWS Amplify Deployment

### ⚠️ Current Limitation

AWS Amplify **only hosts static files** by default. The backend API (`/api/submit-form`) won't work unless you:
- Add AWS Lambda + API Gateway (see section below), OR
- Use Netlify instead (which has built-in serverless functions support)

### Method 1: Amplify Console (Static Only)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to AWS Amplify Console**
   - Open [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"

3. **Connect Repository**
   - Select your Git provider
   - Authorize AWS Amplify
   - Select your repository and branch

4. **Configure Build Settings**
   The `amplify.yml` file is already configured. Amplify will automatically detect it.

5. **Add Environment Variables**
   - Go to "Environment variables" in the Amplify console
   - Add all the SMTP and email environment variables listed above

6. **Deploy**
   - Click "Save and deploy"
   - Amplify will build and deploy your app
   - You'll get a URL like: `https://main.xxxxx.amplifyapp.com`

### Method 2: Amplify CLI

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure

# Initialize Amplify in your project
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### Troubleshooting Amplify

If you encounter issues:

1. **Check logs**: Go to Amplify Console → Your App → Build settings → View build logs
2. **Verify Node version**: Ensure Node 20+ is set in Amplify console
3. **Check environment variables**: Make sure all SMTP variables are set
4. **Port issues**: Amplify uses port 3000 by default (configured in server.js)

---

## 2. EC2 Deployment

### Prerequisites on EC2

1. **SSH into your EC2 instance**

2. **Install Node.js 20+**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Install PM2 globally**
```bash
sudo npm install -g pm2
```

4. **Install Git (if not installed)**
```bash
sudo apt-get install git -y
```

### Deployment Steps

1. **Clone your repository**
```bash
cd /home/ubuntu
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
nano .env
```

Add your environment variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@x4et.com
EMAIL_FROM_NAME=X4ET Platform
EMAIL_FROM_ADDRESS=noreply@x4et.com
PORT=3000
NODE_ENV=production
```

Save and exit (Ctrl+X, then Y, then Enter)

4. **Create logs directory**
```bash
mkdir -p logs
```

5. **Start the application with PM2**
```bash
pm2 start ecosystem.config.cjs --env production
```

6. **Save PM2 configuration**
```bash
pm2 save
pm2 startup
```

Run the command that PM2 outputs (it will generate a systemd startup script)

7. **Configure security group**
   - Go to EC2 Console → Security Groups
   - Edit inbound rules
   - Add rule: Custom TCP, Port 3000, Source: 0.0.0.0/0 (or your IP)
   - Add rule: HTTP, Port 80 (if using Nginx reverse proxy)

### Using Nginx as Reverse Proxy (Recommended)

1. **Install Nginx**
```bash
sudo apt-get install nginx -y
```

2. **Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/x4et
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /static {
        alias /home/ubuntu/your-repo/public/static;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

3. **Enable the site**
```bash
sudo ln -s /etc/nginx/sites-available/x4et /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### PM2 Useful Commands

```bash
# View application status
pm2 status

# View logs
pm2 logs x4et-webapp

# Restart application
pm2 restart x4et-webapp

# Stop application
pm2 stop x4et-webapp

# Monitor application
pm2 monit

# View application info
pm2 show x4et-webapp
```

### Updating the Application on EC2

```bash
cd /home/ubuntu/your-repo
git pull
npm install
pm2 restart x4et-webapp
```

---

## 3. Netlify Deployment

### Method 1: Netlify UI (Recommended)

1. **Push code to GitHub**

2. **Go to Netlify**
   - Open [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"

3. **Connect Repository**
   - Select GitHub
   - Choose your repository

4. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist/static`
   - Functions directory: `netlify/functions`

5. **Add Environment Variables**
   - Go to Site settings → Environment variables
   - Add all SMTP and email variables

6. **Deploy**
   - Click "Deploy site"
   - You'll get a URL like: `https://your-site.netlify.app`

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## 4. Common Issues and Solutions

### Issue: "Module not found" errors

**Solution**: Make sure all dependencies are installed:
```bash
npm install
```

### Issue: Static files not loading

**Solution**:
- Check that `/public/static` directory exists
- Verify the path in your server configuration
- Check file permissions on EC2: `chmod -R 755 public/static`

### Issue: Email not sending

**Solution**:
1. Verify SMTP credentials are correct
2. For Gmail, use an App Password (not your regular password)
3. Check environment variables are set correctly
4. View logs: `pm2 logs x4et-webapp` (EC2) or check Amplify/Netlify logs

### Issue: Port already in use

**Solution (EC2)**:
```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill the process
sudo kill -9 <PID>

# Restart PM2
pm2 restart x4et-webapp
```

### Issue: Can't connect to server

**Solution**:
1. Check if server is running: `pm2 status`
2. Check firewall rules (EC2 Security Groups)
3. Verify port is correct (3000 by default)
4. Check application logs for errors

---

## 5. Monitoring and Maintenance

### EC2 Monitoring

```bash
# View server resources
htop

# Check disk space
df -h

# View PM2 logs
pm2 logs

# Monitor in real-time
pm2 monit
```

### Application Health Checks

Create a health check endpoint (already in server.js):
```
GET /health
```

### Log Rotation (EC2)

PM2 automatically rotates logs. Configure in `ecosystem.config.cjs`:
```javascript
max_memory_restart: '1G',
error_file: 'logs/err.log',
out_file: 'logs/out.log',
```

---

## 6. SSL/HTTPS Configuration

### For EC2 with Nginx

1. **Install Certbot**
```bash
sudo apt-get install certbot python3-certbot-nginx -y
```

2. **Get SSL Certificate**
```bash
sudo certbot --nginx -d your-domain.com
```

3. **Auto-renewal**
```bash
sudo certbot renew --dry-run
```

### For Amplify and Netlify

- Both platforms provide automatic SSL/HTTPS
- Custom domains get free SSL certificates automatically

---

## 7. Performance Optimization

### Enable Compression (Nginx)

Add to your Nginx config:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### PM2 Cluster Mode (for multi-core EC2)

Update `ecosystem.config.cjs`:
```javascript
instances: 'max',  // Use all CPU cores
exec_mode: 'cluster'
```

---

## Support

For issues or questions:
- Check application logs
- Review this deployment guide
- Check the README.md file

## Quick Reference

| Platform | URL After Deploy | Default Port |
|----------|------------------|--------------|
| Amplify  | `https://main.xxxxx.amplifyapp.com` | 3000 |
| EC2      | `http://your-ec2-ip:3000` | 3000 |
| Netlify  | `https://your-site.netlify.app` | N/A (serverless) |
