import React ,{useState,useEffect}from 'react'
import Box from '@mui/material/Box';
import CampoTexto from '../components/CampoTexto';
import Container from '@mui/material/Container';
import { ButtomForm, StyleButton } from '../components/Button';
import { styled } from 'styled-components';
import SeleccionarCategoria from '../components/SeleccionarCategoria';
import {AlertTitle,  TextareaAutosize } from '@mui/material';
import { ValidarTitulo, ValidarTextArea, ValidarNumber,ValidarSelect } from '../components/Validaciones/Validacion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { obtenerDatos,enviarDatos } from '../Api/api';


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0; 
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  
  
    


`
export const TituloForm = styled.h3`
    margin: 2rem;
    font-size: 35px;
    text-align: center;
   

    color: var(--color-secundario);
    border-bottom: 2px solid var(--color-tercero);
    display: inline-block;
   


`

export const ButtonFormContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;

  @media screen and (max-width: 552px){
    width: 100%;
    justify-content: space-between; 
  }
`
export const ButtonNuevaCatContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  
  @media screen and (max-width: 552px){
    width: 100%;
    justify-content: center; 
  }
 
`
function NuevoVideo() {

    const [nombre, setNombre] = useState({value: "", valid: null})
    const [categoria,setCategoria] = useState({value: "", valid: null})
    const [img, setImg] = useState({value: "", valid: null})
    const [linkYT, setLinkYT] = useState({value: "", valid: null})
    
    const [textArea, setTextArea] = useState({value: "", valid: null})
    const [number, setNumber] = useState({value: "", valid: null})
    const [open,setOpen] = useState(false)
const navigate = useNavigate()





const manejarLimpiar = () => {
 
nombre.value = ""
categoria.value = ""
img.value = ""
linkYT.value = ""
textArea.value = ""
number.value = ""


nombre.valid = null
categoria.valid = null
img.valid = null
linkYT.valid = null
textArea.valid = null
number.valid = null




 

}


const [datosMovie,setDatosMovie] = useState([])

useEffect(() => {
  getDatos()
},[])


const getDatos = async () => {
  const res = await obtenerDatos('/datosMovie')
  setDatosMovie(res.data)
  
}

  const datosEnvio = {
    nombre: nombre.value,
    categoria: categoria.value,
    img: img.value,
    linkYT: linkYT.value
  }

  const addCategoria = async () =>{
 

    await  enviarDatos('/datosMovie',datosEnvio);
    getDatos()
    manejarLimpiar()
  }






  return (
    
     <Container >
      <div style={{textAlign: "center"}}>
        <TituloForm >Nuevo video</TituloForm>
      </div>
        
      <Box component="form" onSubmit={(e) => {
       
       e.preventDefault()
       if(nombre.valid && linkYT.valid && img.valid && categoria.valid && textArea.valid && number.valid) {
        
        
        addCategoria()
    
      }else {
        setOpen(true)
      }
   }}>

        <CampoTexto titulo="Título"
             error={nombre.valid == false}
             helperText={nombre.valid == false && "Ingresa un titulo de video valido"}
             value={nombre.value}
   
             onChange={(input) => {
               const nombreValue = input.target.value
               const valido = ValidarTitulo(nombreValue)
               setNombre({value : nombreValue, valid: valido})
               
             }}
        
       />

        <CampoTexto titulo="Link del video"

        error={linkYT.valid == false}
        helperText={linkYT.valid == false && "Ingresa un Link de video valido"}
        value={linkYT.value}

        onChange={(input) => {
          const linkYTValue = input.target.value
          const valido = ValidarTitulo(linkYTValue)
          setLinkYT({value : linkYTValue, valid: valido})

 }}

        
        />
        <CampoTexto titulo="Link imagen del video"
        
        
        error={img.valid == false}
        helperText={img.valid == false && "Ingresa un Link de imagen valido"}
        value={img.value}

        onChange={(input) => {
          const imgValue = input.target.value
          const valido = ValidarTitulo(imgValue)
          setImg({value : imgValue, valid: valido})

 }}
        
        />
        
        <SeleccionarCategoria 
        error={categoria.valid == false}
        helperText={categoria.valid == false && "Ingresa una categoria valida"}
        value={categoria.value}

        onChange={(input) => {
          const categoriaValue = input.target.value
          const valido = ValidarSelect(categoriaValue)
          setCategoria({value : categoriaValue, valid: valido})
          
        }}

        />



        <CampoTexto titulo="Descripción"
         value={textArea.value}
         error={textArea.valid == false}
         helperText={textArea.valid == false && "Ingresa una descripción valida"}
         onChange={(input) => {
         const textAreaValue = input.target.value
         const valido = ValidarTextArea(textAreaValue)
         setTextArea({value : textAreaValue, valid: valido})
         
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
        }}/>

        <CampoTexto titulo="Código de seguridad" 
        
         type="number"
            value={number.value}
            error={number.valid == false}
            helperText={number.valid == false && "Ingresa un codigo valido"}
            onChange={(input) => {
            const numberValue = input.target.value
            const valido = ValidarNumber(numberValue)
            setNumber({value : numberValue, valid: valido})
            
      }}
        />


        <ButtonContainer>
          <ButtonFormContainer>
            <ButtomForm type='submit' >Guardar</ButtomForm>
            <Snackbar open={open} autoHideDuration={2000}  onClose={() => setOpen(false)}>
              <Alert severity='error' sx={{
                background: "var(--color-principal)",
                border: "2px solid var(--color-tercero)",
                color: "var(--color-secundario)",
                fontFamily: "var(--tipo-letra-secundario)",
                fontSize: "14px", 
                fontWeight: "bold", 
                
              }}>
                <AlertTitle>Error</AlertTitle>
                  Debe completar los campos
              </Alert>
            </Snackbar>


            <StyleButton type='button ' onClick={manejarLimpiar}>Limpiar</StyleButton>
          </ButtonFormContainer>
            <ButtonNuevaCatContainer>
              <StyleButton to="/NuevaCategoria">Nueva Categoría</StyleButton>
            </ButtonNuevaCatContainer>
            
        </ButtonContainer>
        
       
      
        
      </Box>
    </Container>
     
     
    
   
  )
}

export default NuevoVideo