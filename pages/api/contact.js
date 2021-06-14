import { SMTPClient } from "emailjs";

export default function (req, res) {
    
    // let nodemailer = require('nodemailer')
    // let transporter = nodemailer.createTransport({
    //   port: 465,
    //   host:"mail.axc.nl",
    //   // host: "smtp.gmail.com",
    //   // service:"gmail",
    //   auth: {
    //     // user: 'ogllonderzeel1840@gmail.com',
    //     user:"info@mijnstageplaats.be",
    //     pass: process.env.MAILPASS,
    //   },
    //   secure: true,
    //   debug:true,
    //   logger:true,
    // })
    // const mailData = {
    //   // from: 'ogllonderzeel1840@gmail.com',
    //   from: "info@mijnstageplaats.be",
    //   to: 'stijn.gyssens@gmail.com',
    //   subject: req.body.title,
    //   text: req.body.message + " | Sent from: " + req.body.mail,
    //   html: `<div>${req.body.message}</div><p>Sent from:
    //   ${req.body.mail}</p>`
    // }
    // transporter.sendMail(mailData, function (err, info) {
    //   if(err)
    //     console.log(err)
    //   else
    //     console.log(info)
    // })

    const client = new SMTPClient({
      user: 'info@mijnstageplaats.be',
      password: process.env.MAILPASS,
      host: 'mail.axc.nl',
      port:465,
      ssl: true,
    });
    
    const message = {
      text: req.body.message + " | Sent from: " + req.body.mail,
      from: 'info@mijnstageplaats.be',
      to: 'stijn.gyssens@gmail.com',
      subject: req.body.title,
      attachment: [
        { data: `<div>${req.body.message}</div><p>Sent from: ${req.body.mail}</p>`, alternative: true },
      ],
    };
    
    // send the message and get a callback with an error or details of the message that was sent
    client.send(message, function (err, message) {
      console.log(err || message);
    });


    res.status(200).json({"send": "ok"})
  }