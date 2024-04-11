import React from 'react'
import { motion } from "framer-motion"
import Avatar from '../../components/image/Avatar'

import { publicationUsers } from '../../constants'
import { fadeIn } from "../../utils/motion"

const UserDescriptionAvatar = ({ profile, setOneProfile }) => {

  const handleSelect = (data) => {
    setOneProfile(data)
  }


  return (
    <div className="flex gap-5" style={{ overflowX: 'scroll' }}>
      {
        profile.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <div onClick={() => handleSelect(item)}>
                <Avatar
                  url={item.file}
                  title={item.name}
                />
              </div>
            </motion.div>
          )
        })
      }
    </div>
  )
}

export default UserDescriptionAvatar