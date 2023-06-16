import React from 'react'
import Alert from '../../components/Alert'

export default function AlertApp() {
  return (
    <div className='container'>
        <Alert type={"success"} message={"Success Login"} />
        <Alert type={"info"} message={"Time triggered"} delay={true} />
    </div>
  )
}
