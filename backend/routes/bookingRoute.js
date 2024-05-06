const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const moment = require("moment");
const Session = require("../backend/models/session");


router.post("/booksession", async (req, res) => {
  const { session: sessions, user_id, dateTime } = req.body;

  if (!sessions || !user_id || !dateTime) {
    return res.status(400).send("All fields are required");
  }
  try {
    const newbooking = new Booking({
      name: sessions.name,
      session_id: sessions._id,
      user_id,
      dateTime: moment(sessions.dateTime).format("DD-MM-YYYY HH:mm"),
      transactionId: "12345",
    });
    console.log(newbooking, "newbooking");
    const booking = await newbooking.save();
    // res.send('Session Booked Successfully');
    const sessiontemp = await Session.findOne({ _id: sessions._id });
    console.log(sessiontemp, "sessiontemp");
    sessiontemp.currentBookings.push({
      session_id: sessions._id,
      dateTime: moment(sessions.dateTime).format("DD-MM-YYYY HH:mm"),
      user_id,
      state: sessiontemp.state,
    });
    await sessiontemp.save();

    res.status(201).send("Booking Added Successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

router.post("/getbookingsbyuserid", async (req, res) => {
  const user_id = await req.body.user_id;

  try {
    const bookings = await Booking.find({ user_id: user_id });
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/cancelbooking", async (req, res) => {
  const { bookingid } = req.body;
  try {
    const booking = await Booking.findById(bookingid);
    booking.state = "cancelled";
    await booking.save();
    const session = await Session.findOne({ _id: booking.sessionid });
    const bookings = session.currentBookings.filter(
      (item) => item.sessionid !== booking.sessionid
    );
    await booking.save();
    res.send("Booking Cancelled Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.send(bookings);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
module.exports = router;
