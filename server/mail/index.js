require('dotenv').config();
const mailer = require('nodemailer');
const { welcome } = require('./welcome_template');

const getEmailData = (to, name, token, type) => {
    let data = null;

    switch(type) {
        case "welcome":
            data = {
                from: "Vibe <intelprotectors@gmail.com",
                to,
                subject: "Welcome to VIBE",
                html: welcome()
            }
        break;
        default:
            data;
    }

    return data;
}

const sendEmail = (to, name, token, type) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "intelprotectors@gmail.com",
            pass: process.env.EMAIL_PASS
        }
    });

    const mail = getEmailData(to, name, token, type)

    smtpTransport.sendMail(mail,function(err, response) {
        if (err) {
          console.log(err)
        } else {
          console.log("Email sent")
        }
        smtpTransport.close();
      })
}


module.exports = { sendEmail }