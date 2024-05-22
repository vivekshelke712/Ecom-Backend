const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require("dotenv").config({ path: './.env' });

const app = express();

// Middlewares to Parse/Convert incoming JSON DATA
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Routes

// 404 Error
app.use("*", (req, res) => {
  res.status(404).json({ message: "Resource not Found" });
});

// Error Handlers
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
