# 🚀 Render Deployment Guide - Sea Waves Aqua Center

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

# Server Configuration
NODE_ENV=production
EMAIL_SERVICE=sendgrid
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

## **Success Checklist**

- [ ] Service deployed successfully
- [ ] Health check returns OK
- [ ] Email test endpoint works
- [ ] Contact form sends emails
- [ ] SendGrid integration active
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
| `NODE_ENV` | production | Server environment |
| `EMAIL_SERVICE` | sendgrid | Email service preference |

---

**Your Sea Waves Aqua Center website is ready for production! 🐠🌊**
