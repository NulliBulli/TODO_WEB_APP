const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    Tasks: [
      { key: 1, description: "todo1", dueDate: "01.01.0001", percentage: 0 },
      { key: 2, description: "todo2", dueDate: "02.02.0002", percentage: 0 },
      { key: 3, description: "todo3", dueDate: "03.03.0003", percentage: 0 },
      { key: 4, description: "todo4", dueDate: "04.04.0004", percentage: 50 },
    ],
  });
});

app.listen(3002, () => {
  console.log("Server started on Port 3002...");
});
