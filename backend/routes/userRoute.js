const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  const newuser = new User(req.body);
  try {
    const user = await newuser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email,
      password,
    });

    if (user) {
      const temp = { _id: user._id, name: user.name, email: user.email };
      return res.status(200).send(temp);
    } else {
      return res.status(400).json({ message: "User not found gg" });
    }
  } catch (error) {
    return res.status(400).json({ error: error, message: "gg" });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
