import nodemailer from "nodemailer";

export async function sendEmail(req, res) {
  const { full_name, from, subject, text } = req.body;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: from,
      to: process.env.SMTP_USER,
      subject: subject,
      text: text,
      html: `
            <h2>${subject}</h2> </br>
            <h3>${full_name}</h3>
            <h3>${from}</h3>
            <p>${text}</p>
            `,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
}
