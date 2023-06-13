import React from 'react'
import './App.css'
import RandomizeColor from './projects/02-randomize-colors/RandomizeColor'
// import EsignatureApp from './projects/01-e-signature-app/EsignatureApp'

export default function App() {
  return (
    <>
      <h1 className='center'>30 + React Projects</h1>
      <hr></hr>
      {/* <EsignatureApp /> */}
      <RandomizeColor />
    </>
  )
}
