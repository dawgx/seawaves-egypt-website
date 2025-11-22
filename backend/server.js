require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const config = require('./config');

const app = express();
const PORT = config.server.port;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'outlook', 'yahoo', etc.
  auth: {
    user: config.email.user,
    pass: config.email.pass
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, phone, preferredDate, numberOfPeople, message, activityName } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Email content
    const mailOptions = {
      from: config.email.user,
      to: config.email.adminEmail, // Founder's email
      subject: `New Inquiry for ${activityName} - Sea Waves`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af, #f97316); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Sea Waves</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New Customer Inquiry</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e40af; margin-top: 0;">Activity: ${activityName}</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #1e40af;">Name:</strong> ${fullName}
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #1e40af;">Email:</strong> 
                <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #1e40af;">Phone:</strong> 
                <a href="tel:${phone}" style="color: #f97316; text-decoration: none;">${phone}</a>
              </div>
              
              ${preferredDate ? `
                <div style="margin-bottom: 15px;">
                  <strong style="color: #1e40af;">Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString()}
                </div>
              ` : ''}
              
              ${numberOfPeople ? `
                <div style="margin-bottom: 15px;">
                  <strong style="color: #1e40af;">Number of People:</strong> ${numberOfPeople}
                </div>
              ` : ''}
              
              ${message ? `
                <div style="margin-bottom: 15px;">
                  <strong style="color: #1e40af;">Message:</strong>
                  <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap;">${message}</div>
                </div>
              ` : ''}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
              <p style="margin: 0; color: #1e40af; font-weight: 500;">
                💡 <strong>Quick Actions:</strong> 
                <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">Reply to Customer</a> | 
                <a href="tel:${phone}" style="color: #f97316; text-decoration: none;">Call Customer</a>
              </p>
            </div>
          </div>
          
          <div style="background: #374151; color: white; padding: 15px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">Sea Waves - Red Sea Adventures</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">This email was sent from your website contact form</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
    const confirmationMailOptions = {
      from: config.email.user,
      to: email,
      subject: 'Thank you for your inquiry - Sea Waves',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af, #f97316); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Sea Waves</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Thank you for your inquiry!</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e40af; margin-top: 0;">Hello ${fullName}!</h2>
            
            <p style="color: #374151; line-height: 1.6;">
              Thank you for your interest in <strong>${activityName}</strong>! We've received your inquiry and our team will get back to you within 24 hours.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">What happens next?</h3>
              <ul style="color: #374151; line-height: 1.6;">
                <li>Our adventure expert Ahmed will review your inquiry</li>
                <li>We'll contact you to discuss your preferences</li>
                <li>We'll provide you with detailed information and pricing</li>
                <li>We'll help you plan your perfect Red Sea adventure!</li>
              </ul>
            </div>
            
            <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1e40af;">
                <strong>Need immediate assistance?</strong><br>
                📞 Call us: +20 106 11 11 368<br>
                📧 Email: settlethailand@gmail.com
              </p>
            </div>
          </div>
          
          <div style="background: #374151; color: white; padding: 15px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">Sea Waves - Red Sea Adventures</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Experience the magic of the Red Sea</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
