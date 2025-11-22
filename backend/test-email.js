// Test script to verify email configuration
const nodemailer = require('nodemailer');
const config = require('./config');

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('Email User:', config.email.user);
  console.log('Email Pass:', config.email.pass ? '***SET***' : 'NOT SET');
  console.log('Admin Email:', config.email.adminEmail);
  
  if (!config.email.pass) {
    console.error('❌ EMAIL_PASS environment variable is not set!');
    console.log('Please set it with: set EMAIL_PASS=your_app_password_here');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
  });

  try {
    // Test connection
    await transporter.verify();
    console.log('✅ Email configuration is working!');
    
    // Send test email
    const testMailOptions = {
      from: config.email.user,
      to: config.email.adminEmail,
      subject: 'Test Email - Sea Waves Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af, #f97316); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Sea Waves</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Test Email</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e40af; margin-top: 0;">Email Configuration Test</h2>
            <p style="color: #374151; line-height: 1.6;">
              This is a test email to verify that the contact form email system is working correctly.
            </p>
            <p style="color: #374151; line-height: 1.6;">
              If you received this email, the contact form is ready to use!
            </p>
          </div>
          
          <div style="background: #374151; color: white; padding: 15px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">Sea Waves - Red Sea Adventures</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Test email sent successfully</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(testMailOptions);
    console.log('✅ Test email sent successfully to', config.email.adminEmail);
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    if (error.message.includes('Invalid login')) {
      console.log('💡 Check your app password - it should be 16 characters long');
    }
  }
}

testEmail();
