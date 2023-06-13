import React from 'react'
import Title from '../../components/Title';
export default function RandomizeColor() {

    const handleClick = (e) => {
        let body = document.querySelector("body");
        body.style.backgroundColor = getRandomColor();
        e.target.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16 )];
        }
        return color
    }

  return (
    <div className='container'>
        <Title text="Randomize Colors"  classes={"mb-4 center"}/>
        <div className='col'>
            <button className='btn btn-danger' onClick={handleClick}>Click me</button>
            <button className='btn btn-success' onClick={handleClick}>Me two</button>
            <button className='btn btn-primary' onClick={handleClick}>Me Three</button>
            <button className='btn btn-warning' onClick={handleClick}>Click me again</button>
        </div>
    </div>
  )
}
