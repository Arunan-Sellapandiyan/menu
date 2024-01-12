import React, { useState } from 'react'
import List from './List';

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "buds", quantity: 12, packed:true }
  ];


export default function Display() {
  const [items, setItems] = useState(initialItems);

  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
  }
  return (
    <div className='list'>
      <ul> {initialItems.map((item)=> (<List item={item} key={item.id} onDelete={handleDelete}/>))
        }
      </ul>
    </div>
  )
}
