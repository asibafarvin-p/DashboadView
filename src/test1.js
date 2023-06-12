import React, { useEffect, useState } from "react";

const ComponentFirst = ({ getJson }) => {
  const [newInput, setNewInput] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    // let test = "[{"label":"name","type":"text"}, {"label":"age","type":"number"}, {"label":"phone","type":"number"}]"
    setNewInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getJson(JSON.parse(newInput));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div style={{ width: "100%" }}>
          <label>Field Name</label>
          <input
            name="label"
            onChange={(e) => handleChange(e)}
            className="customInput"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComponentFirst;
