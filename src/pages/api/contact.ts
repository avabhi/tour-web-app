const sendMail = async (req: any) => {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.EMAIL,
    to: process.env.TORECIPIENT,
    subject: `Message From ${req.body.name}`,
    text: `Request from ${req.body.aname}`,
    //@ts-ignore
    html: `<div>Here are the contact details of User Regarding Tour of  ${req.body.tourName}</div><p>
    Name: ${req.body.name} <br/>
    Email: ${req.body.email} <br/>
    Tour Name: ${req.body.tourName}</p>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log("info", info);
  });
};
const contact = async (req: any, res: any) => {
  try {
    const response = await sendMail(req);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    res.end(JSON.stringify(response));
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
};

export default contact;
