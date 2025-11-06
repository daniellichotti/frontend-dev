import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
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