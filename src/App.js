import React, { useState } from 'react';
import "./App.css";
import gfood from './gfood';

const today = new Date();
const day = today.getDay();
const dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
const month = today.getMonth() + 1;
const date = today.getDate();
const pbnb = (month + day) % 2 === 0; // true : 빠밥


function App() {
  return (
    <div>
      <div id="header">
        <h1>{month}/{date} {dayNames[day]}</h1>
        <h3>오늘은 {pbnb ? "빠밥" : "늦밥"}</h3>
      </div>
    </div>
  );
}

export default App;
