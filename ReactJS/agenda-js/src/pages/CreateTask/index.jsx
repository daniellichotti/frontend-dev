import { useState } from "react"
import { Container, TaskForm } from "./style"

export function CreateTaskPage() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <Container>
            <TaskForm action="">
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
