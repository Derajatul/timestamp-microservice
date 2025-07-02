// routes/routes.js
// File untuk mengatur semua routes

const express = require("express");
const router = express.Router();

// Import controllers
const timestampController = require("../controllers/timestampController");
const homeController = require("../controllers/homeController");

// Home routes
router.get("/", homeController.getHome);

// API routes
router.get("/api/hello", timestampController.getHello);

// Route untuk current timestamp (tanpa parameter)
router.get("/api", timestampController.getCurrentTimestamp);

// Route untuk timestamp dengan parameter
router.get("/api/:date", timestampController.getTimestamp);

module.exports = router;
