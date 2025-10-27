import { HeaderContainer, ImgContainer, TextContainer } from "./styles";
import logoImg from '../../assets/Logo.svg'


export function Header() {
    return (
        <HeaderContainer>
            <ImgContainer src={logoImg} />
            <TextContainer>PrimalTraining</TextContainer>
        </HeaderContainer>
    )
};
