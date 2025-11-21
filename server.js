const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const twilio = require('twilio');
const path = require('path');
const fs = require('fs');
const config = require('./backend/config.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Add error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid
if (config.email.sendgrid.apiKey) {
  sgMail.setApiKey(config.email.sendgrid.apiKey);
  console.log('✅ SendGrid initialized successfully');
  console.log('📧 SendGrid From:', config.email.sendgrid.from);
  console.log('📧 Admin Email:', config.email.adminEmail);
} else {
  console.log('⚠️  SendGrid API key not found - emails will be logged to console only');
  console.log('📧 Environment variables check:');
  console.log('📧 SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? 'SET' : 'NOT SET');
  console.log('📧 SENDGRID_FROM:', process.env.SENDGRID_FROM || 'NOT SET');
}

// Initialize Twilio WhatsApp
let twilioClient = null;
console.log('🔍 === TWILIO INITIALIZATION DEBUG ===');
console.log('🔍 Checking Twilio config...');
console.log('🔍 apiKeySid:', config.whatsapp.twilio.apiKeySid ? `${config.whatsapp.twilio.apiKeySid.substring(0, 10)}...` : 'NOT SET');
console.log('🔍 apiKeySecret:', config.whatsapp.twilio.apiKeySecret ? `${config.whatsapp.twilio.apiKeySecret.substring(0, 10)}...` : 'NOT SET');
console.log('🔍 accountSid:', config.whatsapp.twilio.accountSid ? `${config.whatsapp.twilio.accountSid.substring(0, 10)}...` : 'NOT SET');
console.log('🔍 fromNumber:', config.whatsapp.twilio.fromNumber);
console.log('🔍 toNumber:', config.whatsapp.twilio.toNumber);

// Check if using API Key (starts with SK) or Account SID (starts with AC)
const isApiKey = config.whatsapp.twilio.apiKeySid && config.whatsapp.twilio.apiKeySid.startsWith('SK');
const hasAccountSid = config.whatsapp.twilio.accountSid && config.whatsapp.twilio.accountSid.startsWith('AC');

console.log('🔍 isApiKey:', isApiKey);
console.log('🔍 hasAccountSid:', hasAccountSid);
console.log('🔍 apiKeySecret exists:', !!config.whatsapp.twilio.apiKeySecret);
console.log('🔍 All conditions met:', isApiKey && config.whatsapp.twilio.apiKeySecret && hasAccountSid);

if (isApiKey && config.whatsapp.twilio.apiKeySecret && hasAccountSid) {
  // Using API Key - need Account SID as additional option
  try {
    console.log('🔍 Initializing Twilio with API Key...');
    twilioClient = twilio(config.whatsapp.twilio.apiKeySid, config.whatsapp.twilio.apiKeySecret, {
      accountSid: config.whatsapp.twilio.accountSid
    });
    console.log('✅ Twilio WhatsApp initialized successfully (using API Key)');
    console.log('📱 Twilio From:', config.whatsapp.twilio.fromNumber);
    console.log('📱 Twilio To:', config.whatsapp.twilio.toNumber);
    console.log('🔍 Twilio client type:', typeof twilioClient);
  } catch (error) {
    console.error('❌ Error initializing Twilio client with API Key:', error.message);
    console.error('❌ Error details:', error);
  }
} else if (hasAccountSid && config.whatsapp.twilio.apiKeySecret) {
  // Using Account SID directly (legacy method)
  try {
    console.log('🔍 Initializing Twilio with Account SID...');
    twilioClient = twilio(config.whatsapp.twilio.accountSid, config.whatsapp.twilio.apiKeySecret);
    console.log('✅ Twilio WhatsApp initialized successfully (using Account SID)');
    console.log('📱 Twilio From:', config.whatsapp.twilio.fromNumber);
    console.log('📱 Twilio To:', config.whatsapp.twilio.toNumber);
    console.log('🔍 Twilio client type:', typeof twilioClient);
  } catch (error) {
    console.error('❌ Error initializing Twilio client with Account SID:', error.message);
    console.error('❌ Error details:', error);
  }
} else {
  console.log('⚠️  Twilio credentials not found or incomplete - WhatsApp messages will be logged to console only');
  console.log('🔍 Debugging why initialization failed:');
  console.log('  - apiKeySid exists:', !!config.whatsapp.twilio.apiKeySid);
  console.log('  - apiKeySid starts with SK:', config.whatsapp.twilio.apiKeySid?.startsWith('SK'));
  console.log('  - apiKeySecret exists:', !!config.whatsapp.twilio.apiKeySecret);
  console.log('  - accountSid exists:', !!config.whatsapp.twilio.accountSid);
  console.log('  - accountSid starts with AC:', config.whatsapp.twilio.accountSid?.startsWith('AC'));
  console.log('📱 Environment variables check:');
  console.log('📱 TWILIO_ACCOUNT_SID:', process.env.TWILIO_ACCOUNT_SID ? 'SET' : 'NOT SET');
  console.log('📱 TWILIO_AUTH_TOKEN:', process.env.TWILIO_AUTH_TOKEN ? 'SET' : 'NOT SET');
  console.log('📱 TWILIO_WHATSAPP_FROM:', process.env.TWILIO_WHATSAPP_FROM || 'NOT SET');
  console.log('📱 TWILIO_WHATSAPP_TO:', process.env.TWILIO_WHATSAPP_TO || 'NOT SET');
}
console.log('🔍 Final twilioClient status:', twilioClient ? 'INITIALIZED' : 'NULL');
console.log('🔍 === END TWILIO INIT DEBUG ===\n');

// Email sending function - SendGrid only
const sendEmail = async (mailOptions) => {
  console.log('📧 === EMAIL SENDING ATTEMPT ===');
  console.log('📧 To:', mailOptions.to);
  console.log('📧 Subject:', mailOptions.subject);
  console.log('📧 From:', mailOptions.from);
  
  // Try SendGrid
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
      
      // Return error result instead of falling through to console log
      return { success: false, method: 'SendGrid', error: error.message };
    }
  } else {
    console.log('📧 SendGrid API key not available');
    
    // Console fallback
    console.log('📧 === FALLBACK TO CONSOLE LOG ===');
    console.log('📧 To:', mailOptions.to);
    console.log('📧 Subject:', mailOptions.subject);
    console.log('📧 Content preview:', mailOptions.html.substring(0, 200) + '...');
    console.log('📧 ================================');
    
    return { success: false, method: 'console-log' };
  }
};

