import React from 'react'

export default function Title({classes,text}) {
  return (
    <h1 className={!classes ? 'center' : classes}>{!text ? 'Your signature' : text}</h1>
  )
}
