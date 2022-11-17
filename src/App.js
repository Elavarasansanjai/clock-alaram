import "./Clock.css";
import Clock from "./Components/clock/clock";
import UserAlaram from "./Components/Alaram/UserAlaram";
import React, { useState, useEffect } from "react";
function App() {
  let now = new Date();
  let data = {
    year: now.getFullYear(),
    month: now.getMonth(),
    date: now.getDate(),
    day: now.getDay(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
  const [datas, setData] = useState(data);
  const userAlaramHandler = (time) => {
    let secc = time;
    if (time < 3) {
      setTimeout(() => {
        alert("aleram start");
        time++;
      }, 5000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      let now = new Date();
      let data = {
        year: now.getFullYear(),
        month: now.getMonth(),
        date: now.getDate(),
        day: now.getDay(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
      };

      setData(data);
    }, 1000);
  });
  const count = {
    countown: 1,
  };
  return (
    <div className="container">
      <Clock data={datas} />
      <UserAlaram count={count} datas={datas} alaram={userAlaramHandler} />
    </div>
  );
}

export default App;
