const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const path = require('path');
const config = require('./backend/config.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid
if (config.email.sendgrid.apiKey) {
  sgMail.setApiKey(config.email.sendgrid.apiKey);
  console.log('✅ SendGrid initialized successfully');
} else {
  console.log('⚠️  SendGrid API key not found - using Gmail SMTP fallback');
}

// Enhanced Gmail SMTP configuration with detailed logging
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.email.user,
    pass: config.email.pass
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'SSLv3'
  },
  // Reduced timeouts for faster failure detection
  connectionTimeout: 15000, // 15 seconds
  greetingTimeout: 10000,   // 10 seconds
  socketTimeout: 15000,     // 15 seconds
  // Additional debugging options
  debug: true,
  logger: true
});

// Test Gmail connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Gmail SMTP Connection Test Failed:', error.message);
    console.error('Error code:', error.code);
    console.error('Error command:', error.command);
    console.error('Full error:', error);
  } else {
    console.log('✅ Gmail SMTP Connection Test Successful');
    console.log('Server is ready to send emails');
  }
});

// Smart email sending function - SendGrid first, Gmail SMTP fallback
const sendEmail = async (mailOptions) => {
  console.log('📧 === EMAIL SENDING ATTEMPT ===');
  console.log('📧 To:', mailOptions.to);
  console.log('📧 Subject:', mailOptions.subject);
  console.log('📧 From:', mailOptions.from);
  
  // Method 1: Try SendGrid (cloud-friendly)
  if (config.email.sendgrid.apiKey) {
    try {
      console.log('📧 Attempting SendGrid API...');
      const startTime = Date.now();
      
      const sendGridMessage = {
        to: mailOptions.to,
        from: {
          email: config.email.sendgrid.from,
          name: config.email.sendgrid.fromName
        },
        subject: mailOptions.subject,
        html: mailOptions.html
      };
      
      const result = await sgMail.send(sendGridMessage);
      const endTime = Date.now();
      
      console.log('✅ SendGrid SUCCESS!');
      console.log('📧 Response:', result[0].statusCode);
      console.log('📧 Time taken:', (endTime - startTime) + 'ms');
      console.log('📧 ================================');
      
      return { success: true, method: 'SendGrid', statusCode: result[0].statusCode };
    } catch (error) {
      console.error('❌ SendGrid FAILED!');
      console.error('📧 Error:', error.message);
      console.error('📧 Response:', error.response?.body);
    }
  } else {
    console.log('📧 SendGrid API key not available, trying Gmail SMTP...');
  }
  
  // Method 2: Try Gmail SMTP (may be blocked by hosting)
  try {
    console.log('📧 Attempting Gmail SMTP connection...');
    console.log('📧 Gmail SMTP Config:');
    console.log('📧   - Host: smtp.gmail.com');
    console.log('📧   - Port: 587');
    console.log('📧   - Secure: false');
    console.log('📧   - User:', config.email.gmail.user);
    console.log('📧   - Pass: [HIDDEN]');
    
    const startTime = Date.now();
    const result = await transporter.sendMail(mailOptions);
    const endTime = Date.now();
    
    console.log('✅ Gmail SMTP SUCCESS!');
    console.log('📧 Response ID:', result.messageId);
    console.log('📧 Response:', result.response);
    console.log('📧 Time taken:', (endTime - startTime) + 'ms');
    console.log('📧 ================================');
    
    return { success: true, method: 'Gmail SMTP', messageId: result.messageId };
  } catch (error) {
    console.error('❌ Gmail SMTP FAILED!');
    console.error('📧 Error Type:', error.name);
    console.error('📧 Error Message:', error.message);
    console.error('📧 Error Code:', error.code);
    
    if (error.code === 'ETIMEDOUT') {
      console.error('📧 DIAGNOSIS: Gmail SMTP blocked by hosting provider - Use SendGrid instead');
    }
  }
  
  // Method 3: Console fallback
  console.log('📧 === FALLBACK TO CONSOLE LOG ===');
  console.log('📧 To:', mailOptions.to);
  console.log('📧 Subject:', mailOptions.subject);
  console.log('📧 Content preview:', mailOptions.html.substring(0, 200) + '...');
  console.log('📧 ================================');
  
  return { success: false, method: 'console-log' };
};

