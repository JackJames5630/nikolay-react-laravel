import React from 'react'
import { styles } from '../../styles'


const PurpleButton = (props) => {

  const { index, title, icon } = props

  return (
    <button key={index} className={`${styles.purpleButton} flex items-center`}>
      {title}&nbsp;{icon}
    </button>
  )

}

export default PurpleButton