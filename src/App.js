import React, { useEffect, useState } from "react";
import axios from "axios";
import gfood from "./gfood";
import pbnbDate from "./pbnbDate";
import "./App.css";

function App() {
  const URL = "https://asia-northeast1-pbnb-2f164.cloudfunctions.net/menu";
  
  const [breakfirst, setBreakfirst] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [headDateStr, setHeadDate] = useState("");
  const [pbnb, setPbnb] = useState(null);
  const [bizPlaceCode, setBizPlaceCode] = useState("10095");

  useEffect(() => {
    console.log("refresh");
    const {pbnb, yyyymmdd, dateStr} = pbnbDate();
    setHeadDate(dateStr);
    setPbnb(pbnb);
    const requestParams = gfood(yyyymmdd, yyyymmdd, bizPlaceCode);
    axios
      .post(URL, requestParams)
      .then((response) => {
        const dataList = response.data.todayList;
        setBreakfirst(
          dataList
            .filter((m) => m.meald_fg_cd === "0001")
            .map((menu) => ({ name: menu.disp_nm, coner_fg: menu.coner_fg_cd }))
        );
        setLunch(
          dataList
            .filter((m) => m.meald_fg_cd === "0002")
            .map((menu) => ({ name: menu.disp_nm, coner_fg: menu.coner_fg_cd }))
        );
        setDinner(
          dataList
            .filter((m) => m.meald_fg_cd === "0003")
            .map((menu) => ({ name: menu.disp_nm, coner_fg: menu.coner_fg_cd }))
        );
        // console.log(dataList.filter(m => m.meald_fg_cd === "0003").map((menu) => ({name: menu.disp_nm})));
      })
      .catch(function (error) {
        // 오류발생시 실행
      });
  }, [bizPlaceCode]);

  return (
    <>
      <div id="header">
        <h1>
          {headDateStr}
        </h1>
        <h3>오늘은 {pbnb != null ? (pbnb ? "빠밥" : "늦밥") : "로딩중"}</h3>
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
      </div>
    </>
  );
}

export default App;
