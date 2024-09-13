const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, Images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Body parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Render the form
app.get('/', (req, res) => {
  res.render('form');
});

// Handle form submission
app.post('/submit', upload.single('visaDocument'), (req, res) => {
  console.log(req.body);
  console.log(req.file); // Visa document uploaded
  res.send('Form Submitted Successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
