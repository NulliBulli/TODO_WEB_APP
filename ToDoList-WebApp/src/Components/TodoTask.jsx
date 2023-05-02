import DeleteButton from "./DeleteButton";
import { EditButton } from "./EditButton";

const TodoTask = (input, percentage, done) => {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p className="m-2" style={{ fontSize: "0.8" }}>
              0%
            </p>
          </div>
          <div class="col">
            <p className="m-2" style={{ fontSize: "0.8" }}>
              Beispielseite mit dem Bootstrap Framework anlegen
            </p>
          </div>
          <div class="col">
            <p className="m-2" style={{ fontSize: "0.8" }}>
              26. April 2021
            </p>
          </div>
          <div class="col">
            <DeleteButton />
            <EditButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
