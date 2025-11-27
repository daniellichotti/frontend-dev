import { useState } from "react"
import { Container, TaskForm } from "./style"
import { useNavigate } from 'react-router-dom'

export function CreateTaskPage() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { tasks, addTask } = useListStore();

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        if (!title || !description) {
            alert("Digite algo!")
            return
        }

        const newTask = { title, description }

        // pegar tarefas salvas
        const saved = JSON.parse(localStorage.getItem("tasks")) || []

        const updated = [...saved, newTask]

        // salvar atualizado
        localStorage.setItem("tasks", JSON.stringify(updated))

        alert("Tarefa adicionada!")
        navigate('/listar-tarefas')
    }

    return (
        <Container>
            <TaskForm onSubmit={handleSubmit} action="">
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Descrição da tarefa..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Adicionar Tarefa!</button>
            </TaskForm>
        </Container>
    )
};
