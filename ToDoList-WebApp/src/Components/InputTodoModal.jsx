import DatePicker from "./DatePicker";

export function InputTodoModal() {
  return (
    <>
      <div
        className="mb-3"
        style={{
          color: "red",
          border: "solid",
          background: "#404040",
          position: "fixed",
          top: "50%",
          left: "50%",
          WebkitTransform: "translate(-50%, -50%)",
          transform: "translate(-50%, -50%)",
          width: "50%",
          height: "70%",
          padding: "30px",
          borderRadius: "25px",
        }}
      >
        <label
          htmlFor="exampleFormControlTextarea2"
          className="form-label"
          style={{ background: "green" }}
        >
          Describe your ToDO!
        </label>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          style={{ color: "green", background: "yellow", height: "5%" }}
          rows={1}
          defaultValue={""}
        />
        <textarea
          className="form-control"
          id="exampleFormControlTextarea2"
          style={{ color: "green", background: "yellow", height: "75%" }}
          rows={3}
          defaultValue={""}
        />
        <DatePicker />
      </div>
    </>
  );
}

export default InputTodoModal;
