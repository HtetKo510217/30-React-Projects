import React from 'react'
import Title from "../../components/Title"
import Button from "../../components/Button"
export default function TemperatureControllerApp() {
    const [temperature,setTemperature] = React.useState(0);
    const temperatureIncrease = () => {
        setTemperature(temperature + 1);
    }
    const temperatureDecrease = () => {
        setTemperature(temperature - 1);
    }
  return (
    <div className='controller mt-3 text-center'>
        <Title text="Temperature Controller" />
        <div className='card bg-light m-auto' style={{width: 200}}>
            <h1 className={`text-light mx-auto mt-5 pt-5 card border-50 ${temperature > 0 ? 'bg-danger' :'bg-info'}`} style={{height:150,width:150,border:"2px solid #666",borderRadius:"50%"}}>
                {temperature} °C
            </h1>
            <div className='d-flex my-2 mx-auto justify-center'>
                <Button text='-' btnClass={"btn-lg"} onClick={temperatureDecrease} />
                <Button text='+' btnClass={"btn-lg"} onClick={temperatureIncrease} />
            </div>
        </div>
    </div>
  )
}
