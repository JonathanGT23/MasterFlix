import React from 'react'
import { styled } from 'styled-components'
import { StyleButton } from '../components/Button'

const Container = styled.div`
    width: 100%;
   margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;


    .sad{
        height: 300px;
    }
    .mike{
        height: 300px;
    }





    h3{
        font-size: 2.8rem;
        
    }
    span{
        color: var(--color-tercero);
    }


    @keyframes changeImage {
            0% {
                background-image: url('/error404.png' );
                background-position: center;
                background-size: 250px;
                background-repeat: no-repeat;
            }
            33.33% {
                background-image: url('/error.png');
                background-position: center;
                background-size: 250px;
                background-repeat: no-repeat;
            }
            66.66% {
                background-image: url('/error404.png');
                background-position: center;
                background-size: 250px;
                background-repeat: no-repeat;
            }
            100% {
                background-image: url('/error.png');
                background-position: center;
                background-size: 250px;
                background-repeat: no-repeat;
            }
        }
    
       

        .containerboton {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            width: 100%;
            height: 250px;
            animation: changeImage 30s infinite;
            background-size: cover;
        }

        .containerError{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
`














function Error404() {
  return (
    <Container>

        <div>
             <h3><span>¡ERROR 404!</span> LA PÁGINA NO SE HA ENCONTRADO</h3>
        </div>
        <div className='containerError'>
            <div className='containerboton'></div>
            <StyleButton to="/">Ir al Inicio</StyleButton>
        </div>
        
            
           
            

    </Container>
  )
}

export default Error404