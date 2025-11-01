import styled from 'styled-components'
import FirstImage from "../../assets/FirstImage.png"
import SecondImage from "../../assets/SecondImage.png"
import ImageSecondContainer from "../../assets/ImageSecondContainer.png"

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
        background: url(${FirstImage}) center/cover no-repeat;
    }

    #secondImage {
        grid-column: 3;
        grid-row: 2;
        background: url(${SecondImage}) center/cover no-repeat;; 
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
            text-transform: uppercase;
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
            text-transform: uppercase;
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
            text-transform: uppercase;
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

export const SecondContainer = styled.div`
    background-color: #E9ECFF;

    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(1, 600px);

    #imageSecondContainer {
        grid-column: 2 /span 2;
        grid-row: 1;
        background: url(${ImageSecondContainer}) center/cover no-repeat;
        transition: .3s ease;
    }

    #imageSecondContainer:hover {
        background: url(${SecondImage}) center/cover no-repeat;
    }

    .separator {
        background-color: #000;
        height: 1px;
        width: 100%;
    }

    #textSecondContainer {
        color: #000;
        
        display: flex;
        flex-direction: column;
        
        a {
            text-decoration: none;
            text-transform: uppercase;
            color: #000;
            padding: 20px;
        }
        
        h1 {
            padding: 20px;
            font-size: 45px;
            text-transform: uppercase;
        }
        
        h2 {
            padding: 20px;
            font-size: 25px;
            text-transform: uppercase;
        }
        p {
            padding: 20px;
            font-size: 19px;
        }
    }
`

export const ThirdContainer = styled.div`
    height: 480px;
    background-color: #808CFD;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;

    h1 {
        font-size: 57px;
        text-transform: uppercase;
    }
    
    h2 {
        font-size: 17px;
        text-transform: uppercase;
        font-weight: lighter;
    }

    a {
        width: 185px;
        height: 41px;
        border-radius: 7px;
        background-color: #E9ECFF;

        text-transform: uppercase;
        text-decoration: none;
        font-size: 15px;
        color: #000;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        transition: 0.3ms ease-in-out;
    }

    a:hover {
        background-color: #c6cdff;
        transform: scale(1.1);
    }
    `