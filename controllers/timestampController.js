// controllers/timestampController.js
// Controller untuk menangani logika timestamp

const timestampController = {
  // Handler untuk endpoint /api/:date
  getTimestamp: (req, res) => {
    let unix = null;
    let utc = null;
    const dateParam = req.params.date;

    if (!isNaN(dateParam)) {
      // If the date is a number, treat it as a Unix timestamp
      unix = parseInt(dateParam);
      utc = new Date(unix).toUTCString();
    } else {
      // If the date is a string, try to parse it as a date
      const date = new Date(dateParam);
      if (date.toString() !== "Invalid Date") {
        unix = date.getTime();
        utc = date.toUTCString();
      } else {
        res.json({
          error: "Invalid Date",
        });
      }
    }

    res.json({
      unix,
      utc,
    });
  },

  // Handler untuk endpoint /api/hello
  getHello: (req, res) => {
    res.json({ greeting: "hello API" });
  },

  // Handler untuk endpoint /api (current timestamp)
  getCurrentTimestamp: (req, res) => {
    const now = new Date();
    res.json({
      unix: now.getTime(),
      utc: now.toUTCString(),
    });
  },
};

module.exports = timestampController;
