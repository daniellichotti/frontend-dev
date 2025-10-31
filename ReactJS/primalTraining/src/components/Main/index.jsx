import { Container, SecondContainer, TextContainer, ThirdContainer } from "./styles";


export function Main() {
    return (
        <>
            <TextContainer>
                <h1>
                    Train Hard. <strong>Live Better</strong>
                </h1>
            </TextContainer>

            <Container>
                <div id="firstImage" />
                <div id="textCard">
                    <h2>FOR THE COMMITTED</h2>
                    <div>
                        <p>Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.</p>
                        <p>About us</p>
                    </div>
                </div>
                <div id="secondTextCard">
                    <h2>Guided by experts</h2>
                    <div>
                        <p style={{ marginBottom: "40px" }}>We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.
                        </p>
                        <p style={{ display: "none" }}>About us</p>
                    </div>
                </div>
                <div id="thirdTextCard">
                    <h2>DYNAMIC OPEN GYM</h2>
                    <div>
                        <p style={{ marginBottom: "40px" }}>Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.</p>
                        <p style={{ display: "none" }}>About us</p>
                    </div>
                </div>
                <div id="secondImage" />
            </Container>

            <TextContainer style={{ justifyContent: "start" }}>
                <h1 style={{ marginLeft: "20px" }}>
                    Join The
                    <strong>{' '}Community</strong>
                </h1>
            </TextContainer >

            <SecondContainer>
                <div id="imageSecondContainer" />
                <div id="textSecondContainer">
                    <h1>DISCOVER YOUR POTENTIAL</h1>
                    <div class="separator" />
                    <h2>Expert Coaching</h2>
                    <p>Trainers who are passionate about your progress.</p>
                    <div class="separator" />
                    <h2>Results-Driven Programs</h2>
                    <p>Workouts that deliver tangible, measurable results.</p>
                    <div class="separator" />
                    <h2>A Supportive Tribe </h2>
                    <p>A community that pushes you to be your best. </p>
                    <div class="separator" />
                    <a href="">View classes</a>
                </div>

            </SecondContainer>

            <ThirdContainer>
                <h2>WHAT WE BELIEVE IN</h2>
                <h1>Join the Primal Tribe Today!</h1>
                <a href="">reserve your spot</a>
            </ThirdContainer>
        </>
    )
};
