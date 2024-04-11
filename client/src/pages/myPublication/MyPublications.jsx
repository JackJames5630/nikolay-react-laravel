import React from "react"

import { SectionWrapper } from "../../hoc"
import ViewPublication from "./ViewPublication"
import Category from "../category/Category"
import SendCard from "../sendMail/SendCard"

const MyPublications = () => {
  return (
    <>
      <ViewPublication />
      <Category />
      <SendCard />
    </>
  )
}

export default SectionWrapper(MyPublications, "myPublications")