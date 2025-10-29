import { ContainerText, FirstContainer, FirstSection, SecondContainer, TextContainer } from "./styles";
import FirstImage from "../../assets/FirstImage.png"
import SecondImage from "../../assets/SecondImage.png"

export function Main() {
    return (
        <>
            <TextContainer>
                <h1>
                    Train Hard. <strong>Live Better</strong>
                </h1>
            </TextContainer>

            <FirstSection>
                <FirstContainer>
                    <img src={FirstImage} alt="" />
                    <ContainerText>
                        <h2>for the commited</h2>
                        <p>Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.</p>
                        <p>About us</p>
                    </ContainerText>
                </FirstContainer>
                <SecondContainer>
                    <ContainerText>
                        <h2>Guided by experts</h2>
                        <p>We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.
                        </p>
                    </ContainerText>
                    <ContainerText>
                        <h2>DYNAMIC OPEN GYM</h2>
                        <p>Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.</p>
                    </ContainerText>
                    <img src={SecondImage} alt="" />
                </SecondContainer>
            </FirstSection>

        </>
    )
};
