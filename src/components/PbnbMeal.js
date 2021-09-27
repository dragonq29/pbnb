import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const PbnbMealBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const upArrow = styled.div`
  cursor: pointer;
`;

function PbnbMeal({ data, children }) {
  return (
    <div>
      <div>{children}</div>
      <ul>
        {data != null
          ? data.map((menu, index) => (
              <li key={index}>
                {menu.mealName} ({menu.mainMenuName})
                {
                  <ul>
                    {menu.list.map((subMenu, subIndex) => (
                      <li key={subIndex}>{subMenu}</li>
                    ))}
                  </ul>
                }
              </li>
            ))
          : "로딩중"}
      </ul>
    </div>
  );
}

export default PbnbMeal;
