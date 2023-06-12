import React, { useState } from "react";

const ComponentSecond = ({ inputJson }) => {
  console.log(inputJson, "inputJson");
  const [value, setValue] = useState();

  const handleChange = (e) => {
    const { value, name } = e.target;
    let obj = {};
    obj[name] = value;
    setValue(obj);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value, "value");
    alert(Object.values(value)[0]);
  };
  return (
    <div>
      {inputJson.length > 0 && (
        <form onSubmit={onSubmit}>
          {inputJson.map((data) => (
            <div>
              <label>{data.label}</label>
              <input
                type={data.type}
                name={data.label}
                onChange={handleChange}
              />
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ComponentSecond;
