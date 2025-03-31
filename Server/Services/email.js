import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const sendVerificationEmail = async (email, token, userType) => {
  // Include userType in the verification URL
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email/${userType}/${token}`;
  
  const mailOptions = {
    from: `"${process.env.EMAIL_SENDER_NAME}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Verify Your Email Address',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Email Verification</h2>
        <p>Please click the button below to verify your email address:</p>
        <a href="${verificationUrl}" 
           style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; 
                  color: white; text-decoration: none; border-radius: 5px; margin: 20px 0;">
          Verify Email
        </a>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This link will expire in 24 hours.</p>
      </div>
    `,
  };

  console.log('Sending email...', verificationUrl);

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to ${email}`);
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send verification email');
  }
};