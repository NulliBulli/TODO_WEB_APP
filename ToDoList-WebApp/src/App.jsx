import "./App.css";
import Header from "./Components/Header";
import Footer from "./components/Footer";
import TodoOverview from "./Components/TodoOverview";
import InputTodoModal from "./components/InputTodoModal";
import EditTodoModal from "./Components/EditTodoModal";
import Impressum from "./Components/Impressum";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <TodoOverview/>
      {/* <InputTodoModal /> */}
      {/* <EditTodoModal /> */}
      {/* <Impressum /> */}
      <Footer />
    </div>
  );
}

export default App;
