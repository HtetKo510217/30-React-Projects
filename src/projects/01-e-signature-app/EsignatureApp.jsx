import React, { useState } from 'react'
import Title from '../../components/Title';

export default function EsignatureApp() {
    const [formData,setFormData] = useState({
        name :'',
        date :''
    });

    const {name,date} = formData;

    const onChange = (e)=> {
        setFormData((prev) => ({
            ...prev,
            [e.target.id] : e.target.value,
        }))
    }

  return (
    <div className='container'>
        <Title classes={"mainTitle"} text={name} />
        <Title classes={"subTtitle"} text={!date ? 'DOB' : date} />
        <p className='textGroup'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish</p>
        <div className='col'>
            <input type='date' value={date} id='date' onChange={onChange} />
            <input type='text' value={name} id='name' onChange={onChange} />
        </div>
    </div>
  )
}
