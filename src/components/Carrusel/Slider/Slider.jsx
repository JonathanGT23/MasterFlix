import React, { useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import VideoCard from '../VideoCard/VideoCard';
import 'swiper/css';
import "./Slider.css"

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {TiDelete} from "react-icons/ti"
import { styled } from 'styled-components';
import { obtenerDatos,eliminarDatos } from '../../../Api/api';



const DeleteIcon = styled(TiDelete)`
    position: absolute;
    bottom: 100%;
    right: 0;
    cursor: pointer;
    font-size: 30px;
   color: ${ props  =>   props.$colorTitulo};

    &:hover{
        color: red;
    }
`
function Slider({tituloCat,colorTitulo}) {

   
       
     
    
   

    const [categorias,setCategorias] = useState([])
    const [videos,setVideos] = useState([])
 
    useEffect(()=>{
        getDatos()
        getDatosMovies()
    },[])


    const getDatos = async () => {
        const res = await obtenerDatos('/datosCategoria')
        setCategorias(res.data)
        
      }
    
      const getDatosMovies = async () => {
        const res = await obtenerDatos('/datosMovie')
        setVideos(res.data)
        
      }

       



    const deleteData = async (url) => {
       await eliminarDatos(url)
       getDatos()
        getDatosMovies()
        
     }





  return (
    <div className='Container'>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation


        spaceBetween={50}
        slidesPerView={3}
        
        className="swiper_container"
        
        breakpoints={{
            0:{
                slidesPerView: 1,
                spaceBetween: 10,
                
            },
            450:{
                slidesPerView: 2,
                spaceBetween: 10,
                
            },
            768:{
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024:{
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1080:{
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }}
        
        >

         
                {videos.map((datos) => {
                    if (tituloCat === datos.categoria) {
                       
                         
                        
                        return (
                             <SwiperSlide className='colorVideo' key={datos.id}>
                                <DeleteIcon $colorTitulo={colorTitulo} onClick={() => deleteData(`/datosMovie/${datos.id}`,setVideos)}/>
                                <VideoCard 
                                    nombre={datos.nombre} 
                                    categoria={datos.categoria} 
                                    img={datos.img} 
                                    linkYT={datos.linkYT}
                                    colorTitulo={colorTitulo}/>
                                    
                                </SwiperSlide>
                        )
                    }
           
            })}
            
        


      </Swiper>
        
    </div>
  )
}

export default Slider