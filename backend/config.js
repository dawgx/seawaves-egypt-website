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
      // API Key method (if you have SK... credentials)
      apiKeySid: 'SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Replace with your API Key SID (starts with SK)
      apiKeySecret: 'your_api_key_secret_here', // Replace with your API Key Secret
      accountSid: 'AC970c23c1d9ec86c43c45d6ace8a4c307', // Your Account SID
      // OR use Auth Token method (if you don't have API Key):
      // authToken: 'your_auth_token_here', // Uncomment and use this instead of apiKeySid/apiKeySecret
      fromNumber: 'whatsapp:+14155238886', // Twilio Sandbox number
      toNumber: 'whatsapp:+962798350069' // Your WhatsApp number
    }
  },
  server: {
    port: process.env.PORT || 5000
  }
};
