module.exports = {
  email: {
    // SendGrid configuration (only email service)
    sendgrid: {
      // Prioritize environment variable for production (Render)
      apiKey: process.env.SENDGRID_API_KEY || 'your_sendgrid_api_key_here',
      from: process.env.SENDGRID_FROM || 'settlethailand@gmail.com',
      fromName: 'Sea Waves'
    },
    
    // Admin email
    adminEmail: process.env.ADMIN_EMAIL || 'settlethailand@gmail.com'
  },
  whatsapp: {
    // Twilio WhatsApp configuration
    twilio: {
      // API Key method (if you have SK... credentials)
      // Prioritize environment variable for production (Render)
      apiKeySid: process.env.TWILIO_API_KEY_SID || '',
      // Account SID - prioritize environment variable
      accountSid: process.env.TWILIO_ACCOUNT_SID || 'AC970c23c1d9ec86c43c45d6ace8a4c307',
      // Auth Token - prioritize environment variable (can use TWILIO_AUTH_TOKEN or TWILIO_API_KEY_SECRET)
      apiKeySecret: process.env.TWILIO_AUTH_TOKEN || process.env.TWILIO_API_KEY_SECRET || '82d0269e68894de81801cd2b8ff53c14',
      // From number - prioritize environment variable
      fromNumber: process.env.TWILIO_WHATSAPP_FROM || process.env.TWILIO_FROM_NUMBER || 'whatsapp:+14155238886',
      // To number - prioritize environment variable
      toNumber: process.env.TWILIO_WHATSAPP_TO || process.env.TWILIO_TO_NUMBER || 'whatsapp:+962798350069'
    }
  },
  server: {
    port: process.env.PORT || 5000
  }
};
