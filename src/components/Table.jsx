import React,{useEffect, useState} from 'react'

//import { useFetch } from '../useFetch'
import { ButtomForm } from './Button';
import { styled } from 'styled-components';
import {  eliminarDatos,obtenerDatos} from '../Api/api';





const TableStyle = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-family: var(--tipo-letra-secundario);
    font-weight: 400;
    font-size: 1rem;
    width: 100%;
    
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    tbody tr:last-of-type {
    border-bottom: 2px solid var(--color-tercero);
    background-color: var(--color-principal);
}

    & thead tr  {
        text-align: left;
        font-weight: bold;
        background-color: var(--color-tercero);
        color: var(--color-principal);
        font-size: 1.15rem;
    }

    & th, & td{
        padding: 12px 15px;
    }

    @media screen and (max-width: 500px){
        
        display: none;
        
    }



`
const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-wrap: wrap;
    
`
 const BotonesTable = styled(ButtomForm)`
    padding: 12px 15px;


    color: ${({$primary}) => $primary ? "#3B82F6" : "#EA3F45"};
   

  
   outline: 2px solid ${({$primary}) => $primary ? "#3B82F6" : "#EA3F45"};
    background-color: var(--color-principal);

    &:hover {
        color: var(--color-secundario);
        outline: 2px solid ${({$primary}) => $primary ? "#3B82F6" : "#EA3F45"};
        box-shadow: 2px 3px 10px -2px ${({$primary}) => $primary ? "#3B82F6" : "#EA3F45"};
    }

    &::before{
       background-color: ${({$primary}) => $primary ? "#3B82F6" : "#EA3F45"};
    }
`


function Table({selectUser,datosCategoria,setDatosCategoria}) {

    //const [datosCategoria,setDatosCategoria] = useState([])

    useEffect(()=> {
       // obtenerDatos("/datosCategoria", setDatosCategoria)
       getDatos()
 },[])

 
 const getDatos = async () => {
    const res = await obtenerDatos('/datosCategoria')
    
    setDatosCategoria(res.data)
    
}
   
 const deleteData = async (url) => {
    await eliminarDatos(url)

    getDatos()
     
  }




  return (
    <TableContainer>

    
        <TableStyle>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
            { 
                    datosCategoria.map((data) => {
                        
                      
                   
                        
                        return (
                            <tr key={data.id} datos={data.id}>
                                <td>{data.titulo}</td>
                                <td>{data.descripcion}</td>
                                <td><BotonesTable $primary onClick={() => selectUser(data.id,data.titulo,data.descripcion,data.colorCategoria)}>Editar</BotonesTable></td>
                                <td><BotonesTable onClick={() => deleteData(`/datosCategoria/${data.id}`,setDatosCategoria)}>Remover</BotonesTable></td>
                            </tr>
                            
                        )
                    })
                }
            </tbody>
        </TableStyle>
        </TableContainer>
  )
}

export default Table