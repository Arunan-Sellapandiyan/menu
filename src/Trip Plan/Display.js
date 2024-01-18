import React, { useState } from 'react'
import List from './List';

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
//     { id: 3, description: "buds", quantity: 12, packed:true }
//   ];


export default function Display({items}) {
  // const [items, setItems] = useState(initialItems);
    
  
  return (
    <div className='list'>
      <ul> {items.map((item)=> (<List item={item} key={item.id}/>))
        }
      </ul>
    </div>
  )
}
