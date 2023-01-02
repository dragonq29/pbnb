import React, { useEffect, useState } from "react";
// import axios from "axios";
// import gfood from "./gfood";
// import pbnbDate from "./pbnbDate";
// import KakaoAdFit from "./KakaoAdFit";
// import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
// import PbnbTemplate from "./components/PbnbTemplate";
// import Button from "./components/Button";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// import PbnbHead from "./components/PbnbHead";
// import PbnbList from "./components/PbnbList";

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: #e9ecef;
//   }
// `;

// const palette = {
//   blue: "#228be6",
//   gray: "#496057",
//   pink: "#f06595",
// };

// const ButtonBlock = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   padding: 1rem;
//   border-bottom: 1px solid #e9ecef;
// `;

function App() {
  // const URL =
  //   "https://asia-northeast1-pbnb-2f164.cloudfunctions.net/menu_v_2_0_0";

  // const [targetDate, setTargetDate] = useState(new Date());
  // const [meals, setMeals] = useState({
  //   breakfirstList: null,
  //   lunchList: null,
  //   dinnerList: null,
  // });
  // const [headDateStr, setHeadDate] = useState("");
  // const [pbnb, setPbnb] = useState(null);
  // const [bizPlaceCode, setBizPlaceCode] = useState("10095");

  // useEffect(() => {
  //   console.log("refresh");
  //   const { pbnb, yyyymmdd, dateStr } = pbnbDate(targetDate);
  //   setHeadDate(dateStr);
  //   setPbnb(pbnb);
  //   const requestParams = gfood(yyyymmdd, yyyymmdd, bizPlaceCode);
  //   // const requestParams = gfood("20211101", "20211101", bizPlaceCode);
  //   axios
  //     .post(URL, requestParams)
  //     .then((response) => {
  //       const data = response.data;
  //       setMeals(data);
  //     })
  //     .catch(function (error) {
  //       // 오류발생시 실행
  //     });
  // }, [bizPlaceCode, targetDate]);

  // const beforeDate = () => {
  //   const newDate = new Date(targetDate);
  //   newDate.setDate(targetDate.getDate() - 1);
  //   setTargetDate(newDate);
  // };

  // const todayDate = () => {
  //   const newDate = new Date();
  //   setTargetDate(newDate);
  // };

  // const nextDate = () => {
  //   const newDate = new Date(targetDate);
  //   newDate.setDate(targetDate.getDate() + 1);
  //   setTargetDate(newDate);
  // };

  return (
    // <>
    //   <GlobalStyle />
    //   <ThemeProvider theme={{ palette }}>
    //     <PbnbTemplate>
    //       <PbnbHead headDateStr={headDateStr} pbnb={pbnb} />
    //       <ButtonBlock>
    //         <Button color="blue" onClick={beforeDate}>
    //           Before
    //         </Button>
    //         <Button color="gray" onClick={todayDate}>
    //           Today
    //         </Button>
    //         <Button color="pink" onClick={nextDate}>
    //           Next
    //         </Button>
    //       </ButtonBlock>
    //       <PbnbList data={meals}></PbnbList>
    //     </PbnbTemplate>
    //   </ThemeProvider>
    // </>
    <div>
      <div>이젠 빠밥늦밥을</div>
      <div>안드로이드 앱으로 이용 부탁드립니다~!</div>
      <a href='https://play.google.com/store/apps/details?id=com.pbnb&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
        <img
          alt='다운로드하기 Google Play'
          src='https://play.google.com/intl/en_us/badges/static/images/badges/ko_badge_web_generic.png'
          style={{
            width: "200px",
          }}
          />
      </a>
      <div>아이폰 앱은 조금만 더 기다려 주세요...</div>
    </div>
  );
}

export default App;
