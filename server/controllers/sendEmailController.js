const asyncHandler = require("../middleware/asyncHandler");
const SendEmail = require("../models/sendEmailModel");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const generatePassword = () => {
  return crypto.randomBytes(8).toString('hex')
}
const sendEmail = async (req, res) => {
  const { fromEmail, toEmail, contents } = req.body;
    let transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: fromEmail,
            pass: "qqq123www123"
        }
    });

    let mailOptions = {
        from: fromEmail,
        to: toEmail,
        subject:'Test email',
        text: contents,
    };
  // await transporter.verify((err, succ) => {
  //   if (err) {
  //     console.log(err)
  //     res.json({err: err})
  //   } else {
  //     res.json({err: "Success."})
  //   }
  // })
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
            res.json({err: "err."})
            console.error('Error occurred:', error);
        } else {
      console.log('Email sent successfully!', info.response);
      res.json({ Ok: "Success." })
        }
    });
};

module.exports= {sendEmail};
