import DeleteButton from "./DeleteButton";
import { EditButton } from "./EditButton";

const TodoTask = (props) => {
  const test = "0";
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">{props.percentage + "%"}</div>
          <div className="col">{props.input}</div>
          <div className="col">{props.date}</div>
          <div className="col">
            <DeleteButton />
            <EditButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
