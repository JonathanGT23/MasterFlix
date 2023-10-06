import React from 'react'
import { styled } from 'styled-components'
import Logo from './Logo'

const StyleFooter = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px  40px;
    border-top: 3px solid var(--color-tercero);
    margin-top: auto;
`

function Footer() {
  return (
    <StyleFooter >
        <Logo/>
    </StyleFooter>
  )
}

export default Footer