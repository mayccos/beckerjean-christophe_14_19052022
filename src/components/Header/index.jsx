import { colors } from '../../utils/style/colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//LOGO
import Logo from '../../assets/logo.svg'

// Creation components that using styled-component
const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    height: 100px;
    background-color: ${colors.white};
`

const Div = styled.div`
    padding: 20px 0;
`
const MainNavItem = styled(Link)`
    font-weight: bold;
    color: ${colors.tertiary};

    router-link-exact-active {
        color: ${colors.black};
    }
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
        text-decoration: underline;
    }
`
const MainNavLogo = styled(Link)`
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    color: ${colors.tertiary};
    router-link-exact-active {
        color: ${colors.black};
    }
`
const MainNavLogoImg = styled.img`
    max-width: 100%;
    width: 70px;
`

const PLogo = styled.p``

const SpanLogo = styled.span``

/**
 * Creation of a component to show the header
 * @returns {JSX} header
 */

function Header() {
    return (
        <MainNav>
            <MainNavLogo to="/">
                <MainNavLogoImg src={Logo} alt="WealthHealth Logo" />
                <PLogo>
                    WEALTH HEALTH - <SpanLogo> HRnet</SpanLogo>
                </PLogo>
            </MainNavLogo>
            <Div>
                <MainNavItem to="/profile">Employees List</MainNavItem>
                <MainNavItem to="/login">Create Employee</MainNavItem>
            </Div>
        </MainNav>
    )
}
//Export
export default Header
