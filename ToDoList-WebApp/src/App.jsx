import "./App.css";
import Header from "./Components/Header";
import Footer from "./components/Footer";
import TodoOverview from "./Components/TodoOverview";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoOverview />
      <Footer />
    </div>
  );
}

export default App;
