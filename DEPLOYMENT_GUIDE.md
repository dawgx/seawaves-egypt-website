# Sea Waves Website Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel + Railway (Recommended)

#### Frontend (Vercel)
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/sea-waves-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

#### Backend (Railway)
1. **Go to [railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **Create new project**
4. **Connect your repository**
5. **Set environment variables:**
   - `EMAIL_USER=settlethailand@gmail.com`
   - `EMAIL_PASS=xjeincwfnyvlcezi`
6. **Deploy**

### Option 2: Render (All-in-one)

#### Frontend + Backend on Render
1. **Go to [render.com](https://render.com)**
2. **Sign up with GitHub**
3. **Create two services:**

   **Frontend Service:**
   - Type: Static Site
   - Build Command: `npm run build`
   - Publish Directory: `build`

   **Backend Service:**
   - Type: Web Service
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && node server.js`
   - Environment Variables:
     - `EMAIL_USER=settlethailand@gmail.com`
     - `EMAIL_PASS=xjeincwfnyvlcezi`

## 🔧 Pre-Deployment Setup

### 1. Update Frontend API URL
Update the contact form to use the production backend URL.

### 2. Environment Variables
Set up environment variables for production.

### 3. Build Optimization
Ensure the build process works correctly.

## 📝 Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] Backend API responds
- [ ] Contact forms work
- [ ] Emails are sent successfully
- [ ] All translations work
- [ ] Mobile responsiveness
- [ ] SSL certificate (automatic on most platforms)

## 🌐 Custom Domain (Optional)

1. **Buy a domain** (Namecheap, GoDaddy, etc.)
2. **Point DNS** to your hosting platform
3. **Configure SSL** (automatic on most platforms)

## 📊 Monitoring

- **Uptime monitoring**: UptimeRobot (free)
- **Analytics**: Google Analytics
- **Error tracking**: Sentry (free tier)

## 🔒 Security Notes

- Never commit API keys to GitHub
- Use environment variables for sensitive data
- Enable HTTPS (automatic on most platforms)
- Regular backups of your code
