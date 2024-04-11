import React from 'react'
import { styles } from '../../styles'


const WhiteButton = (props) => {

  const { index, title, icon } = props

  return (
    <button key={index} className={`${styles.whiteButton} flex items-center`}>
      {title}&nbsp;{icon}
    </button>
  )

}

export default WhiteButton