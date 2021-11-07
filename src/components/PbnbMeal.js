import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
const imageBaseUrl = "https://sfv.hyundaigreenfood.com";
const PbnbMealBlock = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
  flex-direction: column;
  font-size: 20px;
`;

const MealTextContainerBlock = styled.div`
  display: flex;
  flex: 1;
  padding: 5px 0px;
  font-size: 20px;
  flex-flow: row wrap;
`;

const TextBlock = styled.div`
  display: flex;
  flex: 1;
  padding: 5px 0px;
  font-size: 20px;
  flex-direction: column;
  ul {
    margin-top: 0rem;
  }

  li {
    font-size: 16px;
  }
`;

const MealTitle = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #adb5bd;
`;

function PbnbMealMain({ data, children }) {
  return (
    <>
      <MealTitle>{data.mealName}</MealTitle>
      {data.mainMenuName}
      {
        <ul>
          {data.list.map((subMenu, subIndex) => (
            <li key={subIndex}>{subMenu}</li>
          ))}
        </ul>
      }
    </>
  );
}

function PbnbMealSimple({ data, children }) {
  return (
    <>
      <MealTitle>{data.mealName}</MealTitle>
      {data.mainMenuName}
      {
        <ul>
          {data.list.map((subMenu, subIndex) => (
            <li key={subIndex}>{subMenu}</li>
          ))}
        </ul>
      }
    </>
  );
}

const upArrow = styled.div`
  cursor: pointer;
`;

function MealImage({ data }) {
  const imageUrl = data !== null && data.length > 0 ? data[0].image : null;
  return (
    <>
      {imageUrl !== null ? (
        <img
          style={{ borderRadius: "16px" }}
          src={imageBaseUrl + imageUrl}
          alt="사진을 불러오지 못하였습니다"
        />
      ) : (
        <div
          style={{
            borderRadius: "4x",
            border: "1px solid #adb5bd",
            display: "flex",
            justifyContent: "center",
          }}
        >
          이미지 없음
        </div>
      )}
    </>
  );
}

function PbnbMeal({ data, children }) {
  if (data == null) {
    return (
      <>
        <div style={{ fontSize: "30px" }}>{children}</div>
        <div>밥없음</div>
      </>
    );
  }

  const mainMealData = data.filter((menu) => !menu.mealName.includes("간편식"));
  const simpleMealData = data.filter((menu) =>
    menu.mealName.includes("간편식")
  );

  return (
    <div>
      <PbnbMealBlock>
        <div style={{ fontSize: "30px" }}>{children}</div>
        <MealImage data={mainMealData}></MealImage>
        <MealTextContainerBlock>
          <TextBlock>
            {mainMealData.map((menu, index) => (
              <PbnbMealMain key={index} data={menu}></PbnbMealMain>
            ))}
          </TextBlock>
          <TextBlock>
            {simpleMealData.map((menu, index) => (
              <PbnbMealSimple key={index} data={menu}></PbnbMealSimple>
            ))}
          </TextBlock>
        </MealTextContainerBlock>
      </PbnbMealBlock>
    </div>
  );
}

export default PbnbMeal;
