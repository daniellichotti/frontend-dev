import styled from 'styled-components'

export const TextContainer = styled.header`
    padding: 20px 2px;
    border: 1px solid #000;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 90px;
        font-weight: bold;
        text-transform: uppercase;
    }

    strong {
        color: #808DFD;
    }
`

export const FirstSection = styled.div`
    background-color: #E9ECFF;
`

export const FirstContainer = styled.div`
    display: flex;
`
export const SecondContainer = styled.div`
    display: flex;
`

export const ContainerText = styled.div`
    padding: 20px;
    width: 426.67px;
    height: 479px;

    border: 1px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 45px;
        font-weight: bold;
        text-transform: uppercase;

        margin-bottom: 163px;
    }

    p {
        font-size: 17px;
        font-weight: normal;
    }

    :last-child {
        margin-top: 20px;
    }
`