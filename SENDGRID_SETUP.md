# SendGrid Setup Guide for Sea Waves

## 🚀 Quick Setup Steps

### 1. Create SendGrid Account
1. Go to [sendgrid.com](https://sendgrid.com)
2. Click "Start for Free" 
3. Sign up with `settlethailand@gmail.com`
4. Verify your email address

### 2. Get API Key
1. In SendGrid dashboard → **Settings** → **API Keys**
2. Click **"Create API Key"**
3. Choose **"Restricted Access"**
4. Name: "Sea Waves Website"
5. Under **Mail Send** → **"Full Access"**
6. Click **"Create & View"**
7. **Copy the API key** (you'll only see it once!)

### 3. Verify Sender Identity
1. Go to **Settings** → **Sender Authentication**
2. Click **"Verify a Single Sender"**
3. Fill in:
   - **From Name**: Sea Waves
   - **From Email**: settlethailand@gmail.com
   - **Reply To**: settlethailand@gmail.com
   - **Company Address**: Your business address
4. Click **"Create"**
5. Check your email and click the verification link

### 4. Set Environment Variables

#### For Local Development:
Create a `.env` file` in your project root:
```env
SENDGRID_API_KEY=your_api_key_here
SENDGRID_FROM=settlethailand@gmail.com
```

#### For Production (Render):
1. Go to your Render dashboard
2. Select your service
3. Go to **Environment** tab
4. Add these variables:
   - `SENDGRID_API_KEY` = your_api_key_here
   - `SENDGRID_FROM` = settlethailand@gmail.com

### 5. Test Your Setup
1. Deploy your changes
2. Visit: `https://your-domain.com/api/test-email`
3. Check the response to see if SendGrid is working

## 📧 How It Works

The system now uses a **smart email service**:

1. **SendGrid First** (cloud-friendly, works with hosting providers)
2. **Gmail SMTP Fallback** (if SendGrid fails)
3. **Console Log** (if both fail)

## 🔧 Troubleshooting

### SendGrid Issues:
- Check API key is correct
- Verify sender identity is verified
- Check SendGrid dashboard for delivery status

### Gmail SMTP Issues:
- Usually blocked by hosting providers (this is expected)
- The system will automatically fall back to SendGrid

## 📊 Free Tier Limits

SendGrid Free Tier:
- **100 emails/day**
- **40,000 emails/month**
- Perfect for small business websites

## 🎯 Benefits

✅ **Works with cloud hosting** (Render, Vercel, etc.)
✅ **No SMTP blocking issues**
✅ **Better deliverability**
✅ **Email analytics**
✅ **Professional sender reputation**
