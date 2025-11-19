import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;

    padding: 20px;

    background-color: #b5b5ff;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const TasksContainer = styled.div`
    height: 100vh;
    width: calc(100vw*0.5);
    padding: 60px;

    background-color: #c5c5c5;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    h1 {

    }

    ul {
        text-decoration: none;
        list-style: none;
        
        li {
            background-color: white;
            margin-bottom: 10px;
        }

        #linha {
            text-decoration: line-through;
        }
    }

`