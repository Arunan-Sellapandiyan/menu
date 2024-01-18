import React, { useState } from "react";

export default function Form() {
  const [quantity, setQuantity] = useState(1);
  const [desc, setDesc] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    const newItem = { desc, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDesc("");
    setQuantity("");
  }
  function Num(e) {
    setQuantity(e.target.value);
  }
  function changeDescription(e) {
    setDesc(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handlesubmit}>
      <h3>what are the things need for your trip?</h3>
      <select value={quantity} changeDescription={Num}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="itemssss"
        value={desc}
        onChange={changeDescription}
      />
      <button> Add</button>
    </form>
  );
}
