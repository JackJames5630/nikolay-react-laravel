import React, { useState, useEffect } from 'react'
import { SectionWrapper } from "../../hoc"
import Title from '../../components/title/Title'
import { messageData } from '../../constants'
import { styles } from '../../styles'
import DarkButton from '../../components/button/DarkButton'
import MessageModal from '../../components/modal/MessageModal'
import { getEvents } from '../../actions/eventAction'



const Events = () => {
  
  const [events, setEvents] = useState([]);
  const [flag, setFlag] = useState(false)
  
  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
    })
  }, [flag])

  return (
    <div className='py-10'>
      <Title darkText1='Lorem ipsum dolor' purpleText='lorem ipsum dolor sit amet, consectetuer' />
      <div>
        {
          events.map((item, index) => {
            return (
              <div key={index} className={styles.cardMessageStyle}>
                <div className='w-[40%] p-3 text-[16px] font-bold'>{item.title}</div>
                <div className='w-[40%] p-3'>{item.description}</div>
                <div className='w-[20%] p-3'><b>{item.createdAt}</b><br /> {item.location}</div>
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-center py-10'>
        <MessageModal flag={flag} setFlag={setFlag} />
      </div>
    </div>
  )
}

export default SectionWrapper(Events, "events")