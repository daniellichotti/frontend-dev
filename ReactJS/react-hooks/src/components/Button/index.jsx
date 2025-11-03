
import { useState } from "react";
import { Container, StateButton } from "./styled";

export function Button({ green, children }) {
    const [count, setCount] = useState(0)

    function handleClick() {
        if (green) {
            setCount(count + 1)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <Container>
            <p>{count}</p>
            <StateButton onClick={handleClick} style={green ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}>{children}</StateButton>
        </Container >
    )
};
