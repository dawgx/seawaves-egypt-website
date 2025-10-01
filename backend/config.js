module.exports = {
  email: {
    user: process.env.EMAIL_USER || 'settlethailand@gmail.com',
    pass: process.env.EMAIL_PASS || 'xjeincwfnyvlcezi', // App password for settlethailand@gmail.com
    adminEmail: 'settlethailand@gmail.com',
    // Alternative email service configuration
    service: process.env.EMAIL_SERVICE || 'gmail',
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true' || false
  },
  server: {
    port: process.env.PORT || 5000
  }
};
