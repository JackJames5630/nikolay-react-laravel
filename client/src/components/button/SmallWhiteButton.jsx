import React from 'react'
import { styles } from '../../styles'


const SmallWhiteButton = (props) => {

  const { index, title, icon } = props

  return (
    <button key={index} className={styles.smallWhiteButton}>
      {title}&nbsp;{icon}
    </button>
  )

}

export default SmallWhiteButton