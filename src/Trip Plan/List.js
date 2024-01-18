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
        
      />
      <span style={!isCheck === item.packed? { textDecoration: "line-through" } : {}}>
        {item.quantity} 
        {item.desc}
        
      </span>
      <button >❌</button>
    </li>
  );
}
