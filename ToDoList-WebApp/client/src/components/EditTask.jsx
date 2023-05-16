import { Link } from "react-router-dom";
import { useEffect } from "react";

export function editTask(task, paraId) {
  console.log(paraId);
  return (
    <>
      <Link to="/tasks">
        <button
          type="button"
          className="btn btn-info"
          onClick={buttonHandler(task, paraId)}
        >
          Confirm
        </button>
      </Link>
    </>
  );
}

export default editTask;

export function buttonHandler(task, id) {
  //   const requestOptions = {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title: "React PUT Request Example" }),
  //   };
  //   fetch(`/api/editModal/${id}`, requestOptions).then((response) =>
  //     response.json()
  //   );
}
