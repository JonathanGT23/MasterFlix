import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import CampoTexto from '../components/CampoTexto';
import Container from '@mui/material/Container';
import { TituloForm,ButtonContainer } from './NuevoVideo';

import { ButtomForm, StyleButton } from '../components/Button';
import { styled } from 'styled-components';
import Table from '../components/Table';

import { AlertTitle, TextareaAutosize } from '@mui/material';
import {obtenerDatos,enviarDatos,datosActualizar } from '../Api/api';

import Snackbar from '@mui/material/Snackbar';

import Alert from '@mui/material/Alert';




const BotonContainer = styled(ButtonContainer)`
  justify-content: flex-start;
`







function NuevaCategoría() {

  
  const [titulo, setTitulo] = useState("")
  
  const [colorCategoria, setColorCategoria] = useState("#000000")
  const [descripcion, setDescripcion] = useState("")
  const [number, setNumber] = useState("")
  const [idActualizar, setIdActualizar] = useState("")
  

  const [datosCategoria,setDatosCategoria] = useState([])
  

useEffect(() => {
 
  //obtenerDatos('/datosCategoria',setDatosCategoria)
  //obtenerDatos('/datosMovie',setVideos)
  getDatos()
},[])


const getDatos = async () => {
  const res = await obtenerDatos('/datosCategoria')
  setDatosCategoria(res.data)
  
}

 const selectUser =  (id,titulo,descripcion,colorCategoria) => {
 
   setIdActualizar(id)
    
    setTitulo(titulo)
   setDescripcion(descripcion)
   setColorCategoria(colorCategoria)
}



const manejarLimpiar = () => {
  
  setTitulo("")
  setDescripcion("")
  setColorCategoria("#000000")
  setNumber("")
  setIdActualizar("")

}

const [errors , setErrors] = useState({
  titulo: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
  }
})

const [errorsDos , setErrorsDos] = useState({
  descripcion: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
  }
})

const [errorsTres , setErrorsTres] = useState({
  colorCategoria: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
  }
})

const [errorsCuatro , setErrorsCuatro] = useState({
  number: {
      error: false,
      message: "Deben ser al menos 3 caracteres",
  }
})



function validarNombre(nombre){
  if(nombre.length >= 3) {
      return { titulo: {error: false, message: ""} }
  }else{
      return { titulo: {error: true, message: "Deben ser al menos 3 caracteres"} }
  }
}

function validarDescripcion(descripcion){
  if(descripcion.length >= 3) {
      return { descripcion: {error: false, message: ""} }
  }else{
      return { descripcion: {error: true, message: "Deben ser al menos 3 caracteres"} }
  }
}

function validarColor(color){
  if(color.length <= 7) {
      return { colorCategoria: {error: false, message: ""} }
  }else{
      return { colorCategoria: {error: true, message: "Deben ser al menos un Color"} }
  }
}

function validarNumber(number){
  if(number === "1847") {
      return { number: {error: false, message: ""} }
   }else{
       return { number: {error: true, message: "Codigo incorrecto"} }
  }
 }

const [open,setOpen] = useState(false)



const updateCategoria = async () =>{
  const url = `/datosCategoria/${datosAEnviar.id}`

  const datosAActualizar = {
    id: datosAEnviar.id,
    titulo,
    descripcion,
    colorCategoria,
}


  await  datosActualizar(url,datosAActualizar);
  getDatos()
  manejarLimpiar()
}



const addCategoria = async () =>{
 

  await  enviarDatos('/datosCategoria',datosAEnviar);
  getDatos()
  manejarLimpiar()
}









const datosAEnviar = {
  titulo,
  descripcion,
  colorCategoria,
  id: idActualizar
}

 
 const manejarEnvio = (e) => {
  e.preventDefault()
  
 

    
  

      if("1847" === number){

        if(datosCategoria.some((categoria) => categoria.id === datosAEnviar.id))
  {
       
    updateCategoria()
      
     
  //    setVideos
     // 
     // manejarLimpiar()
      
  } else {

    
   
    addCategoria()

   // obtenerDatos('/datosCategoria',setDatosCategoria)

    // manejarLimpiar()
  }
      }

  else {

     
      setOpen(true)

  }

  
}







  return (
    <Container>
      <div style={{textAlign: "center"}}>
        <TituloForm >Nueva categoría</TituloForm>
      </div>
      <Box component="form" onSubmit={manejarEnvio}>
      
     
      


      <CampoTexto titulo="Titulo" 
    
      value={titulo}
      
      onChange={(e) => {
          setTitulo(e.target.value)
      }}

      error={ errors.titulo.error }
      helperText={errors.titulo.error ? errors.titulo.message : ""}
      
      onBlur={(e) => {
          setErrors(
              validarNombre(e.target.value)
          )
          
      }}




      />


<CampoTexto titulo="Descripción" 
       value={descripcion}
      
       onChange={(e) => {
           setDescripcion(e.target.value)
       }}

       error={ errorsDos.descripcion.error }
       helperText={errorsDos.descripcion.error ? errorsDos.descripcion.message : ""}
       onBlur={(e) => {
           setErrorsDos(
              validarDescripcion(e.target.value)
          )
          
       }}


       multiline
       InputProps={{
         inputComponent: TextareaAutosize,
         inputProps: {
           style: {
             resize: "auto"
             , height: "80px",
               width: "100%"
             ,
             resize:"vertical"
             
           }
         }
       }}



    />

      
      <CampoTexto titulo="Color" 
          type="color"
          value={colorCategoria}
      
          onChange={(e) => {
              setColorCategoria(e.target.value)
          }}

          error={ errorsTres.colorCategoria.error }
          helperText={errorsTres.colorCategoria.error ? errorsTres.colorCategoria.message : ""}
          onBlur={(e) => {
              setErrorsTres(
                  validarColor(e.target.value)
              )
              
          }}



          />
    
    
      <CampoTexto titulo="Código de seguridad" 
            type="number"
            value={number}
      
      onChange={(e) => {
          setNumber(e.target.value)
      }}
  
      error={ errorsCuatro.number.error }
      helperText={errorsCuatro.number.error ? errorsCuatro.number.message : ""}
      onBlur={(e) => {
          setErrorsCuatro(
              validarNumber(e.target.value)
          )
          
      }}

           
           />


      <BotonContainer>
            <ButtomForm type='submit'>Guardar</ButtomForm>

            <Snackbar open={open} autoHideDuration={2000}  onClose={() => setOpen(false)} >
              <Alert severity="error" sx={{
                background: "var(--color-principal)",
                border: "2px solid var(--color-tercero)",
                color: "var(--color-secundario)",
                fontFamily: "var(--tipo-letra-secundario)",
                fontSize: "14px", 
                fontWeight: "bold", 
                
              }} >
                <AlertTitle>Error</AlertTitle>
                  Debe completar los campos
              </Alert>
            </Snackbar>



            <StyleButton type='button ' onClick={manejarLimpiar}>
                  Limpiar
            </StyleButton>
        </BotonContainer>
      </Box>



       <Table selectUser={selectUser} datosCategoria={datosCategoria} setDatosCategoria={setDatosCategoria}/> 
    </Container>
  )
}

export default NuevaCategoría