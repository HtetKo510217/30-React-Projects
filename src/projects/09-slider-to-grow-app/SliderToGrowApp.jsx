import SliderCom from './SliderCom'
import Title from '../../components/Title'
import { useState } from 'react'
export default function SliderToGrowApp() {
    const [inputValue, setInputValue] = useState(0)
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    let bgColor;
    let TxtColor;

    if(inputValue < 20){
        bgColor = 'red'
        TxtColor = 'black' 
    }else if(inputValue < 40){
        bgColor = 'orange'
        TxtColor = 'white'
    }else if(inputValue < 60){
        bgColor = 'yellow'
        TxtColor = 'black'
    }else if(inputValue < 80){
        bgColor = 'green'
        TxtColor = 'white'
    }else{
        bgColor = 'blue'
        TxtColor = 'white'
    }


  return (
    <div className='container text-center'>
        <Title text="Slider To Grow" />
        <SliderCom inputValue={inputValue} handleInput={handleInput} bgColor={bgColor} TxtColor={TxtColor} />
    </div>
  )
}
