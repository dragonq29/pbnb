import React from "react";

function Meal({ data }) {
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((menu, index) => (
          <li key={index}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Meal;
