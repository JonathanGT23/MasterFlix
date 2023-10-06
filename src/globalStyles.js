import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root{
    --color-principal: #051726;
    --color-secundario: #fff;
    --color-tercero: #81FFD9;
    --tipo-letra-principal: 'Bebas Neue', sans-serif;
    --tipo-letra-secundario:'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    background: var(--color-principal);
    font-family: var(--tipo-letra-principal);
    color: var(--color-secundario);
    
  }

 


  
  
`;
 
export default GlobalStyle;