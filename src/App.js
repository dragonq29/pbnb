import React, { useEffect, useState } from "react";
import axios from "axios";
import gfood from "./gfood";
import pbnbDate from "./pbnbDate";
import KakaoAdFit from "./KakaoAdFit";
import { ThemeProvider } from "styled-components";
import Button from "./Button";
import "./App.css";

function App() {
  const URL = "https://asia-northeast1-pbnb-2f164.cloudfunctions.net/menu";

  const [targetDate, setTargetDate] = useState(new Date());
  const [breakfirst, setBreakfirst] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [headDateStr, setHeadDate] = useState("");
  const [pbnb, setPbnb] = useState(null);
  const [bizPlaceCode, setBizPlaceCode] = useState("10095");

  useEffect(() => {
    const loading = [
      { name: "로딩중", coner_fg: "0001" },
      { name: "로딩중", coner_fg: "0002" },
      { name: "로딩중", coner_fg: "0003" },
    ];

    const noBob = [
      { name: "밥 없음", coner_fg: "0001" },
      { name: "밥 없음", coner_fg: "0002" },
      { name: "밥 없음", coner_fg: "0003" },
    ];
    console.log("refresh");
    const { pbnb, yyyymmdd, dateStr } = pbnbDate(targetDate);
    setHeadDate(dateStr);
    setPbnb(pbnb);
    const requestParams = gfood(yyyymmdd, yyyymmdd, bizPlaceCode);
    setBreakfirst(loading);
    setLunch(loading);
    setDinner(loading);
    axios
      .post(URL, requestParams)
      .then((response) => {
        const dataList = response.data.todayList;
        const breakfirstData = dataList
          .filter((m) => m.meald_fg_cd === "0001")
          .map((menu) => ({ name: menu.disp_nm, coner_fg: menu.coner_fg_cd }));
        const lunchData = dataList
          .filter((m) => m.meald_fg_cd === "0002")
          .map((menu) => ({ name: menu.disp_nm, coner_fg: menu.coner_fg_cd }));
        const dinnerData = dataList
          .filter((m) => m.meald_fg_cd === "0003")
          .map((menu) => ({ name: menu.disp_nm, coner_fg: menu.coner_fg_cd }));
        setBreakfirst(breakfirstData.length === 0 ? noBob : breakfirstData);
        setLunch(lunchData.length === 0 ? noBob : lunchData);
        setDinner(dinnerData.length === 0 ? noBob : dinnerData);
        // console.log(dataList.filter(m => m.meald_fg_cd === "0003").map((menu) => ({name: menu.disp_nm})));
      })
      .catch(function (error) {
        // 오류발생시 실행
      });
  }, [bizPlaceCode, targetDate]);

  const beforeDate = () => {
    const newDate = new Date();
    newDate.setDate(targetDate.getDate() - 1);
    setTargetDate(newDate);
  };

  const todayDate = () => {
    const newDate = new Date();
    setTargetDate(newDate);
  };

  const nextDate = () => {
    const newDate = new Date();
    newDate.setDate(targetDate.getDate() + 1);
    setTargetDate(newDate);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },
      }}
    >
      <div id="header">
        <h1>{headDateStr}</h1>
        <Button color="blue" size="large" onClick={beforeDate}>
          Before
        </Button>
        <Button color="gray" size="large" onClick={todayDate}>
          Today
        </Button>
        <Button color="pink" size="large" onClick={nextDate}>
          Next
        </Button>
        <h2>{pbnb != null ? (pbnb ? "빠밥" : "늦밥") : "로딩중"}</h2>
        <div></div>
        <div>조식 - 간편식</div>
        <ul>
          {breakfirst
            .filter((menu) => menu.coner_fg === "0002")
            .map((menu, index) => (
              <li key={index}>{menu.name}</li>
            ))}
        </ul>
        <div>조식</div>
        <ul>
          {breakfirst
            .filter((menu) => menu.coner_fg === "0001")
            .map((menu, index) => (
              <li key={index}>{menu.name}</li>
            ))}
        </ul>
        <div>중식 - 간편식</div>
        <ul>
          {lunch
            .filter((menu) => menu.coner_fg === "0002")
            .map((menu, index) => (
              <li key={index}>{menu.name}</li>
            ))}
        </ul>
        <div>중식</div>
        <ul>
          {lunch
            .filter((menu) => menu.coner_fg === "0001")
            .map((menu, index) => (
              <li key={index}>{menu.name}</li>
            ))}
        </ul>
        <div>석식</div>
        <ul>
          {dinner.map((menu, index) => (
            <li key={index}>{menu.name}</li>
          ))}
        </ul>
        <KakaoAdFit
         adUnit="DAN-lbt4eC5RTpmNpdfG" 
         adWidth="320" 
         adHeight="50" 
         />
      </div>
    </ThemeProvider>
  );
}

export default App;