import React from 'react'
import {StyleButton} from './Button'
import Logo from './Logo'
import { styled } from 'styled-components'
import { useLocation  } from 'react-router-dom'

const HeaderStyle  = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid var(--color-tercero);
    padding: 20px  40px;
    flex-wrap: wrap;
    gap: 40px;
    @media screen and (min-width: 450px) {
        flex-direction: row;
    }
    
`


function Header() {
  
  const url = useLocation()
  return (
    <HeaderStyle>
        <Logo/>

  {url.pathname === '/' && <StyleButton to={"/NuevoVideo"}>Nuevo Video</StyleButton>}


        
    </HeaderStyle>
  )
}

export default Header