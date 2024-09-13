const express = require('express');
const app = express();
const flightRoutes = require('./routes/route'); // Import the route

app.set('view engine', 'pug');
app.set('views', './views'); // Path where your Pug templates are stored
app.use(express.urlencoded({ extended: true })); // To parse form data

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// Use the flight booking route
app.use('/', flightRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
