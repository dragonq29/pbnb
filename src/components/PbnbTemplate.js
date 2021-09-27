import React from "react";
import styled from "styled-components";

const PbnbTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);

  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

function PbnbTemplate({ children }) {
  return <PbnbTemplateBlock>{children}</PbnbTemplateBlock>;
}

export default PbnbTemplate;
