import React from 'react'
import {StyleButton} from '../../Button'

import "./VideoCard.css"
import { Link } from 'react-router-dom'


function VideoCard({nombre, categoria, img, linkYT,colorTitulo}) {
  return (
    
      
      <div className='cardTop' style={{borderColor: colorTitulo}}>
          
          <img  className="imgCard" src={img} alt={nombre} />
          <div className='cardBottom'>
              
              <h3>{nombre}</h3>
              
              <StyleButton to={linkYT} target="_blank">Ver Video</StyleButton>
          </div>
      </div>
    
        
    
   
  )
}

export default VideoCard