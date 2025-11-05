import { useState } from "react";
import { Container, LoginContainer } from "./styled";

export function Form() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [correct, setCorrect] = useState('')

    function Authenticate(name, password) {
        if (name === 'dnl' && password === '1234') {
            setCorrect(true)
            alert('Bem vindo')
        } else {
            setCorrect(false)
            alert('Dados inválidos.')
        }
    }

    function handleClick() {
        if (name === '' || password === '') {
            alert('Preencha o campo vazio!')
        } else {
            Authenticate(name, password)
        }
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <Container style={correct ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}>
            <LoginContainer>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        placeholder="Entre com seu username"
                        value={name}
                        onChange={handleChange} id="name"
                        type="text"
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        placeholder="Entre com sua senha"
                        value={password}
                        onChange={handlePasswordChange} id="password" type="password" />
                </div>

                <button onClick={handleClick}>Enviar</button>
            </LoginContainer>
        </Container>
    )
};
