import React from 'react'
import './Mywork.css'
import mywork_data from '../images/mywork_data'
import arrow_icon from '../../src/images/download (1).png'



const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
            <h1>My latest work</h1>
            

        </div>
        <div className='mywork-container'>
         {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt=""/>
         })}
        </div>
        <div className='mywork-showmore'>
         <p>Show More</p> 
         <img src={arrow_icon} alt=''  />

        </div>

    </div>
  )
}

export default Mywork