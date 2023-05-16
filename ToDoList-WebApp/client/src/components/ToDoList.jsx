import React, { useEffect, useState } from "react";
import TodoTask from "./TodoTask";

export function TodoList({ setTask }) {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <>
      {typeof backendData.tasks === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.tasks.map((task) => (
          <TodoTask
            key={task.id}
            id={task.id}
            percentage={task.percentage}
            input={task.description}
            date={task.dueDate}
            setTask={setTask}
          />
        ))
      )}
    </>
  );
}
