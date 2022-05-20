import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const StyledGlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.primaryLight};
}
body, html, #root {
    height: 100%;
}

#root {
    margin: auto;
    display: flex;
    flex-direction: column;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


`
export default function GlobalStyle() {
    return <StyledGlobalStyle />
}
