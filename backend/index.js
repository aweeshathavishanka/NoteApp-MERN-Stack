const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const config = require("./config.json");
const authenticateToken = require("./utilities");
const User = require("./models/user.model");
const Note = require("./models/note.model");

mongoose.connect(config.connectionString);

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend" });
});

// Create Account
app.post("/create-account", async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res.status(400).json({ message: "Full name is required" });
  }
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  // Check if the user already exists
  const isUser = await User.findOne({ email: email });
  if (isUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Save the user (plain text password, not recommended)
  const user = new User({ fullName, email, password });
  await user.save();

  // Generate a JWT token
  const accessToken = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "60m", // 60 minutes expiration
    }
  );

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Account created successfully",
  });
});

// Login Account
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  // Find the user by email
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // Compare the password (plain text comparison)
  if (user.password === password) {
    // Generate a JWT token
    const accessToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "60m", // 60 minutes expiration
      }
    );

    return res.json({
      error: false,
      message: "Login successful",
      email,
      accessToken,
    });
  } else {
    return res.status(400).json({
      error: true,
      message: "Invalid credentials",
    });
  }
});

// Add Note
app.post("/add-note", authenticateToken, async (req, res) => {
  const { title, content, tags = [] } = req.body;
  const user = req.user; // Assuming req.user contains the authenticated user's info

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  try {
    const note = new Note({
      title,
      content,
      tags,
      userId: user.userId, // use userId from req.user
    });

    await note.save();
    return res.json({
      error: false,
      note,
      message: "Note added successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: "Internal server error",
    });
  }
});

// Edit Note
app.put("/edit-note/:noteId", authenticateToken, async (req, res) => {
  const noteId = req.params.noteId;
  const { title, content, tags, isPinned } = req.body;
  const user = req.user;

  if (!title && !content && !tags && typeof isPinned === "undefined") {
    return res
      .status(400)
      .json({ message: "Title, Content, Tags, or isPinned is required" });
  }

  try {
    const note = await Note.findOne({ _id: noteId, userId: user._id });
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (title) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    if (typeof isPinned !== "undefined") note.isPinned = isPinned;

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note updated successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Internal Server Error" });
  }
});

app.listen(8000, () => console.log("Server running on port 8000"));

module.exports = app;
