import React, { useEffect, useState } from "react";
import TodoTask from "./TodoTask";

export function TodoList() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <>
      {typeof backendData.Tasks === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.Tasks.map((task) => (
          <TodoTask
            percentage={task.percentage}
            input={task.description}
            date={task.dueDate}
          />
        ))
      )}
    </>
  );
}
