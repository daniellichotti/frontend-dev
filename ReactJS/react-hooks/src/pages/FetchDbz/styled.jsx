import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px 0px;
    height: auto;
    width: 100vw;
    background-color: orange;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 100px;

    h1 {
        font-size: 80px;
        color: blue;
    }
`

export const CharCardsContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-flow: row wrap;
gap: 20px;

`

export const CharCards = styled.div`
    padding: 20px;
    background-color: #ccc;
    border-radius: 8px;
    width: 200px;
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    img {
        height: 200px;
        width: auto;
    }
`

export const ButtonsContainer = styled.div`

    display: flex;

    button {
        height: 50px;
        width: 60px;
        background-color: #ccc;
        border: none;
        border-radius: 0px 8px 8px 0px;
        font-size: 20px;
        cursor: pointer;

        transition: 5ms ease;

        &:hover {
            background-color: #ebebeb;
        }
    }

    :first-child {
        border-radius: 8px 0px 0px 8px;
    }

    p {
        height: 50px;
        width: 60px;
        background-color: white;
        

        font-size: 20px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.8);

    z-index: 99;
`

export const Modal = styled.div`
    display: flex;
    gap: 40px;

    img {
        height: 500px;
        width: auto;
    }
`

export const InfoContainer = styled.div`
    width: 300px;

    text-align: center;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

