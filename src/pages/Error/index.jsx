import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
/**
 *
 * CSS for component using styled.components
 */
const Contents = styled.main`
    margin: 3rem auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    text-decoration-style: none;
`
const Number = styled.h1`
    color: ${colors.primary};
    font-size: 4rem;
`
const Links = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    color: ${colors.black};
    &:hover {
        color: ${colors.white};
        transform: scale(1.4);
    }
    @media (min-width: 720px) {
        font-size: 2rem;
    }
`
const ErrorLogo = styled.img`
    width: 20rem;
    @media (min-width: 720px) {
        width: 20rem;
    }
`
const Title = styled.h2`
    font-size: 2rem;
    color: ${colors.black};
    @media (min-width: 720px) {
        font-size: 3rem;
    }
`

/**
 *
 * Render Error 404 page
 * @returns {JSX}
 */

function Error() {
    return (
        <Contents>
            <ErrorLogo src={Logo} alt="logo" />
            <Number>ERROR 404</Number>
            <Title>Désolé, cette page n'existe pas encore !</Title>
            <Links to="/">
                Pour retourner à la page d'accueil, cliquez ici.
            </Links>
        </Contents>
    )
}

export default Error
