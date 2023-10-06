import React from 'react'
import { styled } from 'styled-components'
import Logo from './Logo'
import {SiLinkedin} from "react-icons/si"
import {FaSquareInstagram} from "react-icons/fa6"
import {AiFillFacebook,AiFillGithub} from "react-icons/ai"

const StyleFooter = styled.footer`
    width: 100%;
    display: flex;
  
    padding: 20px  40px;
    border-top: 3px solid var(--color-tercero);
    margin-top: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: 540px){
      
      flex-direction: column;
      gap: 1rem;

      .containerLogo{
        order: 1;
      }
      .containerLink{
        order: 2;
      }

      .containerInfo{
        order: 3;
      }
    }




  .containerLink{
    display: flex;
    justify-content: flex-start;
  gap: 1rem;
  }


.containerInfo{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  gap: 1rem;
  span{
    color: var(--color-tercero);
  }
}


.containerLogo{
  display: flex;
  justify-content: center;
 
}


`

const Links = styled.a`

    text-decoration: none;
    color: var(--color-tercero);
    font-size: 35px;

    :hover{
      color: white;
    }

`

function Footer() {
  return (
    <StyleFooter >
        
        
        <div className='containerLink'>
          <Links href="https://www.linkedin.com/in/jonathan-gonzalez-t-007a52290/" target='_blank'><SiLinkedin/></Links>
          <Links href="https://www.instagram.com/jonathan_gonzalezt/" target='_blank'><FaSquareInstagram/></Links>
          <Links href="https://www.facebook.com/profile.php?id=100088565150787" target='_blank'><AiFillFacebook/></Links>
          <Links href="https://github.com/JonathanGT23" target='_blank'><AiFillGithub/></Links>
        </div>

        <div className='containerLogo'>
          <Logo />
        </div>

        <div className='containerInfo'>
           <p>Desarrollado por Jonathan González T</p>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
       
    </StyleFooter>
  )
}

export default Footer
