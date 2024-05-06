const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [String],
  description: {
    type: String,
    required: true,
  },
  currentBookings: [
    {
      session_id: {
        type: String,
        required: true,
      },
      dateTime: {
        type: String,
        required: true,
      },
      user_id: {
        type: String,
        required: true,
      },
    },
  ],
});

const Session = mongoose.model("sessions", sessionSchema);

module.exports = Session;
