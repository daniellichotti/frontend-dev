import { useLocation, useNavigate } from "react-router-dom"
import { ButtonContainer, Container, LogoutButton, TextContainer } from "./style"
import { SignOutIcon } from "@phosphor-icons/react"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header";

export function Home() {

    const navigate = useNavigate()
    const location = useLocation()

    function handleLogoutClick() {
        localStorage.setItem('auth', 'false')
        navigate('/login')
    }

    function handleAboutClick() {
        navigate('/about')
    }

    return (
        <Container>
            <Header />
            <TextContainer>
                <h1>☕ Olá {location.state.username.split('@')[0]}, Café artesanal que desperta até segunda-feira!</h1>
                <p>
                    Sabe aquele cheirinho de café que abraça a alma? É exatamente isso que o Café [Nome da Marca] entrega — só que em versão gourmet com atitude!
                    Grãos selecionados, torra na medida e sabor que faz até o despertador sorrir.
                    <br />
                    ✨ Por que você vai amar:

                    Grãos 100% selecionados com amor e cafeína

                    Sabor intenso (sem drama, só energia boa)

                    Torra artesanal feita por quem entende de café de verdade

                    Aroma que transforma qualquer manhã em um bom motivo pra levantar da cama
                    <br />
                    🚀 Do grão à sua xícara, tudo com carinho e zero pressa.
                    Porque café bom não se apressa — e o seu merecimento também não!
                    <br />
                    👉 Experimente agora o Café [Nome da Marca] e descubra o poder de um gole feliz.
                </p>
                <Button handleClick={handleAboutClick}>☕ Quero saber mais!</Button>
            </TextContainer>
            <TextContainer>
                <h1>☕ Café artesanal que desperta até segunda-feira!</h1>
                <p>
                    Sabe aquele cheirinho de café que abraça a alma? É exatamente isso que o Café [Nome da Marca] entrega — só que em versão gourmet com atitude!
                    Grãos selecionados, torra na medida e sabor que faz até o despertador sorrir.
                    <br />
                    ✨ Por que você vai amar:

                    Grãos 100% selecionados com amor e cafeína

                    Sabor intenso (sem drama, só energia boa)

                    Torra artesanal feita por quem entende de café de verdade

                    Aroma que transforma qualquer manhã em um bom motivo pra levantar da cama
                    <br />
                    🚀 Do grão à sua xícara, tudo com carinho e zero pressa.
                    Porque café bom não se apressa — e o seu merecimento também não!
                    <br />
                    👉 Experimente agora o Café [Nome da Marca] e descubra o poder de um gole feliz.
                </p>
                <Button handleClick={handleAboutClick}>☕ Quero saber mais!</Button>
            </TextContainer>

        </Container>
    )
};
