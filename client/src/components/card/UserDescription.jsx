import React from 'react'

const SmallCard = (props) => {

  const { title, content } = props

  return (
    <>
      <h3>{title}</h3>
      {
        content.map((text, index) => (
          <h6 key={index}>{text}</h6>
        ))
      }
    </>
  )
}

export default SmallCard