// API Routes
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
      from: config.email.sendgrid.from || config.email.gmail.user,
      to: config.email.adminEmail,
      subject: `New Inquiry for ${activityName} - Sea Waves Aqua Center`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af, #f97316); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Sea Waves Aqua Center</h1>
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
            <p style="margin: 0;">Sea Waves Aqua Center - Red Sea Adventures</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">This email was sent from your website contact form</p>
          </div>
        </div>
      `
    };

    // Send admin email using smart email function
    const adminEmailResult = await sendEmail(mailOptions);
    
    // Send confirmation email to customer
    const confirmationMailOptions = {
      from: config.email.sendgrid.from || config.email.gmail.user,
      to: email,
      subject: 'Thank you for your inquiry - Sea Waves Aqua Center',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af, #f97316); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Sea Waves Aqua Center</h1>
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
            <p style="margin: 0;">Sea Waves Aqua Center - Red Sea Adventures</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Experience the magic of the Red Sea</p>
          </div>
        </div>
      `
    };

    const confirmationEmailResult = await sendEmail(confirmationMailOptions);

    // Log inquiry details for manual follow-up
    console.log('=== INQUIRY RECEIVED ===');
    console.log('Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Activity:', activityName);
    console.log('Message:', message);
    console.log('Admin email status:', adminEmailResult.success ? 'Sent' : 'Failed');
    console.log('Confirmation email status:', confirmationEmailResult.success ? 'Sent' : 'Failed');
    console.log('========================');

    // Always return success to user
    res.json({ 
      success: true, 
      message: adminEmailResult.success ? 'Email sent successfully!' : 'Inquiry received! We will contact you soon.',
      emailStatus: adminEmailResult.success ? 'sent' : 'logged',
      method: adminEmailResult.method || 'console-log'
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

// Email service test endpoint (SendGrid + Gmail SMTP)
app.get('/api/test-email', async (req, res) => {
  console.log('🧪 === EMAIL SERVICE TEST ===');
  
  const testMailOptions = {
    from: config.email.sendgrid.from || config.email.gmail.user,
    to: config.email.adminEmail,
    subject: 'Email Service Test - Sea Waves Aqua Center',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">Email Service Test Successful!</h2>
        <p>This is a test email to verify email configuration.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p><strong>Server:</strong> Sea Waves Aqua Center</p>
        <p><strong>Service:</strong> SendGrid (primary) / Gmail SMTP (fallback)</p>
      </div>
    `
  };
  
  try {
    const result = await sendEmail(testMailOptions);
    
    res.json({
      success: result.success,
      message: result.success ? 'Email test completed successfully' : 'Email test failed',
      service: result.method,
      details: result,
      sendgridAvailable: !!config.email.sendgrid.apiKey,
      gmailAvailable: !!config.email.gmail.user,
      adminEmail: config.email.adminEmail,
      fromEmail: config.email.sendgrid.from || config.email.gmail.user
    });
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    res.json({
      success: false,
      message: 'Email test failed',
      error: error.message,
      sendgridAvailable: !!config.email.sendgrid.apiKey,
      gmailAvailable: !!config.email.gmail.user,
      adminEmail: config.email.adminEmail,
      fromEmail: config.email.sendgrid.from || config.email.gmail.user
    });
  }
});

// Debug endpoint to check email configuration
app.get('/api/debug-email', (req, res) => {
  res.json({
    sendgrid: {
      apiKey: config.email.sendgrid.apiKey ? 'SET' : 'NOT SET',
      from: config.email.sendgrid.from,
      fromName: config.email.sendgrid.fromName
    },
    gmail: {
      user: config.email.gmail.user,
      pass: config.email.gmail.pass ? 'SET' : 'NOT SET'
    },
    adminEmail: config.email.adminEmail,
    defaultService: config.email.defaultService,
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ? 'SET' : 'NOT SET',
      SENDGRID_FROM: process.env.SENDGRID_FROM
    }
  });
});

// Debug endpoint to check image serving
app.get('/api/debug-images', (req, res) => {
  const fs = require('fs');
  const imagesPath = path.join(__dirname, 'public', 'images');
  
  try {
    const imageFiles = [];
    
    function scanDirectory(dir, relativePath = '') {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const relativeItemPath = path.join(relativePath, item);
        
        if (fs.statSync(fullPath).isDirectory()) {
          scanDirectory(fullPath, relativeItemPath);
        } else {
          const ext = path.extname(item).toLowerCase();
          if (['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'].includes(ext)) {
            imageFiles.push({
              path: `/images/${relativeItemPath.replace(/\\/g, '/')}`,
              name: item,
              size: fs.statSync(fullPath).size,
              extension: ext
            });
          }
        }
      });
    }
    
    scanDirectory(imagesPath);
    
    res.json({
      imagesPath: imagesPath,
      publicPath: path.join(__dirname, 'public'),
      buildPath: path.join(__dirname, 'build'),
      buildImagesExists: fs.existsSync(path.join(__dirname, 'build', 'images')),
      publicImagesExists: fs.existsSync(path.join(__dirname, 'public', 'images')),
      totalImages: imageFiles.length,
      sampleImages: imageFiles.slice(0, 10),
      directories: fs.readdirSync(imagesPath).filter(item => 
        fs.statSync(path.join(imagesPath, item)).isDirectory()
      )
    });
  } catch (error) {
    res.json({
      error: error.message,
      imagesPath: imagesPath,
      exists: fs.existsSync(imagesPath)
    });
  }
});

// Test image serving
app.get('/api/test-image', (req, res) => {
  const testImagePath = path.join(__dirname, 'public', 'images', 'founderimage.jpg');
  const fs = require('fs');
  
  if (fs.existsSync(testImagePath)) {
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.sendFile(testImagePath);
  } else {
    res.status(404).json({
      error: 'Test image not found',
      path: testImagePath,
      exists: fs.existsSync(testImagePath),
      publicExists: fs.existsSync(path.join(__dirname, 'public')),
      imagesExists: fs.existsSync(path.join(__dirname, 'public', 'images'))
    });
  }
});

// Test specific diving image
app.get('/api/test-diving-image', (req, res) => {
  const testImagePath = path.join(__dirname, 'public', 'images', 'diving', '12.webp');
  const fs = require('fs');
  
  if (fs.existsSync(testImagePath)) {
    res.setHeader('Content-Type', 'image/webp');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.sendFile(testImagePath);
  } else {
    res.status(404).json({
      error: 'Diving image not found',
      path: testImagePath,
      exists: fs.existsSync(testImagePath),
      divingExists: fs.existsSync(path.join(__dirname, 'public', 'images', 'diving'))
    });
  }
});

// Test admin email specifically
app.get('/api/test-admin-email', async (req, res) => {
  console.log('🧪 === ADMIN EMAIL TEST ===');
  console.log('🧪 Testing email to admin:', config.email.adminEmail);
  
  const adminTestMailOptions = {
    from: config.email.sendgrid.from || config.email.gmail.user,
    to: config.email.adminEmail,
    subject: 'ADMIN TEST - Sea Waves Aqua Center Inquiry',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af, #f97316); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Sea Waves Aqua Center</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">ADMIN TEST EMAIL</p>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1e40af; margin-top: 0;">This is a test email to verify admin email delivery</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #374151; margin-top: 0;">Test Details</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #1e40af;">Timestamp:</strong> ${new Date().toISOString()}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #1e40af;">From:</strong> ${config.email.sendgrid.from || config.email.gmail.user}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #1e40af;">To:</strong> ${config.email.adminEmail}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #1e40af;">Service:</strong> SendGrid (primary) / Gmail SMTP (fallback)
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <p style="margin: 0; color: #1e40af; font-weight: 500;">
              ✅ If you receive this email, admin email delivery is working correctly!
            </p>
          </div>
        </div>
        
        <div style="background: #374151; color: white; padding: 15px; text-align: center; font-size: 14px;">
          <p style="margin: 0;">Sea Waves Aqua Center - Admin Email Test</p>
          <p style="margin: 5px 0 0 0; opacity: 0.8;">This is a test email to verify admin delivery</p>
        </div>
      </div>
    `
  };
  
  try {
    console.log('🧪 Sending admin test email...');
    const result = await sendEmail(adminTestMailOptions);
    
    console.log('🧪 Admin email test result:', result);
    
    res.json({
      success: result.success,
      message: result.success ? 'Admin email test sent successfully' : 'Admin email test failed',
      service: result.method,
      details: result,
      adminEmail: config.email.adminEmail,
      fromEmail: config.email.sendgrid.from || config.email.gmail.user,
      sendgridAvailable: !!config.email.sendgrid.apiKey,
      gmailAvailable: !!config.email.gmail.user
    });
    
  } catch (error) {
    console.error('❌ Admin email test failed:', error.message);
    res.json({
      success: false,
      message: 'Admin email test failed',
      error: error.message,
      adminEmail: config.email.adminEmail,
      fromEmail: config.email.sendgrid.from || config.email.gmail.user
    });
  }
});

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve images from public directory
app.use('/images', express.static(path.join(__dirname, 'public', 'images'), {
  setHeaders: (res, path) => {
    // Set proper cache headers for images
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
    res.setHeader('Content-Type', getContentType(path));
  }
}));

// Helper function to get content type based on file extension
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.avif': 'image/avif',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
  };
  return contentTypes[ext] || 'application/octet-stream';
}

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
