import React from "react";

function TimeComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  function updateTime() {
    setTime(time + 1);
  }
  return (
    <div>
      <h5>{time}초</h5>
      <button onClick={updateTime}>1초 증가</button>
    </div>
  );
}

export default TimeComponent;
