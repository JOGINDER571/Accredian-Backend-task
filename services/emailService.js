const nodemailer = require("nodemailer");

async function sendReferralEmail(
  referrerName,
  referrerEmail,
  refereeName,
  refereeEmail
) {
  let testAccount=await nodemailer.createTestAccount();
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "concepcion.flatley37@ethereal.email",
        pass: "21kDwc8JjNjFxjtpK2",
      },
    });

    const mailOptions = {
      from: '"Joginder Sharma 👻" <concepcion.flatley37@ethereal.email>',
      to: refereeEmail,
      subject: `You've been referred by ${referrerName}!`,
      text: `Dear ${refereeName}, 
        You've been referred by ${referrerName} (${referrerEmail}) to check out our courses. 
        Visit our website to learn more.`,
    };

    await transporter.sendMail(mailOptions);
    // console.log("Referral email sent:", mailOptions);
  } catch (error) {
    console.error("Error sending referral email:", error);
  }
}

module.exports = {
  sendReferralEmail,
};
