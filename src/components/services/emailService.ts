'use server';
/**
 * @fileOverview Service for sending contact form emails.
 */

import { z } from 'zod';
import nodemailer from 'nodemailer';

// Schema for contact form data validation
const ContactFormSchema = z.object({
  email: z.string().email(),
  phone: z.string(),
  doctor: z.string(),
  reason: z.string(),
  message: z.string(),
  contactMethod: z.enum(['email', 'phone']),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Map doctor names to their email addresses
const doctorEmails: Record<string, string> = {
  'Dr. Marouane Echetouani': 'MarouaneEchetouani@gmail.com',
  'Dr. Ahmed Echetouani': 'AhmedEchetouani@gmail.com',
};

// Setup nodemailer transporter with env config
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: Number(process.env.EMAIL_SERVER_PORT) === 465,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const validatedData = ContactFormSchema.parse(data);

  const toEmail = validatedData.doctor;
  if (!z.string().email().safeParse(toEmail).success) {
    throw new Error(`Invalid doctor email: ${toEmail}`);
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: toEmail,
    subject: `Nouvelle demande de contact - ${validatedData.reason}`,
    text: `
Vous avez reçu une nouvelle demande de contact via le site web.

Message:
${validatedData.message}

---
Informations de contact:
Email: ${validatedData.email}
Téléphone: ${validatedData.phone}
Préférence de contact: ${validatedData.contactMethod}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #0073e6;">Nouvelle demande de contact</h2>
        <p><strong>Motif :</strong> ${validatedData.reason}</p>
        <section style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="color: #555;">Message</h3>
          <p style="font-size: 16px; white-space: pre-wrap;">${validatedData.message}</p>
        </section>
        <section>
          <h3 style="color: #555;">Informations de contact</h3>
          <ul style="list-style: none; padding: 0; font-size: 16px;">
            <li><strong>Email:</strong> <a href="mailto:${validatedData.email}" style="color: #0073e6;">${validatedData.email}</a></li>
            <li><strong>Téléphone:</strong> <a href="tel:${validatedData.phone}" style="color: #0073e6;">${validatedData.phone}</a></li>
            <li><strong>Préférence de contact:</strong> ${validatedData.contactMethod}</li>
          </ul>
        </section>
        <footer style="margin-top: 30px; font-size: 12px; color: #777;">
          <p>Cette demande a été envoyée via votre formulaire de contact sur le site web.</p>
        </footer>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('Error sending email:', error);
    throw new Error(`Failed to send email: ${error?.message || JSON.stringify(error)}`);
  }
}
