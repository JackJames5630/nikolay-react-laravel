import React from 'react'
import CommentCard from './CommentCard'
import ReviewCard from './ReviewCard'
import { reviewsCardData } from '../../../constants'
import { styles } from '../../../styles'


const CustomerComment = () => {


  return (
    <div className="flex flex-wrap">
      <div className='md:w-[40%] sm:w-[100%] pt-2'>
        <CommentCard />
      </div>
      <div className='md:w-[60%] sm:w-[100%] px-5 flex flex-wrap '>
        {
          reviewsCardData.map((item, index) => {
            return (
              <div key={index} className={styles.cardReviewStyle}>
                <ReviewCard {...item} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CustomerComment