import React, { useEffect, useState } from "react";
import "./UserAlaram.css";
import sound from "./christmas_bells.mp3";
import ActivateAlaram from "./ActivateAlaram";
const UserAlaram = (props) => {
  const [hour, setHour] = useState("");
  const [minute, setminute] = useState("");
  const [second, setsecond] = useState("");
  const [calendar, setCalendar] = useState("");
  let ring = new Audio(sound);
  const setHourHandler = (e) => {
    setHour(e.target.value);
  };
  const setMinuteHandler = (e) => {
    setminute(e.target.value);
  };
  const setSecHandler = (e) => {
    setsecond(e.target.value);
  };
  const calendarHandler = (e) => {
    setCalendar(e.target.value);
  };
  const month = new Date(calendar).getMonth();
  const year = new Date(calendar).getFullYear();
  const date = new Date(calendar).getDate();
  const setAlaram = (e) => {
    e.preventDefault();
    if (
      !hour ||
      hour > 24 ||
      minute > 60 ||
      second > 60 ||
      !minute ||
      !second ||
      !year
    ) {
      alert("plese enter the valid time and date");
      return;
    }
    alert("your aleram created");
    // props.alaram(hour, minute, second, year, day + 1, date);
  };

  const [count, setcount] = useState(props.count);
  const snozAlaram = (e) => {
    e.preventDefault();
    setcount({
      countown: count.countown + 1,
    });
    console.log(count.countown);

    if (hour) {
      alert(`${count.countown} time: your aleram will be start after 1 minute
       you want to skip 1 minute please click snooze button`);
      setminute(+minute + 1);

      if (count.countown === 3) {
        alert("last alaram");

        setHour("");
        setminute("");
        setsecond("");
        setCalendar("");
        setcount({
          countown: 0,
        });
      }
    }
  };
  const clearAlaram = () => {
    if (!hour) {
      alert("your alaram is deleted");
      setHour("");
      setminute("");
      setsecond("");
      setCalendar("");
      setcount({
        countown: 0,
      });
    }
  };
  useEffect(() => {
    if (
      props.datas.hour == hour &&
      props.datas.minute == minute &&
      props.datas.second == second &&
      props.datas.year == year &&
      props.datas.month + 1 == month + 1 &&
      props.datas.date == date + 1
    ) {
      ring.play();
    }
    return () => {
      console.log("clear");
    };
  }, [setAlaram, snozAlaram]);
  return (
    <React.Fragment>
      <form>
        <div>
          <input
            onChange={setHourHandler}
            max={24}
            min={1}
            type="number"
            placeholder="hour"
          ></input>
          <input
            onChange={setMinuteHandler}
            max={60}
            min={0}
            type="number"
            placeholder="minute"
          ></input>
          <input
            onChange={setSecHandler}
            type="number"
            max={60}
            min={0}
            placeholder="second"
          ></input>
          <input type="date" onChange={calendarHandler} />
        </div>
        <button type="submit" onClick={setAlaram}>
          Set Alaram
        </button>
        <audio src="./christmas_bells.mp3" id="my"></audio>
        <button type="submit" onClick={clearAlaram}>
          Clear Alaram
        </button>
        <button type="submit" onClick={snozAlaram}>
          snooze
        </button>
      </form>
    </React.Fragment>
  );
};
export default UserAlaram;
