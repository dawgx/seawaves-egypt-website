# Twilio WhatsApp Setup Guide

This guide will help you set up Twilio WhatsApp API integration for receiving notifications when customers submit inquiries through your contact form.

## Prerequisites

1. A Twilio account (sign up at https://www.twilio.com)
2. A Twilio phone number with WhatsApp capabilities
3. Your WhatsApp number (must be verified with Twilio for sandbox testing)

## Step 1: Get Your Twilio Credentials

1. Log in to your Twilio Console: https://console.twilio.com
2. Go to **Account** → **API Keys & Tokens**
3. Copy your:
   - **Account SID** (starts with `AC...`)
   - **Auth Token** (click "View" to reveal it)

## Step 2: Set Up WhatsApp Sandbox (For Testing)

1. In Twilio Console, go to **Messaging** → **Try it out** → **Send a WhatsApp message**
2. Follow the instructions to join the WhatsApp sandbox
3. Send the join code to the Twilio WhatsApp number (usually `+1 415 523 8886`)
4. Once joined, you can receive messages from the sandbox number

## Step 3: Get Your WhatsApp Numbers

### From Number (Twilio WhatsApp Number)
- For **Sandbox**: `whatsapp:+14155238886` (default Twilio sandbox number)
- For **Production**: Your Twilio WhatsApp-enabled phone number (format: `whatsapp:+1234567890`)

### To Number (Your WhatsApp Number)
- Format: `whatsapp:+[country code][phone number]`
- Example: `whatsapp:+201061111368` (for Egypt number +20 106 11 11 368)
- **Important**: For sandbox, you must first join the sandbox by sending the join code

## Step 4: Configure Environment Variables

Add these environment variables to your system or `.env` file:

```bash
# Twilio WhatsApp Configuration
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_API_KEY_SID=SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_API_KEY_SECRET=your_api_key_secret_here
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+201061111368
```

### For Windows (PowerShell):
```powershell
$env:TWILIO_ACCOUNT_SID="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
$env:TWILIO_API_KEY_SID="SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
$env:TWILIO_API_KEY_SECRET="your_api_key_secret_here"
$env:TWILIO_WHATSAPP_FROM="whatsapp:+14155238886"
$env:TWILIO_WHATSAPP_TO="whatsapp:+201061111368"
```

### For Windows (Command Prompt):
```cmd
set TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
set TWILIO_API_KEY_SID=SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
set TWILIO_API_KEY_SECRET=your_api_key_secret_here
set TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
set TWILIO_WHATSAPP_TO=whatsapp:+201061111368
```

### For Linux/Mac:
```bash
export TWILIO_ACCOUNT_SID="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
export TWILIO_API_KEY_SID="SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
export TWILIO_API_KEY_SECRET="your_api_key_secret_here"
export TWILIO_WHATSAPP_FROM="whatsapp:+14155238886"
export TWILIO_WHATSAPP_TO="whatsapp:+201061111368"
```

## Step 5: Install Twilio Package

The Twilio package is already added to `package.json`. Install dependencies:

```bash
npm install
```

## Step 6: Test the Integration

1. Start your server:
   ```bash
   npm start
   ```

2. Submit a test inquiry through your contact form

3. Check the console logs for WhatsApp sending status:
   - ✅ `Twilio WhatsApp SUCCESS!` - Message sent successfully
   - ❌ `Twilio WhatsApp FAILED!` - Check error message

4. Check your WhatsApp for the notification message

## WhatsApp Message Format

When a customer submits an inquiry, you'll receive a WhatsApp message like this:

```
🔔 New Inquiry - Sea Waves

Activity: Diving - Full Day Trips
Name: John Doe
Email: john@example.com
Phone: +201234567890
Preferred Date: 12/25/2024
Number of People: 2
Message: I'm interested in booking a diving trip.
```

## Troubleshooting

### Issue: "Twilio credentials not found"
- **Solution**: Make sure environment variables are set correctly
- Check that variable names match exactly (case-sensitive)

### Issue: "The number +XXXXXXXXXX is not a valid WhatsApp number"
- **Solution**: 
  - Ensure the number format is `whatsapp:+[country code][number]`
  - For sandbox, make sure you've joined the sandbox first
  - Remove any spaces, dashes, or parentheses from the number

### Issue: "Unable to create record: The number +XXXXXXXXXX is not a valid WhatsApp-enabled number"
- **Solution**: 
  - For sandbox: Use `whatsapp:+14155238886` as the FROM number
  - For production: You need a Twilio WhatsApp-enabled phone number

### Issue: "Message not received on WhatsApp"
- **Solution**:
  - For sandbox: Make sure you've sent the join code to the Twilio sandbox number
  - Check that your TO number is correct and includes country code
  - Verify your Twilio account has sufficient credits

## Moving from Sandbox to Production

1. **Request WhatsApp Access**:
   - Go to Twilio Console → **Messaging** → **Settings** → **WhatsApp Sandbox**
   - Click **Request Production Access**
   - Fill out the form and wait for approval

2. **Get a WhatsApp-Enabled Number**:
   - Once approved, purchase a WhatsApp-enabled phone number
   - Update `TWILIO_WHATSAPP_FROM` with your new number

3. **Update Configuration**:
   - Update environment variables with production numbers
   - Test thoroughly before going live

## Security Notes

⚠️ **Important**: Never commit your Auth Token to version control!

- Keep your `.env` file in `.gitignore`
- Use environment variables or secure secret management
- Rotate your Auth Token if it's ever exposed

## Support

- Twilio Documentation: https://www.twilio.com/docs/whatsapp
- Twilio Support: https://support.twilio.com
- Twilio WhatsApp API: https://www.twilio.com/docs/whatsapp/api

## Next Steps

After setup, the system will:
1. Send email notification to admin (via SendGrid)
2. Send WhatsApp notification to admin (via Twilio)
3. Send confirmation email to customer (via SendGrid)

Both notifications will include the full inquiry details including the specific activity/program selected.

