import React, { useEffect, useState } from 'react'
import Button from './Button'
export default function Alert({type,message,delay=false,delayTime=3000}) {
    const [showAlert, setShowAlert] = useState(true);
    const closeAlert = (e)=> {
        e.target.parentElement.parentElement.classList.add("fadeAlert");

        setTimeout(() => {
            setShowAlert(false)
        }, 400);
    }
    useEffect(()=> {
        delay && setTimeout(() => {
            setShowAlert(false)
        }, delayTime);
    })
  return (
    showAlert && (
        <div className={`col alert alert-${type} mb-3`}>
        <div className='col alert-close'>
            <span>{message}</span>
            <Button btnClass={"btn-close"} text={""} onClick={closeAlert} />
            </div>
        </div>
    )
  )
}
