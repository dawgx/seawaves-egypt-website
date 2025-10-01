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
  server: {
    port: process.env.PORT || 5000
  }
};
