import React,{useState,useEffect} from 'react'
import Slider from './Slider/Slider'


import { styled } from 'styled-components'
import { obtenerDatos } from '../../Api/api'




const CarruselStyle = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
    
`

const TituloCat = styled.span`
    font-size: 30px;
    padding: 5px 18px;
    color: var(--color-principal);
    margin-left: 2rem;
    margin-top: 25px;

    &:hover{
      color: var(--color-secundario);
    }
   
    
    
`

const DescripcionCat = styled.span`
    font-size: 18px;
    
    color: var(--color-secundario);
    margin-left: 2rem;
    margin-top: 25px;
    padding-bottom: 5px;
    border-bottom: 2px solid;
    margin-bottom: 30px;
`

const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  
`

function Carrusel() {






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
    <CarruselStyle>

    {categorias.map((datosCat) => {
       
           
          if (videos.some( video => video.categoria === datosCat.titulo)){
           
             return (
          <ContainerData key={datosCat.id} > 
                <TituloCat style={{backgroundColor: datosCat.colorCategoria}} >{datosCat.titulo}</TituloCat>
                <DescripcionCat style={{borderBottomColor: datosCat.colorCategoria}}>{datosCat.descripcion}</DescripcionCat>
                <Slider tituloCat={datosCat.titulo} colorTitulo={datosCat.colorCategoria}/>
          </ContainerData>
          )
          }
         
    })}
        
      
    </CarruselStyle>
  )
}

export default Carrusel