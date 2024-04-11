import React from 'react'

import Title from '../../../components/title/Title'
import SendReview from './SendReview'
import CustomerComment from './CustomerComment'

const ReviewHistory = () => {

  return (
    <div className='bg-info p-10'>
      <Title darkText1='Lorem ipsum dolor sit amet' purpleText='Lorem ipsum dolor sit' />
      <SendReview />
      <CustomerComment />
    </div>
  )
}

export default ReviewHistory