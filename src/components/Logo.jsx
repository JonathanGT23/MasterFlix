import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
const LogoStyle = styled.img`
    width: 150px;
`

const Logo = () =>{
    return  <Link to={"/"}><LogoStyle src="/logo-no-background.svg" alt="Logo MasterFlix" /></Link>
}

export default Logo