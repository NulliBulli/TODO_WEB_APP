import DatePicker from "./DatePicker";
import { Link } from "react-router-dom";

export function InputTodoModal() {
  return (
    <div className="AddInputModal">
      {/* link to new Todo */}
      {/* link to edit specific Todo */}

      <div
        className="AddModalWrapper"
        style={{
          backgroundColor: "white",
          display: "grid",
          placeItems: "center",
          padding: "100px",
        }}
      >
        <div
          className="mb-3 bg-light"
          style={{
            border: "solid",
            background: "white",
            position: "relative",
            top: "10%",
            minWidth: "50%",
            minHeight: "50%",
            padding: "30px",
            borderRadius: "25px",
          }}
        >
          <label htmlFor="exampleFormControlTextarea2" className="form-label">
            Write a descriptiion of your task:
          </label>

          <textarea
            className="form-control"
            id="exampleFormControlTextarea2"
            style={{ Height: "75%" }}
            rows={15}
            defaultValue={""}
          />
          <div className="container" style={{ padding: "10px" }}>
            <div className="row">
              <div className="col">
                <DatePicker />
              </div>
              <div className="col">
                <Link to="/">
                  <button type="button" className="btn btn-info">
                    Confirm
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputTodoModal;
