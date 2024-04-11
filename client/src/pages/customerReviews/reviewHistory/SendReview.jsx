import React from 'react'

import PurpleButton from '../../../components/button/PurpleButton'
import { GoArrowUpRight } from 'react-icons/go'
import AvatarData from './AvatarData'


const SendReview = () => {

  return (
    <div className="flex flex-wrap py-10">
      <div className='md:w-[30%] sm:w-[100%] flex gap-5 '>
        <AvatarData />
      </div>
      <div className='md:w-[70%] sm:w-[100%] p-5 '>
        <PurpleButton title='Lorem ipsum' icon={<GoArrowUpRight />} />
      </div>
    </div>
  )
}

export default SendReview