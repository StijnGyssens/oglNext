export default function (req, res) {
    
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
      subject: `aanvraagformulier om lid te worden van ${req.body.name}`,
      text: `bedrijfsnaam:${req.body.comp}, naam:${req.body.name}, adres:${req.body.street} ${req.body.huis} ${req.body.post} ${req.body.city}, telefoonnummer: ${req.body.tele}, website: ${req.body.web}, ondernemingsnummer: ${req.body.nummer}, aantal werknemers: ${req.body.werk}` + " | Sent from: " + req.body.mail,
      html: `<ul><li>bedrijfsnaam:${req.body.comp}</li><li>naam:${req.body.name}</li><li>adres:${req.body.street} ${req.body.huis} ${req.body.post} ${req.body.city}</li><li>telefoonnummer: ${req.body.tele}</li><li>website: ${req.body.web}</li><li>ondernemingsnummer: ${req.body.nummer}</li><li>aantal werknemers: ${req.body.werk}</li></ul><p>Sent from:
      ${req.body.mail}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200).json({"send": "ok"})
  }