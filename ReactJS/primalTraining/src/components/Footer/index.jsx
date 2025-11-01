import { Container, InfoContainer } from "./styled";
import logoImg from '../../assets/Logo.svg'

export function Footer() {
    return (
        <Container>
            <div id="logoContainer">
                <img src={logoImg} alt="" />
                <h1>PrimalTraining</h1>
            </div>

            <InfoContainer>
                <div>
                    <h5>COntact</h5>
                    <p>Email: hello@figma.com</p>
                    <p>Phone: (203) 555-5555</p>
                </div>

                <div>
                    <h5>Opening Hours</h5>
                    <p>MON - FRI <span>5:00 - 23:00</span></p>
                    <p>SATURDAYS <span>8:00 - 16:00</span></p>
                    <p>SUNDAYS <span>8:00 - 13:00</span></p>
                    <p>HOLIDAYS <span>8:00 - 16:00</span></p>
                </div>

                <div id="links">
                    <h5>Social</h5>
                    <a href="">Instagram</a>
                    <a href="">X</a>
                    <a href="">LinkedIn</a>
                    <a href="">Spotify</a>
                </div>
            </InfoContainer>
        </Container>
    )
};
