const express = require('express');
const path = require('path');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Running on ${port}`));

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);

const transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const { name } = req.body;
  const { email } = req.body;
  const { message } = req.body;
  const content = `name: ${name}\nemail: ${email}\nmessage: ${message}`;

  const mail = {
    from: email,
    to: 'aruss430@gmail.com',
    subject: 'New Message from Contact Form',
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});
