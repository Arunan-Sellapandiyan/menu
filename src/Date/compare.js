import { useState, useEffect } from "react";

export default function SamDate() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date("Nov 20 2020"));

  useEffect(() => {
    const newDate = new Date("Nov 20 2020");
    newDate.setDate(newDate.getDate() + count);
    setDate(newDate);
  }, [count]);

  function decre() {
    setCount((c) => c - 1);
  }

  function incre() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <div>
        <button onClick={decre}>-</button>
        <div>count: {count}</div>
        <button onClick={incre}>+</button>
      </div>
      <p>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
