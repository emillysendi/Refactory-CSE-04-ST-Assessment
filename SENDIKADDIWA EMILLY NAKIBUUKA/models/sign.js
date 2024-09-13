const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for the flight booking form
const bookingSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  dob: {
    type: Date,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  emergencyPhone: {
    type: String,
    required: true,
    trim: true
  },
  passportNumber: {
    type: String,
    required: true,
    trim: true
  },
  visaDocument: {
    type: String, // Assuming you save the file path in the database
    required: true
  },
  departureCity: {
    type: String,
    required: true
  },
  destinationCity: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
