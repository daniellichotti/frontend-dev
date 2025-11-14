import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    color: #3f6212;

    
    width: 100vw;

    padding: 24px 40px;

    box-shadow: 1px 1px 10px #000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;

    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    img {
        height: 70px;
        width: 70px;
    }
`

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 50px;

    :last-child {
        &:hover{
            background-color: rgba(255, 176, 176, 0.4);
        }
    }
    
`

export const LinksNavigation = styled.a`
    padding: 8px;
    cursor: pointer;

    transition: border-bottom-color 3ms ease-out;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
        border-bottom: 1px solid #3f6212;;
        background-color: rgba(255, 255, 255, 0.4);
    }
`



