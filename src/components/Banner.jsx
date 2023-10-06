import React from 'react'

import { styled } from 'styled-components'
import {StyleButton} from './Button'




const BannerImg = styled.section`
    /* max-width: 100%;
    

    @media screen and (min-width: 470px) {
        max-width: 100%;
    } */

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url("banner.jpg"), lightgray 50% ;
    background-size: 100% 100%;
    background-image: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    height: 200px;
    

    @media screen and (min-width: 648px) {
        width: 100%;
        height: 50vh;
    }

    
`

const BotonBanners = styled(StyleButton)`
    margin-bottom: 20px;
`


function Banner() {
  return (
    <BannerImg>
        
       <BotonBanners to="/Error 404">Ver Más</BotonBanners>
        
    </BannerImg>
  )
}

export default Banner