import React from 'react'
import { topicTitles } from '../../constants'
import ModalButton from '../../components/button/ModalButton'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const SkillButtons = (props) => {

  const { toggle, setToggle } = props

  const handleCheck = (index) => {
    // const newToggle = [...toggle]
    // newToggle[index] = !newToggle[index]
    setToggle(Object.values({ ...toggle, [index]: !toggle[index] }))
    // setToggle([...toggle])
  }

  return (
    <ul className="flex flex-wrap py-5">
      {
        topicTitles.map((title, index) => {
          return (
            <li key={index} className={`p-2`} onClick={() => handleCheck(index)} value={title}>
              <ModalButton title={title} icon={toggle && toggle[index] ? <FavoriteOutlinedIcon className='text-lightPurple' /> : (<></>)} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default SkillButtons