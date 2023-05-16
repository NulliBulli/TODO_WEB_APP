import "./App.css";
import Footer from "./components/Footer";
import TodoOverview from "./Components/TodoOverview";
import InputTodoModal from "./components/InputTodoModal";
import EditTodoModal from "./Components/EditTodoModal";
import Impressum from "./Components/Impressum";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [task, setTask] = useState({});

  // useEffect(() => {
  //   console.log(task);
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/tasks" element={<TodoOverview setTask={setTask} />} />
        <Route path="/inputForm" element={<InputTodoModal />} />
        <Route path="/editModal/:id" element={<EditTodoModal />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
