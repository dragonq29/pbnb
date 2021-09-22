import React from "react";

function Meal({ data, children }) {
  console.log(data);
  return (
    <div>
      <div>{children}</div>
      <ul>
        {data.map((menu, index) => (
          <li key={index}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Meal;
