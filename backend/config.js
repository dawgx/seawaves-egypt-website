module.exports = {
  email: {
    user: process.env.EMAIL_USER || 'settlethailand@gmail.com',
    pass: process.env.EMAIL_PASS || 'xjeincwfnyvlcezi', // App password for settlethailand@gmail.com
    adminEmail: 'settlethailand@gmail.com'
  },
  server: {
    port: process.env.PORT || 5000
  }
};
