import { Colors } from './theme'
import { Global, css } from '@emotion/react'

export function GlobalStyles() {
    return (
        <Global styles={globalStyle} />
    )
}
    
const globalStyle = css`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${Colors.light.BACKGROUND};
        color: ${Colors.light.BACKGROUND};
        -webkit-font-smoothing: antialiased;

        padding: 0px !important;
        margin: 0px !important;
    }

    body, input, button {
        font-family: "Lato", sans-serif;
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`
