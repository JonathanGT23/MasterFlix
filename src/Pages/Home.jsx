import React,{useState,useEffect} from 'react'
import Banner from './../components/Banner';
import Carrusel from '../components/Carrusel/Carrusel';

import { obtenerDatos } from '../Api/api';





function Home() {

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

  return (
    <>
          
          <Banner/>
         
          <Carrusel />
       
        
    </>
  )
}

export default Home