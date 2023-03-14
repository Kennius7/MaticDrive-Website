const nodemailer = require("nodemailer");




const transporter = nodemailer.createTransport({
  host: "your_hostinger_smtp_host",
  port: 587,
  secure: false,
  auth: {
    user: "esstar100@gmail.com",
    pass: "H0st1ng3r",
  },
});

const sendEmail = (firstName, lastName, email, phoneNumber, subject, message) => {
  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}> /Phone No: ${phoneNumber}`,
    to: "Admin@maticdrive.com",
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}


// module.exports = { sendEmail };
// module.exports = { sendEmail };
