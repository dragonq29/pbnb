import React, { useEffect, useState } from "react";
import "./App.css";
import gfood from "./gfood";
import axios from "axios";
import moment from "moment";
import AdfitWebComponent from 'react-adfit-web-component'

const today = new Date();
const day = today.getDay();
const dayNames = [
  "(일요일)",
  "(월요일)",
  "(화요일)",
  "(수요일)",
  "(목요일)",
  "(금요일)",
  "(토요일)",
];
const month = today.getMonth() + 1;
const date = today.getDate();
const pbnb = (month + day) % 2 === 0; // true : 빠밥
const yyyymmdd = moment().format("YYYYMMDD");

function App() {
  const URL =
    "https://pbnb.duckdns.org/smartfood/todaymenuGf/todayMenu_nList_pro.do";

  const [breakfirst, setBreakfirst] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);

  const requestParams = {
    end_dt: yyyymmdd,
    st_dt: yyyymmdd,
    bizplc_cd: "10095",
  };

  useEffect(() => {
    axios
      .post(URL, requestParams)
      .then(function (response) {
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
  }, []);

  return (
    <>
      <div id="header">
        <h1>
          {month}/{date} {dayNames[day]}
        </h1>
        <h3>오늘은 {pbnb ? "빠밥" : "늦밥"}</h3>
        <div></div>
        <div>조식 - 간편식</div>
        <ul>
          {breakfirst
            .filter((menu) => menu.coner_fg === "0002")
            .map((menu) => (
              <li>{menu.name}</li>
            ))}
        </ul>
        <div>조식</div>
        <ul>
          {breakfirst
            .filter((menu) => menu.coner_fg === "0001")
            .map((menu) => (
              <li>{menu.name}</li>
            ))}
        </ul>
        <div>중식 - 간편식</div>
        <ul>
          {lunch
            .filter((menu) => menu.coner_fg === "0002")
            .map((menu) => (
              <li>{menu.name}</li>
            ))}
        </ul>
        <div>중식</div>
        <ul>
          {lunch
            .filter((menu) => menu.coner_fg === "0001")
            .map((menu) => (
              <li>{menu.name}</li>
            ))}
        </ul>
        <div>석식</div>
        <ul>
          {dinner.map((menu) => (
            <li>{menu.name}</li>
          ))}
        </ul>
      </div>
      <AdfitWebComponent
      adUnit="DAN-OYlqJEfhL6dfEQp8"
      adWidth="320"
      adHeight="50"
      />
    </>
  );
}

export default App;
