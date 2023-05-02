import "./App.css";
import Footer from "./components/Footer";
import TodoOverview from "./Components/TodoOverview";
import InputTodoModal from "./components/InputTodoModal";
import EditTodoModal from "./Components/EditTodoModal";
import Impressum from "./Components/Impressum";

function App() {
  return (
    <div className="App">
      <TodoOverview />
      {/* <InputTodoModal /> */}
      {/* <EditTodoModal /> */}
      {/* <Impressum /> */}
      <Footer />
    </div>
  );
}

export default App;
