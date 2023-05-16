const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    Tasks: [
      ["name1", "date1", 0],
      ["name2", "date2", 0],
      ["name3", "date3", 0],
      ["name4", "date4", 0],
    ],
  });
});

app.listen(3002, () => {
  console.log("Server started on Port 3002...");
});
