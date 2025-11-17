import { Container, LoginContainer } from "./style";
import bmo from '../../assets/bmo-login.png'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { CredentialsValidation } from "../../utils/credentials-validatation";

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [correct, setCorrect] = useState(true)

    const navigate = useNavigate()

    function handleClick() {
        const isCredentialsValid = CredentialsValidation(username, password)

        if (isCredentialsValid) {
            alert(isCredentialsValid)
            return
        }

        if (username === 'dnl@example.com' && password === '123456') {
            localStorage.setItem('auth', 'true')
            navigate("/home", {
                state: { username: username }
            })
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
                        id="name" type="email" placeholder="Entre com seu email"
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
                <Button handleClick={handleClick}>Login</Button>
                {!correct && (
                    <p style={{ color: 'red' }}>Dados incorretos</p>
                )}
            </LoginContainer>
        </Container>
    )
};
