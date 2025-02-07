const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail'); // Import SendGrid

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});







