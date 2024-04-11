import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from '@mui/material'

import { projects } from "../../constants"
import { fadeIn } from "../../utils/motion"
import Title from "../../components/title/Title"
import CategoryHeader from "./CategoryHeader"
import CategoryBody from "./CategoryBody"
import CategoryFooter from "./CategoryFooter"
import CategoryModal from "../../components/modal/CategoryModal"
import { getPublication } from "../../actions/publicationAction"

const CategoryCard = (props) => {
  
  const { index, platform, title, description, view, like, favourite, _id, date, setFlag, flag } = props
  
  let url = props.file
  
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='p-5 rounded-2xl lg:w-[48%] sm:w-[100%]'
    >
      <Card>
        <CardContent>
          <CategoryHeader date={date} platform={platform} />
          <CategoryBody title={title} content={description} imgUrl={url} />
          <CategoryFooter platform={platform} view={view} like={like} favourite={favourite} idPub={_id} setFlag={setFlag} flag={flag} />
        </CardContent>
      </Card>
    </motion.div >
  )
}

const Category = () => {

  const [publications, setPublications] = useState([])
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getPublication().then((data) => {
      setPublications(data)
    })
  }, [flag])
  
  return (
    <>
      <Title
        darkText1='Lorem'
        purpleText='ipsum dolor sit amet'
        darkText2='consectetuer'
      />

      <div className='mt-20 flex flex-wrap justify-between gap-5'>
        {publications.map((project, index) => (
          <CategoryCard key={index} index={index} {...project} flag={flag} setFlag={setFlag} />
        ))}
      </div>

      <div className="flex justify-center p-20">
        <CategoryModal flag={flag} setFlag={setFlag} />
      </div>
    </>
  )
}

export default Category
