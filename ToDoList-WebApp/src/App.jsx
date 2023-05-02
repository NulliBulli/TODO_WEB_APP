import "./App.css";
import Footer from "./components/Footer";
import TodoOverview from "./Components/TodoOverview";
import InputTodoModal from "./components/InputTodoModal";
import EditTodoModal from "./Components/EditTodoModal";
import Impressum from "./Components/Impressum";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoOverview />} />
        <Route path="/InputModal" element={<InputTodoModal />} />
        <Route path="/EditModal" element={<EditTodoModal />} />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
