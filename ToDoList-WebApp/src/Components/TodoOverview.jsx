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

      <div>
        <div
          className="d-flex gap-3 flex-column justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="d-flex rounded justify-content-center align-items-center shadow-sm bg-info"
            style={{ width: "70%", height: "10%" }}
          >
            <p
              className="m-0"
              style={{ fontWeight: "bold", fontSize: "1.8em" }}
            >
              My TODO'S
            </p>
          </div>
          <div
            className="rounded shadow-sm bg-white"
            style={{ width: "70%", height: "55%" }}
          >
            <div className="container">
              <TodoTask
                percentage={100}
                input={
                  "Beispielseite mit dem Bootstrap Framework anlegen Beispielseite mit dem Bootstrap Framework anlegen Beispielseite mit dem Bootstrap Framework anlegen Beispielseite mit dem Bootstrap Framework anlegen "
                }
                date={"26. April 2021"}
              />
              <TodoTask percentage={5} input={"test"} date={"test date"} />
            </div>
          </div>
          <button className="btn btn-info">New TODO</button>
        </div>
        <div className="d-flex gap-3 flex-column justify-content-center align-items-center">
          <button className="btn m-3"></button>
        </div>
      </div>
    </div>
  );
}

export default TodoOverview;
