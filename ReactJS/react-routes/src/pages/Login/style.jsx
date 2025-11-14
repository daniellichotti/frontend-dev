import styled from "styled-components";

export const Container = styled.div`
    background-color: #d9f99d;
    
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-right: -200px;
        margin-top: -400px;
    }
    
    `

export const LoginContainer = styled.div`
    padding: 50px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 10px 10px 20px -9px #000000;
    text-align: center;
    color: #3f6212;

    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        margin-bottom: 30px;
    }

    input {
        border: none;
        padding: 8px;
        border-radius: 8px;
        background-color: #e6e6e6;

        font-size: 20px;

        &:hover {
            outline: 2px solid #d9f99d;
        }
        
        &:focus {
            outline: none;
        }
    }
`