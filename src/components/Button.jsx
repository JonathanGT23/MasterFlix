//import React from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components"


export const StyleButton = styled(Link)`
    /* padding: 18px 20px;
    font-family: var( --tipo-letra-secundario);
    font-size: 15px;
    font-weight: 700;
    background-color: var(--color-tercero);
    border: none;
    border-radius: 12px;
    color: var(--color-principal);
    cursor: pointer;
    
    &:hover{
        color: #ffF;
    }
     */

    
    font-family: var( --tipo-letra-secundario);
  text-decoration: none;
  padding: 18px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-tercero);
  transition: all 500ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid var(--color-tercero);
  background-color: var(--color-principal);
 
  cursor: pointer;


&:hover {
  color: var(--color-principal);
  transform: scale(1);
  outline: 2px solid var(--color-tercero);
  box-shadow: 2px 3px 10px -2px var(--color-tercero);
}

&::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: var(--color-tercero);
  transform: skewX(45deg);
  z-index: -1;
  transition: width 500ms;
}

&:hover::before {
  width: 200%;
}
`

export const ButtomForm = styled.button`
/* padding: 18px 20px;
font-family: var( --tipo-letra-secundario);
font-size: 15px;
font-weight: 700;
background-color: var(--color-tercero);
border: none;
border-radius: 12px;
color: var(--color-principal);
cursor: pointer;

&:hover{
    color: #ffF;
}
 */


font-family: var( --tipo-letra-secundario);
text-decoration: none;
padding: 18px 20px;
border: none;
border-radius: 5px;
font-weight: bold;
letter-spacing: 2px;
text-transform: uppercase;
color: var(--color-tercero);
transition: all 500ms;
font-size: 15px;
position: relative;
overflow: hidden;
outline: 2px solid var(--color-tercero);
background-color: var(--color-principal);

cursor: pointer;


&:hover {
color: var(--color-principal);
transform: scale(1);
outline: 2px solid var(--color-tercero);
box-shadow: 2px 3px 10px -2px var(--color-tercero);
}

&::before {
content: "";
position: absolute;
left: -50px;
top: 0;
width: 0;
height: 100%;
background-color: var(--color-tercero);
transform: skewX(45deg);
z-index: -1;
transition: width 500ms;
}

&:hover::before {
width: 200%;
}
`

