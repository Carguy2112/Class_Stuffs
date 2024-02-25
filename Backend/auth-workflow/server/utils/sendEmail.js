const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({ to, subject, html }) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport(nodemailerConfig);

    let info = await transporter.sendMail({
        from: '"Auth App" <auth@example.com>',
        to,
        subject,
        html,
    });
};

module.exports = sendEmail;
