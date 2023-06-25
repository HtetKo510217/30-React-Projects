import React from 'react'
import './LockSlider.css'
export default function LockSlider({handleInput,sliderValue,width}) {
    const sliderStyle = {
        appereance: 'none',
        width : !width ? '300px' : width,
        height : '50px',
        background : "rgba(188,190,188,0.5)",
        outline : 'none',
    }
  return <input type="range" id="slider" value={sliderValue} onInput={handleInput}  style={sliderStyle} />
}
