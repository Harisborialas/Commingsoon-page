import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { to, subject, text, html } = req.body;

  try {
    const msg = {
      to,
      from: process.env.EMAIL,
      subject,
      text,
      html,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Error sending email" });
  }
}
