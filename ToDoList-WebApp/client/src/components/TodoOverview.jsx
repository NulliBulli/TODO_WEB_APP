import { Link } from "react-router-dom";
import { TodoList } from "./ToDoList";

export function TodoOverview({ setTask }) {
  return (
    <div className="TodoOverview">
      {/* link to new Todo */}
      {/* link to edit specific Todo */}

      <div
        className="todoListWrapper"
        style={{
          backgroundColor: "#e8f3ff",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          className="d-flex gap-3 flex-column justify-content-center align-items-center"
          style={{
            height: "100vh",
            maxWidth: "800px",
          }}
        >
          <div
            className="d-flex rounded justify-content-center align-items-center shadow-sm bg-info"
            style={{ width: "100%", height: "10%" }}
          >
            <p
              className="m-0"
              style={{ fontWeight: "bold", fontSize: "1.8em" }}
            >
              My TODO's
            </p>
          </div>
          <div
            className="rounded shadow-sm"
            style={{
              width: "100%",
              minHeight: "55%",
              background: "white",
              padding: "20px",
              overflowY: "scroll",
            }}
          >
            <TodoList setTask={setTask} />
          </div>
          <Link to="/inputForm">
            <button
              className="btn btn-info"
              // style={{ padding: "10px", margin: "10px" }}
            >
              New TODO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TodoOverview;
