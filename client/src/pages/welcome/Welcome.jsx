import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import ProfileCard from "./ProfileCard";
import LargeAvatar from "../../components/image/LargeAvatar";
import LinkUrls from "./LinkUrls";
import CreatePublication from "../myPublication/CreatePublication";
import { getProfile } from "../../actions/profileAction";

const Welcome = () => {

  const [profile, setProfile] = useState({})
  const [url, setUrl] = useState('')
  const [id, setId] = useState()
  useEffect(() => {
    setId(sessionStorage.getItem('proId'))
    getProfile(id).then((data) => {
      setProfile(data);
      setUrl(data?.file);
    })
  }, [id])

  return (
    <div component="section" className='xl:pt-40 flex flex-wrap sm:py-30 gap-5 flex justify-center' >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='md:w-[30%] sm:w-[100%]'
      >
        <LargeAvatar url={url} />
        <LinkUrls />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=' md:w-[65%] sm:w-[100%]'
      >
        <ProfileCard profile={profile} setId={setId} />
      </motion.div>
      <CreatePublication />
    </div>
  );
};

export default SectionWrapper(Welcome, "welcome");
