import React from 'react'
import { close, menu } from '../../assets'


const MenuImg = (props) => {

  const { toggle, setToggle } = props

  return (
    <img
      src={toggle ? close : menu}
      alt='menu'
      className='w-[26px] h-[26px] object-contain'
      onClick={() => setToggle(!toggle)}
    />
  )
}

export default MenuImg