import React, { useState } from "react"
import TextField from '@mui/material/TextField'

import SocialCardStyles from "./socialCardStyle"
import SocialMap from "./socialMap"
import { styles } from "../../styles"
import DarkButton from "../../components/button/DarkButton"
import { sendEmail } from "../../actions/sendEmailAction"


const SendCard = () => {

  const [data,setData]= useState({})

  const handleChange = (event, name) => {
    let values = event.target.value
    setData({ ...data, [name]: values })
  }

  const handleClick = () => {
    // console.log("email::",data)
    var email=sessionStorage.getItem('userEmail')
    setData({ ...data, "fromEmail": email })
    sendEmail(data).then((data) => {
      alert(JSON.stringify(data))
    })
  }

  return (
    <div className="bg-white p-10 " >
      <div>
        <h1 className={`${styles.Title6}`}>The More Important</h1>
        <h4>Physiological respiration involves</h4>
      </div>
      <div className="flex flex-wrap justify-between pt-20">
        <div className="flex justify-center lg:w-[50%] sm:w-[100%] gap-3 py-5">
          <TextField id="outlined-basic" label="Bаш Email" variant="outlined" type="text" name="toEmail" onChange={(event)=>handleChange(event,'toEmail')} />
          <TextField id="outlined-basic" label="Bаш Contents" variant="outlined" type="text" name="contents" onChange={(event)=>handleChange(event,'contents')} />
          <DarkButton title='подписаться' handleClick={handleClick} />
        </div>
        <div className="flex justify-center lg:w-[50%] sm:w-[100%] gap-3 py-5">
          {
            SocialMap.map((item, index) => {
              return (
                <div key={index} style={SocialCardStyles.SocialObject}>{item.icons}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SendCard