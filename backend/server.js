const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dbConfig = require("./db");
const sessionRoute = require("./routes/sessionRoute");
const usersRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");
const Contactusscreen = require("./routes/ContactusRoute");
const Aboutusscreen = require("./routes/AboutusRoute");
const Mainscreen = require("./routes/mainRoute");

const app = express();
app.use(cors()); // Allow requests from all origins

// Use morgan middleware to log HTTP requests
app.use(morgan("dev")); // Pre-defined 'dev' format for logging

app.use(express.json()); // Root path handler

app.get("/session", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/sessions", sessionRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/Contactus", Contactusscreen);
app.use("/api/Aboutus", Aboutusscreen);
app.use("/api/Mainscreen", Mainscreen);

const port = process.env.PORT || 5000; // localhost 5000 for the backend & 3000 for frontend

app.listen(port, () => console.log("Node Server started using nodemon"));
