import { useEffect, useState } from "react";

export function ListTaskPage() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tasks")) || []
        setTasks(saved)
    }, [])

    return (
        <>
            <ul>
                {tasks.map((t, i) => (
                    <li key={i}>{t.title} - {t.description}</li>
                ))}
            </ul>
            <button type="submit">Adicionar Tarefa!</button>
        </>
    )
}
