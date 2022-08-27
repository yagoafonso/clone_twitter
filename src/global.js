import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    :root {

        --white: #FFFFFF;
        --black: #0F1419;

        --blue-300: #1DA1F2;
        

        --grey-300: #EBEEF0;
        --grey-400: #5B7083;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

    }
    body{
        color: var(--black);
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`