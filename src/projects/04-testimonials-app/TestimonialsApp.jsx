import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Button from '../../components/Button'
import {BsFillFileEarmarkPostFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'
export default function TestimonialsApp() {
    const [testimonials,setTestimonials] = useState("");
    const [items,setItems] = useState();
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
        .then(response => response.json())
        .then((json) => setItems(json));
    },[testimonials]);

  return (
    <div className='container m-auto'>
        <Title text={"Testimonials"} />
        <div className='col mt-5'>
            <Button text='Posts' btnClass='btn-info' icon={<BsFillFileEarmarkPostFill />} onClick={()=>setTestimonials("Posts")} />
            <Button text='Users' btnClass='btn-info' icon={<FaUserAlt />} onClick={()=>setTestimonials("Users")} />
            <Button text='Comments' btnClass='btn-info' icon={<BiCommentDetail />} onClick={()=>setTestimonials("Comments")} />
        </div>
        <Title classes={'subTitle center mt-4'} text={!testimonials ? 'Select from above !' : testimonials} />
        <div>
            {!items ? null : items.map((item)=> {
                return (
                    <div className='card card-primary mb-2' key={item.id}>
                        {item.name && <h1 className='card-header'>{item.name}</h1>}
                        <div className='card-body'>
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                        </div>
                        {item.email && (<small className='card-footer'>{item.email}</small>)}
                    </div>
                )
            })}
        </div>
    </div>
  )
}