// WhatsApp sending function - Twilio
const sendWhatsApp = async (messageText) => {
  console.log('\n🔍 === WHATSAPP SENDING DEBUG START ===');
  console.log('📱 === WHATSAPP SENDING ATTEMPT ===');
  console.log('🔍 Twilio client exists:', !!twilioClient);
  console.log('🔍 Twilio client type:', typeof twilioClient);
  console.log('📱 To:', config.whatsapp.twilio.toNumber);
  console.log('📱 From:', config.whatsapp.twilio.fromNumber);
  console.log('📱 Message length:', messageText.length);
  console.log('📱 Message preview:', messageText.substring(0, 100) + '...');
  
  if (twilioClient) {
    try {
      console.log('🔍 Attempting to create message with Twilio...');
      console.log('🔍 Account SID:', config.whatsapp.twilio.accountSid ? `${config.whatsapp.twilio.accountSid.substring(0, 10)}...` : 'MISSING');
      console.log('🔍 Auth Token:', config.whatsapp.twilio.authToken ? `${config.whatsapp.twilio.authToken.substring(0, 10)}...` : 'MISSING');
      
      const startTime = Date.now();
      const messagePayload = {
        from: config.whatsapp.twilio.fromNumber,
        to: config.whatsapp.twilio.toNumber,
        body: messageText
      };
      
      console.log('🔍 Message payload:', JSON.stringify(messagePayload, null, 2));
      console.log('📱 Attempting Twilio WhatsApp API...');
      
      const message = await twilioClient.messages.create(messagePayload);
      
      const endTime = Date.now();
      
      console.log('✅ Twilio WhatsApp SUCCESS!');
      console.log('📱 Message SID:', message.sid);
      console.log('📱 Status:', message.status);
      console.log('📱 Time taken:', (endTime - startTime) + 'ms');
      console.log('📱 Full message response:', JSON.stringify(message, null, 2));
      console.log('📱 ================================');
      console.log('🔍 === WHATSAPP SENDING DEBUG END ===\n');
      
      return { success: true, method: 'Twilio', sid: message.sid, status: message.status };
    } catch (error) {
      console.error('❌ Twilio WhatsApp FAILED!');
      console.error('📱 Error Message:', error.message);
      console.error('📱 Error Code:', error.code);
      console.error('📱 Error Status:', error.status);
      console.error('📱 Error Details:', error.moreInfo || 'No additional info');
      console.error('📱 Full Error:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
      console.error('📱 ================================');
      console.error('🔍 === WHATSAPP SENDING DEBUG END (ERROR) ===\n');
      
      return { success: false, method: 'Twilio', error: error.message, code: error.code, status: error.status };
    }
  } else {
    console.log('❌ Twilio client not available');
    console.log('🔍 Twilio client is null or undefined');
    console.log('📱 === FALLBACK TO CONSOLE LOG ===');
    console.log('📱 To:', config.whatsapp.twilio.toNumber);
    console.log('📱 Message:', messageText);
    console.log('📱 ================================');
    console.log('🔍 === WHATSAPP SENDING DEBUG END (NO CLIENT) ===\n');
    
    return { success: false, method: 'console-log' };
  }
};

// API Routes
app.post('/api/contact', async (req, res) => {
  console.log('\n🔍 ============================================');
  console.log('🔍 === CONTACT FORM SUBMISSION DEBUG START ===');
  console.log('🔍 ============================================');
  console.log('📧 === CONTACT FORM SUBMISSION ===');
  console.log('🔍 Request method:', req.method);
  console.log('🔍 Request URL:', req.url);
  console.log('🔍 Request headers:', JSON.stringify(req.headers, null, 2));
  console.log('📧 Request body:', JSON.stringify(req.body, null, 2));
  
  try {
    console.log('🔍 Extracting form data...');
    const { fullName, email, phone, preferredDate, numberOfPeople, message, activityName } = req.body;
    
    console.log('🔍 Extracted values:');
    console.log('  - fullName:', fullName);
    console.log('  - email:', email);
    console.log('  - phone:', phone);
    console.log('  - preferredDate:', preferredDate);
    console.log('  - numberOfPeople:', numberOfPeople);
    console.log('  - message:', message);
    console.log('  - activityName:', activityName);

    // Validate required fields
    if (!fullName || !email || !phone) {
      console.log('❌ Missing required fields:', { fullName: !!fullName, email: !!email, phone: !!phone });
      console.log('🔍 === CONTACT FORM SUBMISSION DEBUG END (VALIDATION FAILED) ===\n');
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    console.log('✅ Form validation passed');
    console.log('📧 SendGrid config check:', {
      apiKey: config.email.sendgrid.apiKey ? 'SET' : 'NOT SET',
      from: config.email.sendgrid.from,
      adminEmail: config.email.adminEmail
    });

    // Email content
    const mailOptions = {
      from: config.email.sendgrid.from,
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
    console.log('📧 Attempting to send admin email...');
    const adminEmailResult = await sendEmail(mailOptions);
    console.log('📧 Admin email result:', adminEmailResult);
    
    // Send confirmation email to customer
    console.log('📧 Attempting to send confirmation email...');
    const confirmationMailOptions = {
      from: config.email.sendgrid.from,
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
    console.log('📧 Confirmation email result:', confirmationEmailResult);

    // Send WhatsApp notification to admin
    console.log('📱 Attempting to send WhatsApp notification...');
    const whatsappMessage = `🔔 New Inquiry - Sea Waves Aqua Center

Activity: ${activityName}
Name: ${fullName}
Email: ${email}
Phone: ${phone}
${preferredDate ? `Preferred Date: ${new Date(preferredDate).toLocaleDateString()}\n` : ''}${numberOfPeople ? `Number of People: ${numberOfPeople}\n` : ''}${message ? `Message: ${message}` : ''}`;
    
    const whatsappResult = await sendWhatsApp(whatsappMessage);
    console.log('📱 WhatsApp result:', whatsappResult);

    // Log inquiry details for manual follow-up
    console.log('=== INQUIRY RECEIVED ===');
    console.log('Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Activity:', activityName);
    console.log('Message:', message);
    console.log('Admin email status:', adminEmailResult.success ? 'Sent' : 'Failed');
    console.log('Confirmation email status:', confirmationEmailResult.success ? 'Sent' : 'Failed');
    console.log('WhatsApp status:', whatsappResult.success ? 'Sent' : 'Failed');
    console.log('========================');

    // Return success - form was received and logged even if notifications fail
    // This ensures the customer knows their inquiry was received
    const response = { 
      success: true, 
      message: 'Inquiry submitted successfully! We will contact you soon.',
      emailStatus: adminEmailResult.success ? 'sent' : 'failed',
      whatsappStatus: whatsappResult.success ? 'sent' : 'failed',
      emailMethod: adminEmailResult.method,
      whatsappMethod: whatsappResult.method,
      note: (!adminEmailResult.success && !whatsappResult.success) 
        ? 'Notifications failed but inquiry was logged. Please contact us directly if urgent.' 
        : undefined
    };
    
    console.log('🔍 Response being sent:', JSON.stringify(response, null, 2));
    console.log('🔍 === CONTACT FORM SUBMISSION DEBUG END (SUCCESS) ===');
    console.log('🔍 ============================================\n');
    
    res.json(response);

  } catch (error) {
    console.error('\n🔍 === CONTACT FORM SUBMISSION DEBUG END (EXCEPTION) ===');
    console.error('❌ Error in contact form submission:', error);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error stack:', error.stack);
    console.error('❌ Full error:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    console.error('🔍 ============================================\n');
    
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Debug endpoint to test Twilio configuration
app.get('/api/debug-twilio', (req, res) => {
  console.log('\n🔍 === TWILIO DEBUG ENDPOINT ===');
  const debugInfo = {
    twilioClientExists: !!twilioClient,
    twilioClientType: typeof twilioClient,
    config: {
      apiKeySid: config.whatsapp.twilio.apiKeySid ? `${config.whatsapp.twilio.apiKeySid.substring(0, 10)}...` : 'NOT SET',
      apiKeySecret: config.whatsapp.twilio.apiKeySecret ? `${config.whatsapp.twilio.apiKeySecret.substring(0, 10)}...` : 'NOT SET',
      accountSid: config.whatsapp.twilio.accountSid ? `${config.whatsapp.twilio.accountSid.substring(0, 10)}...` : 'NOT SET',
      fromNumber: config.whatsapp.twilio.fromNumber,
      toNumber: config.whatsapp.twilio.toNumber
    },
    checks: {
      isApiKey: config.whatsapp.twilio.apiKeySid?.startsWith('SK'),
      hasAccountSid: config.whatsapp.twilio.accountSid?.startsWith('AC'),
      hasApiKeySecret: !!config.whatsapp.twilio.apiKeySecret,
      allConditionsMet: config.whatsapp.twilio.apiKeySid?.startsWith('SK') && 
                        config.whatsapp.twilio.apiKeySecret && 
                        config.whatsapp.twilio.accountSid?.startsWith('AC')
    },
    environment: {
      TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID ? 'SET' : 'NOT SET',
      TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN ? 'SET' : 'NOT SET',
      TWILIO_WHATSAPP_FROM: process.env.TWILIO_WHATSAPP_FROM || 'NOT SET',
      TWILIO_WHATSAPP_TO: process.env.TWILIO_WHATSAPP_TO || 'NOT SET'
    }
  };
  console.log('🔍 Debug info:', JSON.stringify(debugInfo, null, 2));
  console.log('🔍 === END TWILIO DEBUG ENDPOINT ===\n');
  res.json(debugInfo);
});

// Test endpoint to send a test WhatsApp message
app.get('/api/test-whatsapp', async (req, res) => {
  console.log('\n🔍 === TEST WHATSAPP ENDPOINT ===');
  const testMessage = '🧪 Test message from Sea Waves Aqua Center - ' + new Date().toISOString();
  console.log('🔍 Sending test message:', testMessage);
  
  const result = await sendWhatsApp(testMessage);
  
  res.json({
    success: result.success,
    message: result.success ? 'Test WhatsApp message sent!' : 'Test WhatsApp message failed',
    details: result
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Simple test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working',
    timestamp: new Date().toISOString(),
    url: req.url,
    method: req.method
  });
});

// Test endpoint to serve index.html directly
app.get('/test-index', (req, res) => {
  const indexPath = path.join(__dirname, 'build', 'index.html');
  console.log('🧪 Test endpoint - serving index.html directly');
  console.log('🧪 Index path:', indexPath);
  console.log('🧪 Index exists:', fs.existsSync(indexPath));
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ error: 'index.html not found', path: indexPath });
  }
});

// React build check endpoint
app.get('/api/check-react', (req, res) => {
  const buildDir = path.join(__dirname, 'build');
  const indexPath = path.join(buildDir, 'index.html');
  const staticDir = path.join(buildDir, 'static');
  
  res.json({
    buildDir: {
      path: buildDir,
      exists: fs.existsSync(buildDir),
      contents: fs.existsSync(buildDir) ? fs.readdirSync(buildDir) : []
    },
    indexHtml: {
      path: indexPath,
      exists: fs.existsSync(indexPath),
      size: fs.existsSync(indexPath) ? fs.statSync(indexPath).size : 0
    },
    staticDir: {
      path: staticDir,
      exists: fs.existsSync(staticDir),
      contents: fs.existsSync(staticDir) ? fs.readdirSync(staticDir) : []
    }
  });
});

// Simple directory check endpoint
app.get('/api/check-dirs', (req, res) => {
  const fs = require('fs');
  const buildDir = path.join(__dirname, 'build');
  const publicDir = path.join(__dirname, 'public');
  const buildImagesDir = path.join(__dirname, 'build', 'images');
  const publicImagesDir = path.join(__dirname, 'public', 'images');
  
  res.json({
    __dirname: __dirname,
    buildDir: {
      path: buildDir,
      exists: fs.existsSync(buildDir),
      contents: fs.existsSync(buildDir) ? fs.readdirSync(buildDir) : []
    },
    publicDir: {
      path: publicDir,
      exists: fs.existsSync(publicDir),
      contents: fs.existsSync(publicDir) ? fs.readdirSync(publicDir) : []
    },
    buildImagesDir: {
      path: buildImagesDir,
      exists: fs.existsSync(buildImagesDir),
      contents: fs.existsSync(buildImagesDir) ? fs.readdirSync(buildImagesDir) : []
    },
    publicImagesDir: {
      path: publicImagesDir,
      exists: fs.existsSync(publicImagesDir),
      contents: fs.existsSync(publicImagesDir) ? fs.readdirSync(publicImagesDir) : []
    }
  });
});

// Email service test endpoint (SendGrid + Gmail SMTP)
app.get('/api/test-email', async (req, res) => {
  console.log('🧪 === EMAIL SERVICE TEST ===');
  
  const testMailOptions = {
      from: config.email.sendgrid.from,
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
      gmailAvailable: false,
      adminEmail: config.email.adminEmail,
      fromEmail: config.email.sendgrid.from
    });
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    res.json({
      success: false,
      message: 'Email test failed',
      error: error.message,
      sendgridAvailable: !!config.email.sendgrid.apiKey,
      gmailAvailable: false,
      adminEmail: config.email.adminEmail,
      fromEmail: config.email.sendgrid.from
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
    adminEmail: config.email.adminEmail,
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
  // Check both possible image locations
  const publicImagesPath = path.join(__dirname, 'public', 'images');
  const buildImagesPath = path.join(__dirname, 'build', 'images');
  const imagesPath = fs.existsSync(buildImagesPath) ? buildImagesPath : publicImagesPath;
  
  console.log('🔍 DEBUG: Image path detection:');
  console.log('🔍 __dirname:', __dirname);
  console.log('🔍 publicImagesPath:', publicImagesPath, 'exists:', fs.existsSync(publicImagesPath));
  console.log('🔍 buildImagesPath:', buildImagesPath, 'exists:', fs.existsSync(buildImagesPath));
  console.log('🔍 selected imagesPath:', imagesPath);
  
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
      usingBuildImages: fs.existsSync(buildImagesPath),
      totalImages: imageFiles.length,
      sampleImages: imageFiles.slice(0, 10),
      directories: fs.existsSync(imagesPath) ? fs.readdirSync(imagesPath).filter(item => 
        fs.statSync(path.join(imagesPath, item)).isDirectory()
      ) : []
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
  const fs = require('fs');
  // Use the same smart path detection as the main image serving
  const buildImagesPath = path.join(__dirname, 'build', 'images');
  const publicImagesPath = path.join(__dirname, 'public', 'images');
  const imagesDir = fs.existsSync(buildImagesPath) ? buildImagesPath : publicImagesPath;
  const testImagePath = path.join(imagesDir, 'founderimage.jpg');
  
  if (fs.existsSync(testImagePath)) {
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.sendFile(testImagePath);
  } else {
    res.status(404).json({
      error: 'Test image not found',
      path: testImagePath,
      imagesDir: imagesDir,
      exists: fs.existsSync(testImagePath),
      buildImagesExists: fs.existsSync(buildImagesPath),
      publicImagesExists: fs.existsSync(publicImagesPath)
    });
  }
});

// Test specific diving image
app.get('/api/test-diving-image', (req, res) => {
  const fs = require('fs');
  // Use the same smart path detection as the main image serving
  const buildImagesPath = path.join(__dirname, 'build', 'images');
  const publicImagesPath = path.join(__dirname, 'public', 'images');
  const imagesDir = fs.existsSync(buildImagesPath) ? buildImagesPath : publicImagesPath;
  const testImagePath = path.join(imagesDir, 'diving', '12.webp');
  
  if (fs.existsSync(testImagePath)) {
    res.setHeader('Content-Type', 'image/webp');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.sendFile(testImagePath);
  } else {
    res.status(404).json({
      error: 'Diving image not found',
      path: testImagePath,
      imagesDir: imagesDir,
      exists: fs.existsSync(testImagePath),
      divingExists: fs.existsSync(path.join(imagesDir, 'diving')),
      buildImagesExists: fs.existsSync(buildImagesPath),
      publicImagesExists: fs.existsSync(publicImagesPath)
    });
  }
});

// SendGrid specific test endpoint
app.get('/api/test-sendgrid', async (req, res) => {
  console.log('🧪 === SENDGRID SPECIFIC TEST ===');
  
  if (!config.email.sendgrid.apiKey) {
    return res.json({
      success: false,
      message: 'SendGrid API key not configured',
      sendgridConfigured: false,
      environmentCheck: {
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ? 'SET' : 'NOT SET',
        SENDGRID_FROM: process.env.SENDGRID_FROM || 'NOT SET'
      }
    });
  }
  
  const testMailOptions = {
    from: config.email.sendgrid.from,
    to: config.email.adminEmail,
    subject: 'SendGrid Test - Sea Waves Aqua Center',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af;">SendGrid Test Successful!</h2>
        <p>This is a test email to verify SendGrid configuration.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <p><strong>From:</strong> ${config.email.sendgrid.from}</p>
        <p><strong>To:</strong> ${config.email.adminEmail}</p>
        <p><strong>Service:</strong> SendGrid API</p>
      </div>
    `
  };
  
  try {
    console.log('🧪 Testing SendGrid directly...');
    const result = await sendEmail(testMailOptions);
    
    res.json({
      success: result.success,
      message: result.success ? 'SendGrid test completed successfully' : 'SendGrid test failed',
      service: result.method,
      details: result,
      sendgridConfigured: true,
      fromEmail: config.email.sendgrid.from,
      adminEmail: config.email.adminEmail
    });
    
  } catch (error) {
    console.error('❌ SendGrid test failed:', error.message);
    res.json({
      success: false,
      message: 'SendGrid test failed',
      error: error.message,
      sendgridConfigured: true,
      fromEmail: config.email.sendgrid.from,
      adminEmail: config.email.adminEmail
    });
  }
});

// Test admin email specifically
app.get('/api/test-admin-email', async (req, res) => {
  console.log('🧪 === ADMIN EMAIL TEST ===');
  console.log('🧪 Testing email to admin:', config.email.adminEmail);
  
  const adminTestMailOptions = {
      from: config.email.sendgrid.from,
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
              <strong style="color: #1e40af;">From:</strong> ${config.email.sendgrid.from}
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
      fromEmail: config.email.sendgrid.from,
      sendgridAvailable: !!config.email.sendgrid.apiKey,
      gmailAvailable: false
    });
    
  } catch (error) {
    console.error('❌ Admin email test failed:', error.message);
    res.json({
      success: false,
      message: 'Admin email test failed',
      error: error.message,
      adminEmail: config.email.adminEmail,
      fromEmail: config.email.sendgrid.from
    });
  }
});

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve images from build directory (production) or public directory (development)
const imageDir = fs.existsSync(path.join(__dirname, 'build', 'images')) 
  ? path.join(__dirname, 'build', 'images')
  : path.join(__dirname, 'public', 'images');

app.use('/images', express.static(imageDir, {
  setHeaders: (res, path) => {
    // Set proper cache headers for images
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
    res.setHeader('Content-Type', getContentType(path));
  }
}));

// Add logging for image requests
app.use('/images', (req, res, next) => {
  console.log('🖼️  Image request:', req.url);
  next();
});

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
}).on('error', (error) => {
  console.error('❌ Server startup error:', error);
  process.exit(1);
});
