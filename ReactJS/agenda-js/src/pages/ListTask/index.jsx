import { useEffect, useState } from "react";
import { Container, TasksContainer } from "./style";
import { useNavigate } from "react-router-dom";

export function ListTaskPage() {
    const [tasks, setTasks] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tasks")) || []
        setTasks(saved)
    }, [])

    function handleClick() {
        navigate('/criar-tarefa')
    }

    function completeTask() {
        alert('completada!')
    }

    return (
        <Container>
            <TasksContainer>
                <h1>Tarefas:</h1>
                <ul>
                    {tasks.map((t, i) => (
                        <li onClick={completeTask} key={i}>{t.title} - {t.description}</li>
                    ))}
                </ul>
                <button onClick={handleClick}>Adicionar Tarefa!</button>
            </TasksContainer>
        </Container >
    )
}
