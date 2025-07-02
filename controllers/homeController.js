// controllers/homeController.js
// Controller untuk menangani home page

const path = require("path");

const homeController = {
  // Handler untuk root endpoint "/"
  getHome: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  },
};

module.exports = homeController;
