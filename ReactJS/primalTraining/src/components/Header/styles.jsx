import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 20px;
    width: calc(100vw-20px);
    height: 81px;
    background-color: #E9ECFF;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    a {
        color: #000000;
        text-decoration: none;
        cursor: pointer;
    }

    #background {
        background-color: #808CFD;
        padding: 12px 17px;
        border-radius: 8px;
    }
`

export const ImgContainer = styled.img`
    width: 43px;
    height: 25px;
`

export const TextContainer = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: #000000;
`