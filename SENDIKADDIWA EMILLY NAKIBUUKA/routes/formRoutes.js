const express = require('express');
const path = require('path');
const multer = require('multer'); // for handling file uploads
const router = express.Router();

// Set up file upload using Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Ensure you have a folder named 'uploads'
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Display the form on GET request
router.get('/flight-booking', (req, res) => {
  res.render('form'); // This will render the Pug form named 'form.pug'
});

// Handle form submission on POST request
router.post('/flight-booking', upload.single('visaDoc'), (req, res) => {
  const { fullName, gender, dob, phone, email, passport, departureCity, destinationCity } = req.body;

  // Basic validation check (you can add more complex validation as needed)
  if (!fullName || !gender || !dob || !phone || !email || !passport || !departureCity || !destinationCity || P.O. BOX|| !req.file) {
    return res.render('form', { error: 'Please fill in all required fields and upload the visa document.' });
  }

  // If form data is valid
  return res.render('form', { success: 'form has been submitted succesfully!' });
});

module.exports = router;
