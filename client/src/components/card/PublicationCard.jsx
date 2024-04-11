
import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { StyledCardButton, StyledCardGroup, StyledWhiteAddButton } from "../button/LinkBtn";
import { styles } from "../../styles";

const PublicationCard = ({ index, purpleText, text, title, content }) => {

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const cardStyle = {
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  }

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`${styles.cardImageStyle} bg-dark`}
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450, }}
          className='rounded-[10px] p-6'
        >
          <h5 className="text-purple">{purpleText}</h5>
          <h5 className="text-dark">{text}</h5>
          {
            isHovered ? (
              <div className="flex pt-16">
                <StyledCardGroup className={styles.urlBtn} style={{ textDecoration: 'none' }}>
                  <StyledCardButton>Lorem ipsum</StyledCardButton>
                  <StyledWhiteAddButton><div><a>+</a></div></StyledWhiteAddButton>
                </StyledCardGroup>
              </div>
            ) :
              (
                <>
                  <h3 className='text-primary font-bold pt-12 '>{title}</h3>
                  <h6 className="text-secondary">{content}</h6>
                </>
              )
          }

        </div>
      </motion.div>
    </Tilt>
  )
};

export default PublicationCard