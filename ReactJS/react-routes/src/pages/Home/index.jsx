import { useNavigate } from "react-router-dom"
import { ButtonContainer, Container, LogoutButton, TextContainer } from "./style"
import { SignOutIcon } from "@phosphor-icons/react"

export function Home() {

    const navigate = useNavigate()

    function handleLogoutClick() {
        localStorage.setItem('auth', 'false')
        navigate('/login')
    }

    function handleAboutClick() {
        navigate('/about')
    }

    return (
        <Container>
            <TextContainer>
                <h1>☕ Café artesanal que desperta até segunda-feira!</h1>
                <p>
                    Sabe aquele cheirinho de café que abraça a alma? É exatamente isso que o Café [Nome da Marca] entrega — só que em versão gourmet com atitude!
                    Grãos selecionados, torra na medida e sabor que faz até o despertador sorrir.

                    ✨ Por que você vai amar:

                    Grãos 100% selecionados com amor e cafeína

                    Sabor intenso (sem drama, só energia boa)

                    Torra artesanal feita por quem entende de café de verdade

                    Aroma que transforma qualquer manhã em um bom motivo pra levantar da cama

                    🚀 Do grão à sua xícara, tudo com carinho e zero pressa.
                    Porque café bom não se apressa — e o seu merecimento também não!

                    👉 Experimente agora o Café [Nome da Marca] e descubra o poder de um gole feliz.
                </p>
                <button onClick={handleAboutClick}>☕ Quero saber mais!</button>
            </TextContainer>
            <ButtonContainer>
                <LogoutButton onClick={handleLogoutClick}>
                    <SignOutIcon size={32} />
                </LogoutButton>
            </ButtonContainer>
        </Container>
    )
};
