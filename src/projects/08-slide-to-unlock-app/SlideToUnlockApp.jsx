import React from 'react'
import LockSlider from './LockSlider'
import {AiFillUnlock} from 'react-icons/ai'
export default function SlideToUnlockApp() {
    const [uiProps, setUiProps] = React.useState({
        uiText : 'Slide to Unlock',
        uiColor : '#eee',
        uiBgColor : '#000',
    })
    const [showLockSlider, setShowLockSlider] = React.useState(true)
    const [sliderValue, setSliderValue] = React.useState(0)
    const handleLockSliderInput = (e) => {
        setSliderValue(e.target.value)
        if(e.target.value >= 100){
            setShowLockSlider(false)
            setUiProps({
                uiText : 'Unlocked',
                uiColor : '#000',
                uiBgColor : '#59565D',
            })
        }
    }

    const handleUnlock = () => {
        setShowLockSlider(true)
        setUiProps({
            uiText : 'Slide to Unlock',
            uiColor : '#eee',
            uiBgColor : '#000',
        })
        setSliderValue(0)
    }


  return (
    <div className='container text-center d-flex flex-column align-items-center justify-content-end rounded' style={{
        height : '70vh',
        marginTop : '15vh',
        width : 340,
        border : '4px solid #000',
        paddingBottom : '20px',
        background : uiProps.uiBgColor,
    }}>
        <h1 className='text-center' style={{color:uiProps.uiColor}}>{uiProps.uiText}</h1>
        {showLockSlider ?
        <LockSlider width={"250px"} handleInput={handleLockSliderInput} /> :
        <AiFillUnlock className='unlockIcon' onClick={handleUnlock} />
         }
    </div>
  )
}
