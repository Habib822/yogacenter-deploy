const mongoose = require("mongoose");

const bookingschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    session_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    dateTime: {
      type: String,
      required: true,
    },
    
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "booked",
    },
  },
  { timestamps: true }
);

const bookingmodel = mongoose.model("Booking", bookingschema);
module.exports = bookingmodel;
