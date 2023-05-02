import DeleteButton from "./DeleteButton";
import { EditButton } from "./EditButton";
import TodoTask from "./TodoTask";

export function TodoOverview() {
  return (
    <div className="TodoOverview">
      {/* Header (Module?)*/}
      {/* todolist overview */}
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
            style={{ width: "50%", height: "10%" }}
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
            style={{ width: "50%", height: "55%" }}
          >
            <div className="container">
              <div className="row row-cols-md-3 m-1">
                <div className="col-sm-1 col-md-1">
                  <p className="m-2" style={{ fontSize: "0.8" }}>
                    0%
                  </p>
                </div>
                <div className="col-sm-1 col-md-7">
                  <p className="m-2" style={{ fontSize: "0.8" }}>
                    Beispielseite mit dem Bootstrap Framework anlegen
                  </p>
                </div>
                <div className="d-flex col-sm-1 justify-content-center">
                  <p className="m-2" style={{ fontSize: "0.8" }}>
                    26. April 2021
                  </p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                    style={{
                      margin: "10px",
                      position: "relative",
                      left: "10px",
                      height: "40px",
                    }}
                  >
                    <EditButton />
                    <DeleteButton />
                  </div>
                </div>
              </div>
              <TodoTask
                percentage={100}
                input={"Beispielseite mit dem Bootstrap Framework anlegen"}
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
