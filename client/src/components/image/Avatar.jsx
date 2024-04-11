import React, { useState } from 'react'

const Avatar = (props) => {

  const { url, title } = props
  const [click, setClick] = useState(false)

  return (
    <div className="text-center" onClick={() => { setClick(true) }}>
      <div className='lg:w-[100px] lg:h-[100px] sm:w-[80px] sm:h-[80px] p-[3px] rounded-[50%] border cursor-pointer' style={{ borderColor: 'var(--purple)', borderWidth: '2px' }} >
        <div style={{ backgroundImage: `url(${url})` }} className='w-full, h-full rounded-[50%]' > </div>
      </div>
      <div className='pt-3'>{title}</div>
    </div>
  )
}

export default Avatar