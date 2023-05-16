const express = require("express");
const app = express();

app.use(express.json());

const tasks = [
  { id: 1, description: "todo1", dueDate: "2023-01-01", percentage: 0 },
  { id: 2, description: "todo2", dueDate: "2023-02-01", percentage: 0 },
  { id: 3, description: "todo3", dueDate: "2023-03-01", percentage: 0 },
  { id: 4, description: "todo4", dueDate: "2023-04-01", percentage: 50 },
];

app.get("/api", (req, res) => {
  res.json({
    tasks,
  });
});

app.get("/api/editModal/:id", (req, res) => {
  const task = tasks.find((c) => c.id === parseInt(req.params.id));
  if (!task) res.status(404);
  res.send(task);
});

app.post("/api/inputForm", (req, res) => {
  const task = {
    id: tasks.length + 1,
    description: req.body.description,
    dueDate: req.body.dueDate,
    percentage: req.body.percentage,
  };

  tasks.push(task);
  res.send(task);
});

app.put("/api/editModal/:id", (req, res) => {
  const task = tasks.find((c) => c.id === parseInt(req.params.id));
  if (!task) res.status(404);

  task.description = req.body.description;
  task.dueDate = req.body.dueDate;
  task.id = req.body.id;
  task.percentage = req.body.percentage;
  res.send(task);
});

const port = 3002;
app.listen(port, () => console.log(`Server started on Port ${port}...`));
