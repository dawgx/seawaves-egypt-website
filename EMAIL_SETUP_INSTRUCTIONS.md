# Email Setup Instructions for Sea Waves Contact Form

## Overview
The contact form is now functional and will send emails to `settlethailand@gmail.com` when customers submit inquiries.

## Setup Steps

### 1. Gmail App Password Setup
Since you're using Gmail, you need to create an App Password:

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification (enable if not already)
3. Go to App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 2. Set Environment Variable
Set the EMAIL_PASS environment variable with your app password:

**Windows (Command Prompt):**
```cmd
set EMAIL_PASS=your_16_character_app_password_here
```

**Windows (PowerShell):**
```powershell
$env:EMAIL_PASS="your_16_character_app_password_here"
```

**Permanent setup (Windows):**
1. Open System Properties → Environment Variables
2. Add new variable: `EMAIL_PASS` with your app password value

### 3. Start the Backend Server
Navigate to the backend folder and run:
```bash
cd backend
npm install
node server.js
```

Or use the provided batch file:
```bash
start-server.bat
```

### 4. Start the Frontend
In a new terminal, navigate to the main project folder and run:
```bash
npm start
```

## How It Works

1. **Customer submits form** → Frontend sends data to backend API
2. **Backend receives data** → Validates and sends two emails:
   - **Admin email** to `settlethailand@gmail.com` with customer details
   - **Confirmation email** to customer with thank you message
3. **Customer sees success message** → Form resets for new submission

## Email Templates

The system sends beautifully formatted HTML emails with:
- **Admin email**: Complete customer inquiry details with quick action links
- **Customer email**: Professional thank you message with next steps

## Testing

1. Fill out the contact form on your website
2. Check `settlethailand@gmail.com` for the admin notification
3. Check the customer's email for the confirmation message

## Troubleshooting

- **"Authentication failed"**: Check your app password is correct
- **"Connection refused"**: Make sure backend server is running on port 5000
- **CORS errors**: Backend includes CORS headers for frontend communication

## Security Notes

- Never commit your app password to version control
- Use environment variables for sensitive data
- Consider using a dedicated email service for production
