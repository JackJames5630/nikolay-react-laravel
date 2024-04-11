import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import LinkUrlButton from "../../../components/button/LinkUrlButton";
import { styles } from "../../../styles";

const ReviewCard = (props) => {

  const { content, imgUrl, date } = props

  return (
    <div className='bg-white'>
      <FaPaperPlane />
      <p className={styles.text6}>
        {content}
      </p>
      <div className="flex justify-between">
        <LinkUrlButton title='читать телеграм' icon={<GoArrowUpRight />} />
        <h6 style={styles.telDate}>{date}</h6>
      </div>
    </div>
  )
}

export default ReviewCard;