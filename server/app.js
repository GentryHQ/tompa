const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com';
const EMAIL_USER = process.env.FORM_EMAIL || '';
const APP_PASS = process.env.APP_PASS || '';

const recipents = ['ibrahimuhammad271@gmail.com', 'ibrahimmuhammad271@gmail.com']

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.post('/send-email', (req, res) => {
    const { Fname, mail, phone, Msg } = req.body;
    if (!Fname || !mail || !phone || !Msg) {
        return res.status(400).send('All fields are required');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: true,
        auth: {
            user: EMAIL_USER,
            pass: APP_PASS,
        },
    });

    const mailOptions = {
        from: EMAIL_USER,
        to: recipents.join(', '),
        subject: 'Contact Us',
        text: `Name: ${Fname}\nEmail: ${mail}\nPhone: ${phone}\nMessage: ${Msg}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            // console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
