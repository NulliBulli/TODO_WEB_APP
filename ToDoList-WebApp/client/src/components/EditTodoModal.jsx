import DatePicker from "./DatePicker";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditTask from "./editTask";

export function EditTodoModal() {
  const [backendData, setBackendData] = useState({});
  const [alteredTask, setAlteredTask] = useState({});
  const params = useParams();
  const testTask = {
    id: 4,
    description: "todo4",
    dueDate: "2023-04-01",
    percentage: 50,
  };

  useEffect(() => {
    fetch(`/api/editModal/${params.id}`)
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  // console.log(backendData.dueDate);
  return (
    <div className="EditModal">
      <div
        className="EditModalWrapper"
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
            Changes to be made:
          </label>

          <textarea
            className="form-control"
            id="exampleFormControlTextarea2"
            style={{ height: "75%" }}
            rows={15}
            defaultValue={backendData.description}
          />
          <div className="container" style={{ padding: "10px" }}>
            <div className="row">
              <div className="col">
                <DatePicker />
              </div>
              <div className="col">
                <EditTask task={testTask} paraId={"34"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTodoModal;
