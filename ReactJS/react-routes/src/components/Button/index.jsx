import { StyledButton } from "./style";

export function Button({ handleClick, children }) {
    return <StyledButton onClick={handleClick}>{children}</StyledButton>
};
