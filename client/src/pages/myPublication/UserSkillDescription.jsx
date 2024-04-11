import React from 'react'
import { userDescriptioDatas } from '../../constants'
import SmallCard from '../../components/card/UserDescription'


const UserSkillDescription = () => {


  return (
    <div className="flex flex-wrap gap-3 py-3">
      {
        userDescriptioDatas.map((item, index) => {
          return (
            <span key={index}>
              <SmallCard
                title={item.title}
                content={item.content}
              />
            </span>
          )
        })
      }
    </div>
  )

}

export default UserSkillDescription