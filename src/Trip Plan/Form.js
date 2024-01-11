import React, { useState } from "react";

export default function Form() {
    const [desc,setDesc]=useState("");
    const [quantity,setQuantity]=useState(1);
    function change(e){
        setDesc(e.target.value);
    }
    function handlesubmit(e){
     e.preventDefault();
     const newItem={desc,quantity,packed:false,id:Date.now()}
     console.log(newItem);
     setDesc('')
     setQuantity('')
    }
    function Num(e){
      setQuantity( e.target.value);
    }
  return (
    <form className="add-form" onSubmit={handlesubmit}>
      <h3>what are the things need for your trip?</h3>
      <select value={quantity} onChange={Num}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="itemssss"  value={desc} onChange={change}/>
      <button> Add</button>
    </form>
    );
}
