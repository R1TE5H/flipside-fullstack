const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PROTECTED_PASSWORD,
  },
});

const waitList = `
<html>

<head>
    <style>
        /* Define your CSS styles here */

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .container {
            width: 80%;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .logo {
            font-size: 36px;
            font-weight: bolder;
            color: #0200cd;
            text-align: center;
        }

        h1 {
            color: #333333;
        }

        p {
            color: #666666;
        }
    </style>
</head>

<body>
    <div class="container">
        <p class="logo">flipside</p>
        <p>Welcome to Flipside!</p>
        <p>
            We're thrilled to have you join our wait list and embark on this exciting journey with us. As a valued member of our community, you're now part of a passionate group of individuals dedicated to revolutionizing the residential real estate industry through crowdfunding.
        </p>
        <p>
            To stay connected with Flipside and get the latest updates, check out our Twitter and LinkedIn:
        </p>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>
            We'll keep you informed of any developments, progress, and important announcements regarding our platform. Rest assured, you'll be among the first to know about any exciting updates or milestones as we progress towards our launch.
        </p>
        <p>
            In the meantime, if you have any questions or feedback, feel free to reach out to us at <b>[Insert Contact Email]</b>. We're here to assist you every step of the way.
        </p>
        <p>
            Once again, thank you for joining us on this journey. We can't wait to bring Flipside to life together!
        </p>
        <p>Warm regards,</p>
        <p>The Flipside Team</p>

    </div>
</body>

</html>`;

exports.waitList = waitList;
exports.waitListTransporter = transporter;
