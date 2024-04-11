import React, { useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { VisibilityOutlined, Favorite, FavoriteBorderOutlined, MarkChatUnreadOutlined, BookmarkBorderOutlined } from '@mui/icons-material'
import PurpleButton from '../../components/button/PurpleButton'
import { likePublication, unlikePublication, viewPublication, favouritesPublication } from '../../actions/publicationAction'

const CategoryFooter = (props) => {

  const [key, setKey]= useState(false)
  const { platform, view, favourite, like, idPub, flag, setFlag } = props

  const handleLike = () => {
    setKey(!key)
    key ? unlikePublication(idPub) : likePublication(idPub);
    setFlag(!flag);
  }

  const handleView = () => {
    viewPublication(idPub)
    setFlag(!flag);
  }

  const handleFavourite = () => {
    favouritesPublication(idPub)
    setFlag(!flag);
  }

  return (
    <div className='flex justify-between pt-5'>
      <div className='flex items-center'>
        <PurpleButton title={`Читать на ${platform}`} icon={<GoArrowUpRight />} />
      </div>
      <div className='flex items-center gap-2 '>
        <button style={{ color: 'var(--dark-gray)' }} onClick={handleView} ><VisibilityOutlined /> {view}</button>
        <button style={{ color: 'var(--dark-gray)' }} onClick={handleLike}>
          {
            !key ? <FavoriteBorderOutlined /> : <Favorite />
          }
          {like}
        </button>
        <button style={{ color: 'var(--dark-gray)' }}><MarkChatUnreadOutlined /> 0</button>
        <button style={{ color: 'var(--dark-gray)' }} onClick={handleFavourite}><BookmarkBorderOutlined /> {favourite}</button>
      </div>
    </div>
  )
}

export default CategoryFooter