import { useNavigate } from "react-router-dom";
import { Container, } from "./style";
import { Header } from "../../components/Header";

export function About() {
    const navigate = useNavigate()

    function handleLogoutClick() {
        localStorage.setItem('auth', 'false')
        navigate('/login')
    }

    function handleHomeClick() {
        navigate('/home')
    }

    return (
        <Container>
            <Header />
        </Container>
    )
};
