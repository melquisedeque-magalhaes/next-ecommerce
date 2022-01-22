import styled from "@emotion/styled";
import { Colors } from '../../styles/theme'

export const Container = styled.div`
    height: 44px;
    width: 100%;  
    background-color: ${Colors.light.VIOLET};
 
`

export const Content = styled.div`
    max-width: 1177px;
    margin: 0 auto;
    height: 100%;

    display: flex;
    align-items: center; 
    justify-content: space-between;  
`

export const ContentInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        background-color: transparent;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        
        span {
            color: #fff;
            font-weight: bold;
        }

        svg + span {
            margin-left: 8px;
        }

        span + svg {
            margin-left: 8px;
        }
    }
`