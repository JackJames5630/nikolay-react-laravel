import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import { slideIn } from "../../utils/motion"
import man1 from "../../assets/avatar/man1.jpg"
import UserSkillDescription from "./UserSkillDescription"
import { GoArrowUpRight } from "react-icons/go";
import UserDescriptionAvatar from './UserDescriptionAvatar';
import TopicSkillButtons from '../welcome/TopicSkillButtons';
import DarkButton from '../../components/button/DarkButton';
import { getProfiles } from '../../actions/profileAction'


const UserDescriptionTitle = () => (
  <h2>
    <span style={{ color: 'var(--purple)' }}>Lorem Ipsum </span> Dolor Amet
  </h2>
)


const UserDescriptionData = () => {

  const [profile, setProfile] = useState([])
  const [oneProfile, setOneProfile] = useState({})

  const url = oneProfile.file ? oneProfile.file : man1

  useEffect(() => {
    getProfiles().then((data) => {
      setProfile(data)
    })
  }, [])

  return (
    <div className="pt-10 flex flex-wrap gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='md:w-[35%] sm:w-[100%]'
      >
        <div className="flex justify-center ">
          <img src={url} className=" sm:w-[80%] max-w[400px]" />
        </div>
      </motion.div>

      <div className="md:w-[60%] sm:w-[100%] flex flex-col justify-between">

        <UserDescriptionAvatar
          profile={profile}
          setOneProfile={setOneProfile}
        />
        <div>
          <UserDescriptionTitle />
          <UserSkillDescription />
          <TopicSkillButtons
            oneProfile={oneProfile}
          />
          <DarkButton
            title='Donec vitae sapien ut liber'
            icon={<GoArrowUpRight />}
          />
        </div>
      </div>

    </div>
  )
}

export default UserDescriptionData