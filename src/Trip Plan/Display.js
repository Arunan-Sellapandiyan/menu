import React from 'react'
import List from './List';
const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];


export default function Display() {
  return (
    <div className='list'>
      <ul> {initialItems.map((item)=> (<List item={item} key={item.id}/>))
        }
      </ul>
    </div>
  )
}
