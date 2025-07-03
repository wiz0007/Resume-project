import React, { useState } from 'react'
import './ProfileCard.css'

const ProfileCard = (props) => {

  // const images = [props.image1,props.image2]
  
  const [current, setCurrent] = useState(0);
  const toggleImg = () => {
    setCurrent((prev) => (prev + 1) % 2);
    console.log("current value", current);
  };

  return (
    <div className='profile'>
      <h1>{props.name}</h1>
      <img src={props.image[current]} onClick={toggleImg} alt="Image" className='pflImage'/>
      <p className='user-desc'>HR Executive | Talent Acquisition | Employee Relations | Organizational Development</p>
    </div>
  )
}

export default ProfileCard
