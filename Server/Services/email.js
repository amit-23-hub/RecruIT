import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendVerificationEmail = async (email, token) => {
  const verificationUrl = `http://yourdomain.com/api/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: '"Recruitment Team" <no-reply@yourdomain.com>',
    to: email,
    subject: 'Verify Your Email',
    html: `
      <p>Click the link below to verify your email:</p>
      <a href="${verificationUrl}">Verify Email</a>
      <p>Link expires in 10 min.</p>
    `,
  });
};