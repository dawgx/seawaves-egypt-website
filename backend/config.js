module.exports = {
  email: {
    // SendGrid configuration (only email service)
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY,
      from: process.env.SENDGRID_FROM || 'settlethailand@gmail.com',
      fromName: 'Sea Waves Aqua Center'
    },
    
    // Admin email
    adminEmail: 'settlethailand@gmail.com'
  },
  whatsapp: {
    // Twilio WhatsApp configuration
    twilio: {
      // If using API Key (starts with SK), you need both:
      apiKeySid: process.env.TWILIO_API_KEY_SID,
      apiKeySecret: process.env.TWILIO_API_KEY_SECRET,
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      fromNumber: process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886', // Twilio Sandbox number
      toNumber: process.env.TWILIO_WHATSAPP_TO || 'whatsapp:+962798350069' // Your WhatsApp number
    }
  },
  server: {
    port: process.env.PORT || 5000
  }
};
