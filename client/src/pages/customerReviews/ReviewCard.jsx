import React from "react";
import styles from "./telegramStyled";
import { FaPaperPlane } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const ReviewCard = () => {

  return (
    <div style={styles.container}>
      <FaPaperPlane style={styles.telIcon} />
      <p style={styles.telText}>Lorem ipsum dolor sit amet,<br />
        consectetuer adipiscing elit.<br />
        Aenean commodo ligula eget
      </p>
      <div style={styles.telConDown}>

        <div style={styles.telLinkIcon}>
          <a href="/" style={styles.telLink}>читать телеграм </a>
          <GoArrowUpRight />
        </div>
        <h6 style={styles.telDate}>22.02.2024</h6>
      </div>
    </div>
  )
}

export default ReviewCard;