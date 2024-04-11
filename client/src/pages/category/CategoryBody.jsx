import React from 'react'

const CategoryBody = (props) => {

  const { title, content, imgUrl } = props

  return (
    <>
      <div className="py-5">
        <h3>{title}</h3>
        <h5 style={{ height: '50px', overflow: 'hidden' }}>{content}</h5>
      </div>
      <div className='flex justify-center'>
        <div style={{ backgroundImage: `url(${imgUrl})` }} className='h-[300px] w-full' alt={imgUrl}> </div>
      </div>
    </>
  )
}

export default CategoryBody