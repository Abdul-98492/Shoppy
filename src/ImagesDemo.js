import React from 'react'
import dress from './images/Dress.jpg'
import black from './images/Black.jpg'
import stand from './images/Stand.jpg'

import white from './images/White.jpg'
import "./ImagesDemo.css";

function ImagesDemo() {
  return (
     
    <div>

        <div className='new'>
            <h2>New Arrival Mens Collections</h2>
        </div>
    
    <div className='new-arrival'>
        <div className='new-arrival-container'>
           <img src={dress} height='300' width='230' alt='pic'/>
           <button>Shop Now <i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className='new-arrival-container'>
           <img src={stand} height='300' width='230' alt='pic'/>
           <button>Shop Now <i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className='new-arrival-container'>
           <img src={black} height='300' width='230' alt='pic'/>
           <button>Shop Now <i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className='new-arrival-container'>
           <img src={white} height='300' width='230' alt='pic'/>
           <button>Shop Now <i className='fa-solid fa-arrow-right'></i></button>
        </div>
         
    </div>
    </div>
   
    
    
  )
}

export default ImagesDemo
