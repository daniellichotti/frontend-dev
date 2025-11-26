import { Container } from "./style";

export function UserCard({ name, email }) {
  return (
    <Container>
      <h1>Nome: {name}</h1>
      <h1>Email: {email}</h1>
    </Container>
  );
}
