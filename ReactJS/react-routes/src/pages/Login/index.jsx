import { Container, LoginContainer } from "./style";
import bmo from '../../assets/bmo-login.png'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [correct, setCorrect] = useState(true)

    const navigate = useNavigate()

    function handleClick() {
        if (username === 'dnl' && password === '123') {
            localStorage.setItem('auth', 'true')
            navigate("/home")
        } else {
            setCorrect(false)
        }
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
        <Container>
            <img src={bmo} alt="" />
            <LoginContainer>
                <h1>Acesse a plataforma</h1>
                <div>
                    <input
                        id="name" type="text" placeholder="Entre com seu username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <input
                        id="password" type="password" placeholder="Entre com sua senha"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button onClick={handleClick}>Login</button>
                {!correct && (
                    <p style={{ color: 'red' }}>Dados incorretos</p>
                )}
            </LoginContainer>
        </Container>
    )
};
