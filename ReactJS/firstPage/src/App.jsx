import './App.css'
import { Button } from './components/Button/Button'
import { Header } from './components/Header/Header'

export function App() {
  return (
    <div className="container">
      <Header name='Bem vindos ao meu site' />
      <p>Essa é minha primeira página!</p>
      <Button name="Enviar" color="green" />
      <Button name="Cancelar" color="red" />
    </div>
  )
}
