import React from 'react'
import { topicTitles } from '../../constants'
import WhiteButton from '../../components/button/WhiteButton'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const TopicSkillButtons = (props) => {

  const { oneProfile } = props
  const topic = oneProfile&&JSON.stringify(oneProfile.topic)
  const topics = topic&&JSON.parse(topic)[0];
  const array = topics&&topics.split(',');

  return (
    <ul className="flex flex-wrap">
      {
        array&&array.map((title, index) => {
          return (
            <li key={index} className={`p-1`} value={title}>
              <WhiteButton title={title}  />
            </li>
          )
        })
      }
    </ul>
  )
}

export default TopicSkillButtons