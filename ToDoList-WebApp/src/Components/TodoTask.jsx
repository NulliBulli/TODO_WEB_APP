import DeleteButton from "./DeleteButton";
import { EditButton } from "./EditButton";

const TodoTask = (props) => {
  const test = "0";
  return (
    <>
      <div
        className="container"
        style={{
          border: "5px solid green",
          marginBottom: "20px",
          borderRadius: "15px",
          boxShadow: "10px 10px #C0C0C0",
          minHeight: "100px",
          overflow: "scroll",
        }}
      >
        <div className="row">
          <div className="col">
            <div
              className="percentageBox"
              style={{
                background: "red",
                position: "relative",
                top: "50%",
                msTransform: "translateY(-50%)",
                transform: "translateY(-50%)",
              }}
            >
              {props.percentage + "%"}
            </div>
          </div>
          <div
            className="col-5"
            style={{ background: "green", height: "90px", overflow: "scroll" }}
          >
            {props.input}
          </div>
          <div className="col">
            <div
              className="DateWrapper"
              style={{
                background: "red",
                position: "relative",
                top: "50%",
                msTransform: "translateY(-50%)",
                transform: "translateY(-50%)",
              }}
            >
              {props.date}
            </div>
          </div>
          <div className="col text-center" style={{ background: "yellow" }}>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
              style={{
                margin: "0px",
                position: "relative",
                height: "40px",
                top: "50%",
                msTransform: "translateY(-50%)",
                transform: "translateY(-50%)",
              }}
            >
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
