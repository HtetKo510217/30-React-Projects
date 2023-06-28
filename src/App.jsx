import React from 'react'
import './App.css'
import SliderToGrowApp from './projects/09-slider-to-grow-app/SliderToGrowApp'
// import SlideToUnlockApp from './projects/08-slide-to-unlock-app/SlideToUnlockApp'
// import TemperatureControllerApp from './projects/06-temperature-controller/TemperatureControllerApp'
// import LightAndDarkModeApp from './projects/07-light-and-dark-mode/LightAndDarkModeApp'
// import LikePhotoApp from './projects/03-like-my-photo/LikePhotoApp'
// import TestimonialsApp from './projects/04-testimonials-app/TestimonialsApp'
// import AlertApp from './projects/05-alerts/AlertApp'
// import RandomizeColor from './projects/02-randomize-colors/RandomizeColor'
// import EsignatureApp from './projects/01-e-signature-app/EsignatureApp'

export default function App() {
  return (
    <>
      <h1 className='center'>30 + React Projects</h1>
      <hr></hr>
      {/* <EsignatureApp /> */}
      {/* <RandomizeColor /> */}
      {/* <LikePhotoApp /> */}
      {/* <TestimonialsApp /> */}
      {/* <AlertApp /> */}
      {/* <TemperatureControllerApp /> */}
      {/* <LightAndDarkModeApp /> */}
      {/* <SlideToUnlockApp /> */}
      <SliderToGrowApp />
    </>
  )
}
