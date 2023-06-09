import React, { useRef, useState } from "react";

const DatePicker = (dateProp) => {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <input type="date" onChange={handleChange} ref={dateInputRef} />
      <p>Set task due to: {date}</p>
    </div>
  );
};

export default DatePicker;
