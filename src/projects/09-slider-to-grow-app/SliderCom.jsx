import React from 'react'

export default function SliderCom({inputValue,handleInput,bgColor,TxtColor}) {
  return (
    <div className='d-flex flex-column justify-content-center' style={{gap:100}}>
        <input type="range" min="0" max="100" value={inputValue} onInput={handleInput} />
        <div style={{
            color:!TxtColor ? 'black' : TxtColor,
            backgroundColor:!bgColor? 'lightblue' : bgColor,
            height:`${inputValue * 3 }px`,
            width:`${inputValue * 3 }px`,
            borderRadius:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin:'auto',
            fontWeight:'bold',
        }}>
            <span>{inputValue}</span>
        </div>
    </div>
  )
}
