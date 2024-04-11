import React from 'react'
import { customerCardData } from '../../../constants'
import CustomerImageCard from './CustomerImageCard'
import CustomerVideoCard from './CustomerVideoCard'

const CustomerData = ({customers}) => {
  return (
    <div className='flex justify-around flex-wrap py-10' style={{backgroundColor:'white', minHeight:'450px'}} >
      {
            customers && customers.map((item,index)=>{
              return(
                item && item.type === 'text' ?
                  (<CustomerImageCard key={index} index={index} {...item} />) :
                  (<CustomerVideoCard key ={index} index={index} {...item} />)
              )
            })
      }
      </div>
  )
}

export default CustomerData