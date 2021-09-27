import React from "react";
import styled from "styled-components";
import PbnbMeal from "./PbnbMeal";

const PbnbListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: white;
`;

function PbnbList({ data }) {
  return (
    <PbnbListBlock>
      <PbnbMeal data={data.breakfirstList}>조식</PbnbMeal>
      <PbnbMeal data={data.lunchList}>중식</PbnbMeal>
      <PbnbMeal data={data.dinnerList}>석식</PbnbMeal>
    </PbnbListBlock>
  );
}

export default PbnbList;
