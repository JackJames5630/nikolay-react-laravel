import React from 'react'
import { styles } from '../../styles'


const ModalButton = (props) => {

  const { index, title, icon } = props

  return (
    <button key={index} className={`${styles.modalButton} flex items-center`}>
      {title}&nbsp;{icon}
    </button>
  )

}

export default ModalButton