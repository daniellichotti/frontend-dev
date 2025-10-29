import styled from 'styled-components'
import FirstImage from "../../assets/FirstImage.png"
import SecondImage from "../../assets/SecondImage.png"

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

export const Container = styled.div`
    background-color: #E9ECFF;

    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2, 480px);

    #firstImage {
        grid-column: 1 /span 2;
        grid-row: 1;
        background-image: url(${FirstImage}); 
    }

    #secondImage {
        grid-column: 3;
        grid-row: 2;
        background-image: url(${SecondImage}); 
    }

    #textCard {
        padding: 20px;
        border: 1px solid black;
        grid-column: 3;
        grid-row: 1;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            font-size: 45px;
            font-weight: bold;
        }

        div {
            font-size: 17px;

            :last-child {
                margin-top: 32px;
                margin-bottom: 32px;
                text-transform: uppercase;
                
            }
        }
    }

    #secondTextCard {
        padding: 20px;
        border: 1px solid black;
        grid-column: 1;
        grid-row: 2;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            font-size: 45px;
            font-weight: bold;
        }

        div {
            font-size: 17px;

            :last-child {
                margin-top: 32px;
                margin-bottom: 32px;
                text-transform: uppercase;
                
            }
        }
    }
    #thirdTextCard {
        padding: 20px;
        border: 1px solid black;
        grid-column: 2;
        grid-row: 2;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            font-size: 45px;
            font-weight: bold;
        }

        div {
            font-size: 17px;

            :last-child {
                margin-top: 32px;
                margin-bottom: 32px;
                text-transform: uppercase;
                
            }
        }
    }
`


