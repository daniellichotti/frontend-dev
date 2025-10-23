import './Button.css'

function Click() {
    alert('Clicou')
}

export function Button({ name, color }) {

    return (
        <button onClick={Click} style={{ backgroundColor: color, color: 'white' }}>{name}</button>
    )
};