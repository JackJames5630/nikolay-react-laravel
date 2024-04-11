import React from 'react'
import { styles } from '../../styles'


const LinkUrlButton = (props) => {

  const { title, index, icon } = props

  return (
    <button className={styles.urlBtn}>
      {title}&nbsp;{icon}
    </button>
  )
}

export default LinkUrlButton