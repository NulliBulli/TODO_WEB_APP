import DeleteButton from "./DeleteButton";
import { EditButton } from "./EditButton";

const TodoTask = (props) => {
  const test = "0";
  return (
    <>
      <div
        className="container bg-light"
        style={{
          marginBottom: "20px",
          borderRadius: "10px",
          minHeight: "100px",
          overflow: "hidden",
        }}
      >
        <div className="row">
          <div
            className="col-md-auto text-center"
            style={{
              display: "grid",
              alignItems: "center",
              maxWidth: "50px",
            }}
          >
            <div
              className="form-check"
              style={{
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

          <div title="inputTextWrapper" className="d-flex flex-column col-5 m-3">
            <div
              className="row m-0"
              style={{
              }}
            >
              {props.input}
            </div>
            <div className="row">
              <div
                className="DateWrapper"
                style={{
                  position: "relative",
                  fontWeight: "bold"
                }}
              >
                {props.date}
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="percentageBox"
              style={{
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
            className="col"
            style={{
              maxWidth: "107px",
              position: "relative",
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
