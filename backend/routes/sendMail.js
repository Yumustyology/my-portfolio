const nodemailer = require("nodemailer");

const sendMail = async (sender, message, subject,res) => {
    try {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            secureConnection: false,
            auth: {
                user: "bitsanpaymentpoint@gmail.com",
                pass: "rcfhtbicsjxuhkur",
            },
            tls: {
                rejectUnAuthorized: true,
            },
        });

        var info = await transporter.sendMail({
            from: sender,
            to: "yusufmustahan@gmail.com",
            subject,
            text: message,
        });
        res.status(200).send({
            "message": "contacted us successfully", info
        })
        console.log(info);
    } catch (error) {
        console.log(error);
    }
};

module.exports = sendMail;
