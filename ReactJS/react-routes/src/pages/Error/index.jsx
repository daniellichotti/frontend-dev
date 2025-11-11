import { Container } from "./style";
import robot from "../../assets/robot.png"

export function Error() {
    return (
        <Container>
            <img src={robot} alt="" />
            <div>
                <h1>404 Not Found</h1>
                <p>As vezes essa rota ainda não foi criada! Tente novamente mais tarde!</p>
            </div>
        </Container>
    )
};