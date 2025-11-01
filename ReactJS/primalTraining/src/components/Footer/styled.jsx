import styled from 'styled-components'


export const Container = styled.footer`
    height: 480px;
    padding: 20px 27px 20px 31px;

    background-color: #E9ECFF;

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    #logoContainer {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    img {
        height: 139px;
        width: 229;
    }

    h1 {
        font-size: 53px;
        font-weight: bold;
    }
`

export const InfoContainer = styled.footer`

        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        h5 {
            font-size: 22px;
            font-weight: bold;
            text-transform: uppercase;
        }

        

        p {
            width: 270px;

            display: flex;
            justify-content: space-between;
        }
        span {
            margin-right: 33px;
        }

        a, p {
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
            color: #000;
        }
        
        
        #links {
            display: flex;
            flex-direction: column;
            
            a {
                cursor: pointer;
                text-decoration: underline;
            }
        }

`