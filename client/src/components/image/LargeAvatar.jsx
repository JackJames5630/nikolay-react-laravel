import React from 'react'
import { profile } from '../../assets';


const LargeAvatar = ({ url }) => {

  const handleClick = () => {

  }
  const image = url ? url : profile

  return (
    <div className="flex justify-center pt-5" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }} className="rounded-[50%] lg:h-[250px] lg:w-[250px] md:h-[200px] md:w-[200px] xm:h-auto " ></div>
    </div>
  )
}

export default LargeAvatar