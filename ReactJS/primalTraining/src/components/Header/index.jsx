import { HeaderContainer, ImgContainer, LinkContainer, LogoContainer, TextContainer } from "./styles";
import logoImg from '../../assets/Logo.svg'


export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <ImgContainer src={logoImg} />
                <TextContainer>PrimalTraining</TextContainer>
            </LogoContainer>
            <LinkContainer>
                <a href="">HOME</a>
                <a href="">ABOUT</a>
                <a href="" id="background">RESERVE YOUR SPOT</a>
            </LinkContainer>
        </HeaderContainer>
    )
};
