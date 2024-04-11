import React from 'react'

const CategoryHeader = (props) => {

  const { date, platform } = props

  return (

    <div className="text-dark flex justify-between items-center">
      <h6 style={{ color: 'var(--dark-gray)' }}>{date}</h6>
      {platform}
    </div>

  )
}

export default CategoryHeader