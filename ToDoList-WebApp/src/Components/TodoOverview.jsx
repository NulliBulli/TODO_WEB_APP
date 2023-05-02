import DeleteButton from "./DeleteButton";
import { EditButton } from "./EditButton";
import TodoTask from "./TodoTask";

export function TodoOverview() {
  return (
    <div className="TodoOverview">
      {/* Header (Module?)*/}
      {/* link to new Todo */}
      {/* link to edit specific Todo */}
      {/* Footer (Module?) */}

      <div
        className="todoListWrapper"
        style={{backgroundColor: "#e8f3ff", display: "grid", placeItems: "center" }}
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
            <TodoTask
              percentage={100}
              input={
                "Beispielseite mit dem Bootstrap Framework anlegen Beispielseite mit dem Bootstrap Framework anlegen Beispielseite mit dem Bootstrap Framework anlegen Beispielseite mit dem Bootstrap Framework anlegen "
              }
              date={"26. April 2021"}
            />
            <TodoTask percentage={5} input={"test"} date={"test date"} />
            <TodoTask percentage={5} input={"test"} date={"test date"} />
            <TodoTask percentage={5} input={"test"} date={"test date"} />
          </div>
          <button
            className="btn btn-info"
            style={{ padding: "10px", margin: "10px" }}
          >
            New TODO
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoOverview;
