import React from 'react'
import { motion } from "framer-motion"

import { styles } from '../../styles'
import { textVariant } from "../../utils/motion"
import SmallWhiteButton from '../button/SmallWhiteButton'

const Title = (props) => {

  const { darkText1, purpleText, darkText2 } = props

  return (
    <motion.div variants={textVariant()} className="flex flex-wrap">
      <div className='md:w-[30%] sm:w-[100%] p-5'>
        <SmallWhiteButton title='Lorem ipsum dolor' />
      </div>
      <h3 className={`${styles.Title3} md:w-[70%] sm:w-[100%]`}>
        {darkText1} <span style={{ color: 'var(--purple)' }}>{purpleText}</span> {darkText2}
      </h3>
    </motion.div>
  )
}

export default Title