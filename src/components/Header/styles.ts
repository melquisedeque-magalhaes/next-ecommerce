import styled from '@emotion/styled'

export const Container = styled.div`
    max-width: 1177px;
    height: 78px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        li {
            padding-left: 35px;
            padding-right: 35px;
            list-style: none;
            line-height: 20px;
            color: #0D0E43;
            font-family: "Lato";
        }
    }
`

export const LinkActive = styled.a`
    color: #FB2E86;
    padding-left: 35px;
    padding-right: 35px;
    list-style: none;
    line-height: 20px;
    font-family: "Lato";
`

export const Logo = styled.h1`
    font-family: "Josefin Sans", sans-serif;
    font-size: 34px;
    line-height: 40px;
    color: #0D0E43;
    font-weight: 600;
`

export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    input {
        width: 266px;
        height: 40px;
        border: 2px solid #E7E6EF;
    }

    button {
        border: 0;
        height: 40px;
        width: 51px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #FB2E86;
    }
`