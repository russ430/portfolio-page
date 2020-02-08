// const express = require('express');
// const path = require('path');
// const router = express.Router();
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();

// const port = process.env.PORT || 3001;


// app.use(cors());
// app.use(express.json());

// const transport = {
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.USER,
//     pass: process.env.PASS,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// };

// const transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// router.post('/send', (req, res, next) => {
//   const { name } = req.body;
//   const { email } = req.body;
//   const { message } = req.body;
//   const content = `name: ${name}\nemail: ${email}\nmessage: ${message}`;
  
//   const mail = {
//     from: email,
//     to: 'aruss430@gmail.com',
//     subject: 'New Message from Contact Form',
//     text: content,
//   };
  
//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail',
//       });
//     } else {
//       res.json({
//         status: 'success',
//       });
//     }
//   });
// });

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// };


// app.listen(port, () => console.log(`Running on ${port}`));

const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname +'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);