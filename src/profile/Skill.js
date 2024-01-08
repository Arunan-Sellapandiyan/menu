import React from 'react'

export default function Skill(props) {
  return (
    <div>
      <div style={{backgroundColor: props.color,width:50}}>{props.skills}</div>
    </div>
  )
}
