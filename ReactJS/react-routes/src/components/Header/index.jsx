import { Container, LinksNavigation, LogoContainer, NavContainer } from "./style";
import logoImg from "../../assets/logoImg.png"
import { useNavigate } from "react-router-dom";
import { SignOutIcon, HouseIcon } from "@phosphor-icons/react";

export function Header() {
    const navigate = useNavigate()

    function handleLogoutClick() {
        localStorage.setItem('auth', 'false')
        navigate('/login')
    }

    function handleAboutClick() {
        navigate('/about')
    }

    function handleHomeClick() {
        navigate('/home')
    }

    return (
        <Container>
            <LogoContainer>
                <img src={logoImg} alt="" />
                <h1>Coffee Shop</h1>
            </LogoContainer>
            <NavContainer>
                <LinksNavigation onClick={handleHomeClick}>Home</LinksNavigation>
                <LinksNavigation onClick={handleAboutClick}>About </LinksNavigation>
                <LinksNavigation onClick={handleLogoutClick}>Logout <SignOutIcon size={16} /></LinksNavigation>
            </NavContainer>
        </Container>
    )
};
