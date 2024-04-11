import React from "react"
import Tilt from "react-tilt"
import { motion } from "framer-motion"

import { fadeIn } from "../../../utils/motion"
import { styles } from "../../../styles"
import { GoArrowUpRight } from "react-icons/go"
import LinkUrlButton from "../../../components/button/LinkUrlButton"

const CustomerImageCard = (props) => {
  const { name,position,file,content,index,item} = props

  const cardStyle = {
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  }

  return (
    <Tilt className='xs:w-[250px] w-full' index={index}>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className={styles.cardImageStyle}
        style={cardStyle}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450, }}
          className='rounded-[10px] p-6 min-h-[280px]'
        >
          <div className={`${styles.text5}`}>{name}</div>
          <div className={`${styles.textDefault}`}>{position}</div>
          <div className={`${styles.textDefault}`}>{content}</div>
          <div className="flex justify-between px-3 pt-3">
            <img  src={file} className="w-[50px] h-[50px]" />
            <LinkUrlButton title='опишите задачу' icon={<GoArrowUpRight />} />
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default CustomerImageCard