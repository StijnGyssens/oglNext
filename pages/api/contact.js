export default async function (req, res) {
    
    let nodemailer = require('nodemailer')
    let transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'ogllonderzeel1840@gmail.com',
        pass: process.env.MAILPASS,
      },
      secure: true,
    })
    const mailData = {
      from: 'ogllonderzeel1840@gmail.com',
      to: 'stijn.gyssens@gmail.com',
      subject: req.body.title,
      text: req.body.message + " | Sent from: " + req.body.mail,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.mail}</p>`
    }
    await transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }