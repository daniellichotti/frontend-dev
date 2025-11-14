import styled from 'styled-components'

export const Container = styled.div`
    background-color: #d9f99d;
    
    height: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

export const TextContainer = styled.div`
    background-color: #e8fac6;

    padding: 30px;
    border-radius: 8px;

    height: auto;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

export const LogoutButton = styled.button`
    padding: 10px;

    border-radius: 8px;
    border: none;

    cursor: pointer;

    background-color: #ff9c9c;

    transition: 3ms ease-in-out;
    
    &:hover {
        background-color: #ff8383;
    }
`
export const ButtonContainer = styled.div`
    width: 100vw;
    margin-right: 100px;
    
    display: flex;
    justify-content: flex-end;
    align-items: end;
`