

const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { email, sub, msg } = req.body;

  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    service:"gmail",
    secure:true,
    port:465,
    // port: 587,
    auth: {

      user: process.env.USER,
      pass: process.env.PASS
    }
  });

  let info = await transporter.sendMail({
    from: `"Contact Form" <${email}>`, // sender address
    to: "sushantwalunj2001@gmail.com", // list of receivers
    subject: sub, // Subject line
    text: msg, // plain text body
    html: `<p>${msg}</p><p>From: ${email}</p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json({ message: "Email sent successfully" });
};

module.exports = sendMail;
