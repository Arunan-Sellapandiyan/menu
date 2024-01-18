import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import Display from './Display'
import Footer from './footer'
import "./index.css"

export default function Route() {
  const[items,setItems]=useState([]);
  function handleAddItems(item){
    setItems((items)=>[...items,item]);
      }

  return (
    <div>
      <Header />
      <Form  onAddItems={handleAddItems} />
      <Display items={items} />
      <Footer />
    </div>
  )
}
