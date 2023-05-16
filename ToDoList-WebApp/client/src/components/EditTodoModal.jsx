import DatePicker from "./DatePicker";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function EditTodoModal(props) {
  const [backendData, setBackendData] = useState([{}]);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/editModal/${params.id}`)
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  console.log(backendData.description);
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

export default EditTodoModal;
