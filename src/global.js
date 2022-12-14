import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    :root {

        --white: #FFFFFF;
        --black: #0F1419;


        --blue-300: #1DA1F2;

        --green-300: #00BA7C;

        --red-300: #f91880;
        

        --grey-300: #EBEEF0;
        --grey-400: #5B7083;
    }

    :focus{
        outline: transparent;
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

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`