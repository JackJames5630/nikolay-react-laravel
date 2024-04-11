import React from 'react'
import { styles } from '../../styles'


const DarkButton = (props) => {

  const { index, title, icon, handleClick } = props

  return (
    <button key={index} className={`${styles.darkButton} flex items-center`} onClick={handleClick}>
      {title}&nbsp;{icon}
    </button>
  )

}

export default DarkButton