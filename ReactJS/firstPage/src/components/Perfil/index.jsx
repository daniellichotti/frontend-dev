import './styles.css'

export function Perfil({ name, age }) {
    return (
        <div id='profileContainer'>
            <h2>Nome: {name}</h2>
            <h2>Idade: {age}</h2>
        </div>
    )
};
