import React from "react"
import Avatar from '@mui/material/Avatar'

import { styles } from '../../../styles'
import { profile } from '../../../assets'

const AvatarData = () => {

  return (
    <>
      <Avatar alt="Remy Sharp" src={profile} sx={{ width: 100, height: 100 }} />
      <div className='py-3'>
        <div className={styles.text6}>Wacilli Petrob</div>
        <div className={styles.text6}>Channel</div>
        <div className={styles.text6}>Subscribe</div>
      </div>
    </>
  )
}

export default AvatarData