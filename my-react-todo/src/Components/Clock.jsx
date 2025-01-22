import React,{useState} from "react";

const Clock = () => {
    const [time, setTime] = useState(() => {
      const now = new Date();
      const updateTime = () => {
        setTime(new Date());
      };
      setInterval(updateTime, 1000);
      return now;
    });

    return (
        <div className="clock">
          {time.toLocaleTimeString()}
        </div>
      );




}

export default Clock;