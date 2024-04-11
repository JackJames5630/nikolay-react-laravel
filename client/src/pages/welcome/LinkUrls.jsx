import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

import { linkUrls } from '../../constants'
import { StyledLinkUrl } from '../../components/button/LinkBtn'

const LinkUrls = () => {

  return (
    <ul className={`flex flex-row justify-center pt-12 `}>
      {
        linkUrls.map((title, index) => {
          return (
            <StyledLinkUrl key={index} className="cursor-pointer text-info hover:text-dark">{title}<GoArrowUpRight /></StyledLinkUrl>
          )
        })
      }
    </ul>
  )
}

export default LinkUrls