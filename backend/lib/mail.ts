import 'dotenv/config';
import { createTransport, getTestMessageUrl, SentMessageInfo } from 'nodemailer';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeANiceEmail(text: string): string {
  return `
    <div style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello There!</h2>
      <p>${text}</p>
      <p>©️, A-J Roos</p>
    </div>
  `
};

type MailResponse = {
  accepted?: string[] | null,
  rejected?: string[] | null,
  envelopeTime: number,
  messageTime: number,
  messageSize: number,
  response: string,
  envelope: {
    from: string, to?: string[] | null
  },
  messageId: string
}

export async function sendPasswordResetEmail(resetToken: string, to: string): Promise<void> {
  const info = await transport.sendMail({
    to,
    from: 'test@example.com',
    subject: 'Your Sick Fits password reset token!',
    html: makeANiceEmail(`Your Password reset token is here!
      <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click here to reset</a>
    `)
  }) as MailResponse;

  if(process.env.MAIL_USER.includes('ethereal.email')) {
    console.log(`📬 Message Sent! Preview it at ${getTestMessageUrl(info as SentMessageInfo)}`)
  }
}
