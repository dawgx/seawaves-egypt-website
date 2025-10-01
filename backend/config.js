module.exports = {
  email: {
    // Primary: Use SendGrid for cloud deployment (more reliable)
    user: process.env.EMAIL_USER || 'settlethailand@gmail.com',
    pass: process.env.EMAIL_PASS || 'xjeincwfnyvlcezi',
    adminEmail: 'settlethailand@gmail.com',
    
    // Email service configuration
    service: process.env.EMAIL_SERVICE || 'gmail',
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true' || false,
    
    // SendGrid configuration (recommended for cloud)
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    useSendGrid: process.env.USE_SENDGRID === 'true' || false
  },
  server: {
    port: process.env.PORT || 5000
  }
};
