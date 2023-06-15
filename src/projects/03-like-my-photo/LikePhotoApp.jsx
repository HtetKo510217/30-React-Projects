import React, { useState } from 'react'
import Title from '../../components/Title'
import {AiFillSmile,AiFillHeart,AiOutlineHeart,AiOutlineComment} from 'react-icons/ai'
import dogy from './img/dog.jpeg'
export default function LikePhotoApp() {
  // const [like,setLike] = useState(false);
  // const [count,setCount] = useState(0);
  // const toggleLike = () => {
  //  if(!like) {
  //   setLike(true);
  //   setCount(count + 1);
  //  }else {
  //   setLike(false);
  //   setCount(count - 1);
  //  }
  // }
  const [state, setState] = useState({
    like: false,
    count: 0,
  });
  
  const toggleLike = () => {
    setState(prevState => ({
      like: !prevState.like,
      count: prevState.like ? prevState.count - 1 : prevState.count + 1,
    }));
  };
  
  const { like, count } = state;
  
  return (
    <div className='container text-center'>
        <Title text="Like Photo App" />
        <Title classes={"subTitle"} text={`Likes ${count}`} />
        <div className='card card-dark m-auto' style={{width:300,cursor:'pointer'}}>
          <div className='card-header fs-xl'>
            <AiFillSmile className='mr-2' />
            <small>DogyDog</small>
          </div>
          <img src={dogy} alt='img' style={{height: 'fit-content'}} />
          <div className='card-footer fs-xl d-flex ' style={{justifyContent:'space-between'}}>
            <AiOutlineComment />
            {like ? (<AiFillHeart className='text-danger' onClick={toggleLike} />): (<AiOutlineHeart onClick={toggleLike} />)}
          </div>
        </div>
    </div>
  )
}
