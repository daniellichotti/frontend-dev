import styled from 'styled-components'

export const Container = styled.div`
    font-family: "Momo Signature", cursive;
    
    color: #3f6212;
    background-color: #d9f99d;

    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        animation: spin 10s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    h1 {
        font-size: 40px;
    }
    
    p {
        color: #65a30d;
        font-size: 20px;
    }

`


