import React from 'react'
import Avatar from '@mui/material/Avatar'

import { profile } from '../../../assets'
import { styles } from '../../../styles'
import SmallWhiteButton from '../../../components/button/SmallWhiteButton'
import PurpleButton from '../../../components/button/PurpleButton'



const CommentCard = () => {


  return (
    <div className='text-center bg-primary py-7 px-4 '>
      <SmallWhiteButton title='&nbsp;&nbsp;&nbsp;&nbsp;' />
      <div className='bg-white rounded-[15px] flex p-5 mt-3'>
        <Avatar alt="Remy Sharp" src={profile} sx={{ width: 60, height: 60 }} />
        <div className='py-3'>
          <div className={`${styles.textDefault} py-0 px-3 text-left`}>Wacilli Petrob | Channel</div>
          <div className={`${styles.textDefault} py-0 px-3 text-left`}>Subscribe</div>
        </div>
      </div>
      <div className='bg-lightPurple p-5 rounded-[3px] rounded-bl-[15px] rounded-br-[15px]'>
        <div className={`${styles.textDefault} bg-white rounded-[15px] text-left p-5`}>
          <div className={` text-lightRed font-bold`}>Wacilli Petrob | Channel</div>
          <div className={`py-1 font-bold`}>Lorem ipsum amet, consectetuer. Aenean commodo ligula eget</div>
          <div className={`py-1`}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes,
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes,
          </div>
          <hr className='border border-lightGray my-2'></hr>
        </div>
      </div>
      <div className='flex justify-center py-5'>
        <PurpleButton title='оставьть ваш' />
      </div>
    </div>
  )
}

export default CommentCard