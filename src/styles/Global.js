import { createGlobalStyle} from 'styled-components'

const GLobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        max-width: 1440px;
        margin: 0 auto;
        color: ${props => props.theme.colors.neutral.darkGrayishBlue};
        font-family: 'Kumbh Sans', sans-serif;
        padding-bottom: 30px;
    }
    
    input {
        font-family: 'Kumbh Sans', sans-serif;
    }

    button {
        cursor: pointer;
    }

    li {
        list-style: none;
    }

`

export default GLobalStyle