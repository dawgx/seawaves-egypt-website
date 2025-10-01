module.exports = {
  email: {
    // SendGrid configuration (primary - works with cloud hosting)
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY,
      from: process.env.SENDGRID_FROM || 'settlethailand@gmail.com',
      fromName: 'Sea Waves Aqua Center'
    },
    
    // Gmail SMTP configuration (backup - may be blocked by hosting)
    gmail: {
      user: process.env.EMAIL_USER || 'settlethailand@gmail.com',
      pass: process.env.EMAIL_PASS || 'xjeincwfnyvlcezi',
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false
    },
    
    // Admin email
    adminEmail: 'settlethailand@gmail.com',
    
    // Default service (SendGrid for cloud hosting)
    defaultService: process.env.EMAIL_SERVICE || 'sendgrid'
  },
  server: {
    port: process.env.PORT || 5000
  }
};
