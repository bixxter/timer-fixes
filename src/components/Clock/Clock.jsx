import React, { useState } from "react";
import s from "./Clock.module.css";
const Clock = ({time, setTime}) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [option, setOption] = useState("23:59:59");
  const [disabled, setDisabled] = useState(false);

  const startTimer = (e) => {
    e.preventDefault();
    setDisabled(true);
    const [hours, minutes, seconds] = option.split(":");
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  const resetTimer = () => {
    setDisabled(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTime("00:00:00");
  };

  const onTimeChange = (e) => {
    setTime(e.target.value);
    setOption(e.target.value);
  };

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [hours, minutes, seconds]);

  React.useEffect(() => {
    setTime(`${hours}:${minutes}:${seconds}`);
  }, [hours, minutes, seconds, setTime]);

  return (
    <div className={s.clockComponent}>
      <div className={s.circle}>
        <div className={s.time}>
          <span>{hours < 10 ? `0${hours}` : hours}</span>
          <span>:</span>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
          <span>:</span>
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
      </div>
      <form className={`${s.form} ${disabled ? `${s.hide}` : ""}`} action="#">
        <select onChange={(e) => onTimeChange(e)}>
          <option value="23:59:59">1 Day</option>
          <option value="47:59:59">2 Day</option>
          <option value="71:59:59">3 Day</option>
          <option value="95:59:59">4 Day</option>
          <option value="119:59:59">5 Day</option>
          <option value="143:59:59">6 Day</option>
          <option value="167:59:59">7 Day</option>
        </select>
        <button onClick={startTimer}>Go!</button>
      </form>
      <button onClick={resetTimer}>reset</button>
    </div>
  );
};

export default Clock;
