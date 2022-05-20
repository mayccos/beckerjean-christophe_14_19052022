import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
//LOGO
import logo from '../../assets/logo.svg'

/**
 *
 * CSS for the component using styled.components
 */
const Contents = styled.main`
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
`
const Logo = styled.img`
    width: 20rem;
`
const Title = styled.h1`
    color: ${colors.primary};
`
/**
 * @description Component that show the Home page
 * @returns { HTMLElement }
 */
function Home() {
    document.title = 'HRnet - Home'
    return (
        <Contents>
            <Logo src={logo} alt="logo " />
            <Title>WELCOME TO HRnet !</Title>
        </Contents>
    )
}

export default Home
