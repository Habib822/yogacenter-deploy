const express = require("express");
const router = express.Router();
const Session = require("./sessionRoute"); // Import the Session model

// Route to test the sessionRoute
router.get("/session", (req, res) => {
  res.send("This is the sessionRoute!");
});

// Route to get all sessions
router.get("/getallsessions", async (req, res) => {
  try {
    const sessions = await Session.find({}); // Use the Session model to find sessions
    res.send(sessions);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getsessionbyid", async (req, res) => {
  const sessionid = req.body.sessionid;
  try {
    const sessionById = await Session.findOne({ _id: sessionid }); // Use findOne instead of findone
    res.send(sessionById); // Send the session directly, no need to wrap in an object
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
