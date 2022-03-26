const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "8204758e1085b8", // generated ethereal user
    pass: "41a2089146fd56", // generated ethereal password
  },
});
