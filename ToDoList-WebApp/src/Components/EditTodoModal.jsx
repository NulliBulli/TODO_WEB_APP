import DatePicker from "./DatePicker";

export function EditTodoModal() {
  return (
    <>
      <div
        className="mb-3 bg-light"
        style={{
          border: "solid",
          background: "#404040",
          position: "fixed",
          top: "50%",
          left: "50%",
          WebkitTransform: "translate(-50%, -50%)",
          transform: "translate(-50%, -50%)",
          minWidth: "50%",
          minHeight: "50%",
          padding: "30px",
          borderRadius: "25px",
        }}
      >
        <label
          htmlFor="exampleFormControlTextarea2"
          className="form-label"
        >
          Changes to be made:
        </label>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea2"
          style={{height: "75%" }}
          rows={15}
          defaultValue={"Beispielseite mit dem Bootstrap Framework anlegen Beispielseite mit dem Bootstrap Framework anlegen Beispielseite mit dem Bootstrap Framework anlegen Beispielseite mit dem Bootstrap Framework anlegen"}
        />
        <div className="container" style={{ padding: "10px" }}>
          <div className="row">
            <div className="col">
              <DatePicker />
            </div>
            <div className="col">
              <button type="button" className="btn btn-info" >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodoModal;
