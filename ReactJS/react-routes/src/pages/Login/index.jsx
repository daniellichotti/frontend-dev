import { Container, LoginContainer } from "./style";

export function Login() {
    return (
        <Container>
            <LoginContainer>
                <h1>Acesse a plataforma</h1>
                <div>
                    <input id="name" type="text" placeholder="Entre com seu username" />
                </div>
                <div>
                    <input id="password" type="password" placeholder="Entre com sua senha" />
                </div>
                <button>Login</button>
            </LoginContainer>
        </Container>
    )
};
