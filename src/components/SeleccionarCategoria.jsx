import React,{useState,useEffect} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

import { obtenerDatos } from './../Api/api';





const CssFormControl = styled(FormControl)({
    backgroundColor: "var(--color-principal)",
    '& .MuiInputLabel-root':{
        color: "var(--color-secundario)"
    },
    '& .MuiSelect-root': {
        color: "var(--color-secundario)"
    }
    ,
    '& label.Mui-focused': {
        color: "var(--color-tercero)",
    }
    ,
    '& .MuiFilledInput-root': {
        color: "#dfdfdfc1",
        backgroundColor: "var(--color-principal)",
    }
    ,
    '& .MuiFilledInput-root:before': {
        borderBottomColor: "var(--color-tercero)"
    },
    '& .MuiFilledInput-root:after': {
        borderBottomColor: "var(--color-tercero)"
    }
    ,
    '& .MuiFilledInput-root:hover': {
        backgroundColor: "var(--color-principal)",
        borderBottom: "2px solid var(--color-tercero)",
    },
    '& .MuiSelect-icon':{
        color: "var(--color-tercero)",
    },
    '& .MuiSelect-select':{
        backgroundColor: "var(--color-principal)",
    }
    
  });



function SeleccionarCategoria(props) {

    const {error,value,onChange} = props

  


    const [datosCategoria, setDatosCategoria] = useState([])
    

    useEffect(() => {
        
        getDatos()
    })

    
    const getDatos = async () => {
        const res = await obtenerDatos('/datosCategoria')
         setDatosCategoria(res.data)
        
        
        
      }
    
      


   
    

  return (
    <CssFormControl variant="filled" fullWidth margin='normal' error={error} >
        <InputLabel id="demo-simple-select-label">Escoja una categoría</InputLabel>
        <Select  value={value} onChange={onChange} >







          
          {
            datosCategoria.map((datosCat) => {
                return (
                    <MenuItem value={datosCat.titulo} key={datosCat.id}>{datosCat.titulo}</MenuItem>
                )
            })
          }

          
          
        </Select>
      </CssFormControl>
  )
}

export default SeleccionarCategoria