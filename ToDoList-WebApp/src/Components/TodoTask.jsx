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
          borderRadius: "10px",
          minHeight: "100px",
          overflow: "scroll",
        }}
      >
        <div className="row">
          <div
            className="col-md-auto text-center"
            style={{
              background: "red",
              display: "grid",
              alignItems: "center",
              maxWidth: "50px",
            }}
          >
            <div
              className="form-check"
              style={{
                background: "green",
                width: "35px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
                style={{ height: "35px", width: "35px" }}
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              ></label>
            </div>
          </div>

          <div title="inputTextWrapper" className="col-5">
            <div
              className="row"
              style={{
                background: "green",
                height: "90px",
                overflow: "scroll",
              }}
            >
              {props.input}
            </div>
            <div className="row" style={{ margin: "0px" }}>
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
                {"Due to: " + props.date}
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="percentageBox"
              style={{
                background: "red",
                position: "relative",
                top: "50%",
                msTransform: "translateY(-50%)",
                transform: "translateY(-50%)",
                margin: "0px",
                right: "0",
              }}
            >
              {props.percentage + "%"}
            </div>
          </div>
          <div
            className="col"
            style={{
              background: "yellow",
              maxWidth: "107px",
              position: "relative",
              right: "0",
            }}
          >
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
              style={{
                position: "relative",
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
