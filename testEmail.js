require('dotenv').config();
const nodemailer = require('nodemailer');

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const result = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Tes kirim email dari nodemailer',
      text: 'Halo! Ini cuma test.'
    });

    console.log('✅ Email terkirim:', result.messageId);
  } catch (err) {
    console.error('❌ Gagal kirim email:', err);
  }
})();
