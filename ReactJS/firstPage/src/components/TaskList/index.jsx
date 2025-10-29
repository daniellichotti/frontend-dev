export function TaskList({ list }) {
    return (
        <ul>
            {list.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    )
};
