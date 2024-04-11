import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../../../utils/motion";
import { styles } from "../../../styles";
import { GoArrowUpRight } from "react-icons/go";
import LinkUrlButton from "../../../components/button/LinkUrlButton";


const CustomerVideoCard = (props) => {

  const { name,position,file,content,index,item} = props

  const cardStyle = {
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={` ${styles.cardVideoStyle} xs:w-[250px] w-full`}
      style={cardStyle}
    >
      <div
        options={{ max: 45, scale: 1, speed: 450, }}
        className='rounded-[10px] p-5 text-center'
      >
        <div className="flex justify-center">
          <div style={{ backgroundImage: `url(${file})` }} className="w-[150px] h-[150px] rounded-[50%]" > </div>
        </div>
        <div className={`${styles.text5}`}>{name}</div>
        <div className={`${styles.textDefault}`}>{position}</div>
        <div className={`${styles.textDefault}`}>{content}</div>
        <div className="flex justify-center">
          <LinkUrlButton title='опишите задачу' icon={<GoArrowUpRight />} />
        </div>
      </div>
    </motion.div>
  )
}

export default CustomerVideoCard