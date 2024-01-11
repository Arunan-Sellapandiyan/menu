import React, { useState } from "react";

export default function List({ item }) {
  const [isCheck, setIsCheck] = useState(item.packed);
  function handleCheckBox() {
    setIsCheck(!isCheck);
  }
  return (
    <li className="list">
      <input
        type="checkbox"
        checked={isCheck}
        onChange={handleCheckBox}
        style={isCheck === item.packed? { textDecoration: "line-through" } : {}}
      />
      <span>
        {item.quantity}
        {item.description}
        
      </span>
      <button>❌</button>
    </li>
  );
}
