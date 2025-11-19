import { useStore } from "../../store/useTaskListStore.jsx"

export function ListTaskPage() {
    const tasks = useStore((state) => state.tasks)
    return <h1>hello</h1>
};
