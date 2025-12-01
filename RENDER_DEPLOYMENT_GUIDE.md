# 🚀 Render Deployment Guide - Sea Waves

## **Complete Render Service Setup**

### **Step 1: Create New Web Service**

1. **Go to [render.com](https://render.com)**
2. **Click "New +"** → **"Web Service"**
3. **Connect GitHub**: `dawgx/seawaves-egypt-website`
4. **Click "Connect"**

### **Step 2: Basic Configuration**

```
Name: sea-waves-aqua-center
Environment: Node
Region: Oregon (US West)
Branch: main
Root Directory: sea-waves-website
```

### **Step 3: Build & Deploy Settings**

```
Build Command: npm install && npm run build
Start Command: node server.js
```

### **Step 4: Environment Variables**

Go to **Environment** tab and add these variables:

```env
# SendGrid Configuration (Primary Email Service)
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM=settlethailand@gmail.com

# Gmail SMTP Configuration (Backup)
EMAIL_USER=settlethailand@gmail.com
EMAIL_PASS=your_gmail_app_password_here

# Twilio WhatsApp Configuration (REQUIRED for WhatsApp notifications)
TWILIO_ACCOUNT_SID=AC970c23c1d9ec86c43c45d6ace8a4c307
TWILIO_AUTH_TOKEN=your_twilio_auth_token_here
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+962798350069

# Server Configuration
NODE_ENV=production
EMAIL_SERVICE=sendgrid

# Video URL (Optional - if hosting video on CDN)
# If not set, will try to load from /introduction.mp4
# Example: REACT_APP_VIDEO_URL=https://your-cdn.com/videos/introduction.mp4
REACT_APP_VIDEO_URL=
```

### **Step 5: Advanced Settings**

```
Auto-Deploy: Yes
Pull Request Previews: Yes
Health Check Path: /api/health
```

## **Testing Your Deployment**

### **1. Health Check**
```
GET https://your-app-name.onrender.com/api/health
```

### **2. Email Test**
```
GET https://your-app-name.onrender.com/api/test-email
```

### **3. Contact Form Test**
1. **Visit your website**
2. **Fill out the contact form**
3. **Submit and check logs**
4. **Verify emails are sent**

## **Video File Setup**

The `introduction.mp4` video file (651 MB) is too large for GitHub and is excluded from the repository. You have two options:

### **Option 1: Host Video on CDN (Recommended)**

1. **Upload video to a CDN service:**
   - [Cloudinary](https://cloudinary.com) (free tier available)
   - [AWS S3](https://aws.amazon.com/s3/)
   - [Google Cloud Storage](https://cloud.google.com/storage)
   - [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)

2. **Get the public URL** of your uploaded video

3. **Add to Render Environment Variables:**
   ```
   REACT_APP_VIDEO_URL=https://your-cdn-url.com/introduction.mp4
   ```

4. **Redeploy** your service on Render

### **Option 2: Upload Video Directly to Render**

1. **SSH into your Render service** (if available)
2. **Upload the video file** to the `public` folder
3. **Restart the service**

### **Option 3: Use Video Hosting Service**

1. Upload video to [YouTube](https://youtube.com) or [Vimeo](https://vimeo.com)
2. Get the embed URL
3. Update the Hero component to use an iframe instead of video tag

**Note:** The video will work locally but won't appear on Render until you set up one of these options.

## **Success Checklist**

- [ ] Service deployed successfully
- [ ] Health check returns OK
- [ ] Email test endpoint works
- [ ] Contact form sends emails
- [ ] SendGrid integration active
- [ ] Twilio environment variables set correctly
- [ ] WhatsApp notifications working (check logs)
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Monitoring logs show success

## **Environment Variables Summary**

| Variable | Value | Purpose |
|----------|-------|---------|
| `SENDGRID_API_KEY` | Your SendGrid API key | Primary email service |
| `SENDGRID_FROM` | settlethailand@gmail.com | Sender email |
| `EMAIL_USER` | settlethailand@gmail.com | Gmail backup |
| `EMAIL_PASS` | Your Gmail app password | Gmail backup |
| `TWILIO_ACCOUNT_SID` | AC... (from Twilio Console) | Twilio Account SID |
| `TWILIO_AUTH_TOKEN` | Your Twilio Auth Token | Twilio authentication |
| `TWILIO_WHATSAPP_FROM` | whatsapp:+14155238886 | Twilio WhatsApp sender |
| `TWILIO_WHATSAPP_TO` | whatsapp:+962798350069 | Your WhatsApp number |
| `NODE_ENV` | production | Server environment |
| `EMAIL_SERVICE` | sendgrid | Email service preference |

## **⚠️ Important: Getting Your Twilio Auth Token**

1. **Log in to [Twilio Console](https://console.twilio.com)**
2. **Go to Account → API Keys & Tokens**
3. **Click "View" next to Auth Token** (it's hidden by default)
4. **Copy the Auth Token** - this is what you need for `TWILIO_AUTH_TOKEN`
5. **Make sure your Account SID** (starts with `AC...`) matches what's in your config

**Note:** The Auth Token is different from API Key Secret. Use the **Auth Token** for `TWILIO_AUTH_TOKEN`.

---

**Your Sea Waves website is ready for production! 🐠🌊**
