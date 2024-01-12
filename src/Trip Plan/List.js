import React, { useState } from "react";

export default function List({ item ,onDelete}) {
  const [isCheck, setIsCheck] = useState(item.packed);
  function handleCheckBox() {
    setIsCheck(!isCheck);
  }
  function Delete(){
   onDelete(item.id);
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
        {item.description}
        
      </span>
      <button onClick={Delete}>❌</button>
    </li>
  );
}
