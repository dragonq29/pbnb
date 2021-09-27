import React from "react";
import styled, { css } from "styled-components";

const PbnbStyle = css`
  ${(props) => {
    if (props.pbnb == null) {
      return;
    }
    if (props.pbnb) {
      return css`
        background: #1c7ed6;
      `;
    } else {
      return css`
        background: #f59f00;
      `;
    }
  }}
`;

const HeadDateBlock = styled.div`
  padding-top: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;

  h1 {
    margin: 0;
    font-size: 3rem;
  }
`;

const PbnbBlock = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    background: #adb5bd;
    color: white;
    font-size: 35px;
    height: 40px;
    font-weight: bold;
    ${PbnbStyle}
  }
`;

function PbnbHead({ headDateStr, pbnb, children }) {
  return (
    <>
      <HeadDateBlock pbnb={pbnb}>
        <h1>{headDateStr}</h1>
      </HeadDateBlock>
      <PbnbBlock pbnb={pbnb}>
        <div>{pbnb != null ? (pbnb ? "빠밥" : "늦밥") : "로딩중"}</div>
      </PbnbBlock>
    </>
  );
}

export default PbnbHead;
