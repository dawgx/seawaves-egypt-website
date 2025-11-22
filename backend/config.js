module.exports = {
  email: {
    // SendGrid configuration (only email service)
    sendgrid: {
      apiKey: 'your_sendgrid_api_key_here',
      from: process.env.SENDGRID_FROM || 'settlethailand@gmail.com',
      fromName: 'Sea Waves'
    },
    
    // Admin email
    adminEmail: 'settlethailand@gmail.com'
  },
  whatsapp: {
    // Twilio WhatsApp configuration
    twilio: {
      // API Key method (if you have SK... credentials) - NOT USING, using Auth Token instead
      apiKeySid: '', // Leave empty to disable API Key method, use Auth Token instead
      accountSid: 'AC970c23c1d9ec86c43c45d6ace8a4c307', // Your Account SID
      // Auth Token method - using apiKeySecret field as Auth Token (the code uses it this way)
      apiKeySecret: '3d0a45402e388980001048604e353c90', // Replace with your Twilio Auth Token (get it from Twilio Console > Account > API Keys & Tokens)
      fromNumber: 'whatsapp:+14155238886', // Twilio Sandbox number
      toNumber: 'whatsapp:+962798350069' // Your WhatsApp number
    }
  },
  server: {
    port: process.env.PORT || 5000
  }
};
