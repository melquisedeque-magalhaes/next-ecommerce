import styled from '@emotion/styled'
import { Colors } from './theme'

export const GlobalStyles = styled.div`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${Colors.light.BACKGROUND};
        color: ${Colors.light.TEXT};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: "Lato", sans-serif;
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`