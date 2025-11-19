import { useState } from "react"
import { Container, TaskForm } from "./style"
import { useNavigate } from 'react-router-dom'
import { useStore } from "../../store/useTaskListStore.jsx"

export function CreateTaskPage() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    //const [tasks, setTasks] = useState([])
    const tasks = useStore((state) => state.tasks)
    const setTasks = useStore((state) => state.includeTask)

    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        if (title === '' || description === '') {
            alert('Digite algo!')
            return
        }

        const newTask = {
            title,
            description
        }


        setTasks(newTask)

        alert('Tarefa Adicionada com Sucesso!')

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
