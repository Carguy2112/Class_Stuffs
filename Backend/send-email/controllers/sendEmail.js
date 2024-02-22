const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "jennings.krajcik48@ethereal.email",
            pass: "yMuvAVyxwEhDMvzuNP",
        },
    });

    let info = await transporter.sendMail({
        from: '"NotMe"<notMe@gmail.com>',
        to: "bar@example.com",
        subject: "hello",
        html: "<h2>Sending emails</h2>",
    });

    res.json(info);
};

module.exports = sendEmail;
