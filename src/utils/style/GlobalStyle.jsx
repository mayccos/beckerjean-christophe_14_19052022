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
.birthDate, .startDate{
    margin-left:4.5vh;
    width:40vh;
    height: 50px;
    font-size: 2.5vh;
    border-radius: 20px;
    border: solid 2px ${colors.secondary};
    
}


.css-1s0hp0k-MuiDataGrid-columnHeadersInner{
    background-color: ${colors.tertiary};
}
.ag-theme-balham .ag-paging-panel {
    border-top-color: ${colors.tertiary};
    color: ${colors.tertiary}
}
.ag-theme-balham .ag-icon{
    color: ${colors.tertiary};
}
.ag-theme-balham .ag-header{
    border-bottom-color: ${colors.tertiary};
    color:${colors.tertiary};
}
.ag-theme-balham .ag-header-cell, .ag-theme-balham .ag-header-group-cell {
    color:${colors.tertiary};
}
`
export default function GlobalStyle() {
    return <StyledGlobalStyle />
}
