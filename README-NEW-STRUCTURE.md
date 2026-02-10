# X4ET Website - Separated Backend & Frontend

This project has been restructured with separated backend and frontend folders for better organization and deployment flexibility.

## Project Structure

```
website/
├── backend/           # Express API server
│   ├── src/
│   │   ├── services/  # Email service
│   │   └── templates/ # Email templates
│   ├── server.js      # Main backend server
│   ├── package.json
│   └── .env.example
│
├── frontend/          # Static website
│   ├── public/
│   │   └── static/    # CSS and JS files
│   ├── src/
│   │   └── input.css  # Tailwind source
│   ├── index.html     # Main HTML file
│   ├── package.json
│   └── tailwind.config.js
│
└── README-NEW-STRUCTURE.md
```

## Getting Started

### 1. Backend Setup

The backend is a Node.js Express server that handles form submissions and sends emails.

```bash
# Navigate to backend folder
cd backend

# Install dependencies (already done)
npm install

# Create .env file from example
cp .env.example .env

# Edit .env file with your SMTP credentials
# nano .env or use your preferred editor

# Start the backend server
npm start
```

The backend will run on `http://localhost:3002`

#### Backend Environment Variables

Edit `backend/.env`:

```env
PORT=3002
FRONTEND_URL=http://localhost:5173

# SMTP Configuration (e.g., Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Configuration
EMAIL_FROM_NAME=X4ET Platform
EMAIL_FROM_ADDRESS=noreply@x4et.com
ADMIN_EMAIL=admin@x4et.com
```

### 2. Frontend Setup

The frontend is a static HTML/CSS/JS website that calls the backend API.

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies (already done)
npm install

# Build Tailwind CSS
npm run build

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173`

### 3. Running Both Servers

You need to run both servers simultaneously:

**Terminal 1 (Backend):**
```bash
cd backend
npm start
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run build  # Build CSS first
npm run dev    # Start server
```

Then open your browser to `http://localhost:5173`

## API Endpoints

### Backend API

**Base URL:** `http://localhost:3002`

#### POST `/api/submit-form`

Submit buyer or provider registration form.

**Request Body:**
```json
{
  "formType": "buyer" | "provider",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp",
    "phone": "+1234567890",
    // ... other form fields
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully. Emails are being sent.",
  "emailsQueued": true,
  "data": {
    "formType": "buyer",
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Acme Corp"
  }
}
```

#### GET `/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-02-09T20:30:00.000Z"
}
```

## Development

### Frontend

To make changes to the frontend:

1. Edit HTML in `frontend/index.html`
2. Edit styles in `frontend/src/input.css`
3. Edit JavaScript in `frontend/public/static/app.js`
4. Rebuild CSS: `npm run build`
5. Refresh browser

### Backend

To make changes to the backend:

1. Edit `backend/server.js` for API endpoints
2. Edit `backend/src/services/emailService.ts` for email logic
3. Edit `backend/src/templates/emailTemplates.ts` for email templates
4. Restart server (Ctrl+C and `npm start`)

### API URL Configuration

The frontend automatically detects the environment:

- **Development:** Uses `http://localhost:3002`
- **Production:** Update `API_URL` in `frontend/public/static/app.js`

```javascript
const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3002'
  : 'https://your-backend-api.com'; // Update this
```

## Deployment

### Backend Deployment

Deploy the `backend/` folder to any Node.js hosting:

- **Railway:** `railway up`
- **Render:** Connect GitHub repo, set root directory to `backend/`
- **Heroku:** `heroku create` and push
- **AWS/GCP/Azure:** Use Docker or direct deployment

**Environment Variables:** Set all variables from `.env.example` in your hosting provider.

### Frontend Deployment

Deploy the `frontend/` folder to any static hosting:

- **Netlify:** Drag and drop `frontend/` folder or connect GitHub
- **Vercel:** Connect GitHub repo, set root directory to `frontend/`
- **AWS Amplify:** Connect GitHub repo
- **GitHub Pages:** Push to `gh-pages` branch

**Important:** Update `API_URL` in `app.js` to point to your production backend URL.

### Production Setup Example

1. Deploy backend to Railway: `https://x4et-backend.up.railway.app`
2. Update `frontend/public/static/app.js`:
   ```javascript
   const API_URL = window.location.hostname === 'localhost'
     ? 'http://localhost:3002'
     : 'https://x4et-backend.up.railway.app';
   ```
3. Build frontend: `cd frontend && npm run build`
4. Deploy frontend to Netlify

## CORS Configuration

The backend is configured to accept requests from the frontend. If you deploy to production, update the CORS origin in `backend/server.js`:

```javascript
app.use('/*', cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}))
```

Set `FRONTEND_URL` environment variable in your backend hosting provider to your production frontend URL.

## Troubleshooting

### Form submission fails

1. Check backend is running on port 3002
2. Check browser console for error messages
3. Verify API_URL in `app.js` is correct
4. Check CORS settings in backend

### Emails not sending

1. Verify SMTP credentials in `backend/.env`
2. Check backend console logs for email errors
3. Form submissions will still work even if emails fail

### CSS not loading

1. Run `npm run build` in frontend folder
2. Check `frontend/public/static/style.css` exists
3. Refresh browser with Ctrl+Shift+R (hard refresh)

## Testing

### Test Backend

```bash
# Health check
curl http://localhost:3002/health

# Test form submission
curl -X POST http://localhost:3002/api/submit-form \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "buyer",
    "data": {
      "name": "Test User",
      "email": "test@example.com",
      "company": "Test Corp"
    }
  }'
```

### Test Frontend

1. Open `http://localhost:5173` in browser
2. Open browser DevTools (F12)
3. Fill out and submit buyer form
4. Check console for API responses
5. Check backend logs for form submission

## Original Files

The original monolithic structure files are still in the root directory. You can safely remove them after testing:

- `server.js` (old monolithic server)
- `src/` (old source folder)
- `static/` (old static folder)

## Migration Benefits

1. **Separation of Concerns:** Backend API and frontend are now independent
2. **Easier Deployment:** Deploy backend and frontend separately
3. **Better Scalability:** Scale backend and frontend independently
4. **Development Workflow:** Work on frontend and backend separately
5. **Multiple Frontends:** Can create mobile app or other frontends using same backend API

## Next Steps

1. Test the form submission with both servers running
2. Configure SMTP credentials for email functionality
3. Customize the frontend as needed
4. Deploy backend to your preferred hosting provider
5. Deploy frontend to your preferred static hosting
6. Update API_URL in production frontend to point to production backend

## Support

For issues or questions, check:
- Backend logs: `backend/` console output
- Frontend console: Browser DevTools (F12)
- Network tab: Check API requests/responses
