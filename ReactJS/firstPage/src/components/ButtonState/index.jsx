import { useState } from "react";
import './styles.css'

export function ButtonState() {
    const [contador, setContador] = useState(0);
    const [isDark, setIsDark] = useState(false);

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        if (contador > 0) {
            setContador(contador - 1)
        } else {
            alert('Contador negativo!')
        }
    }

    function resetar() {
        setContador(0)
    }

    function alterarTema() {
        setIsDark(!isDark)
    }


    return (
        <div>
            <h1>Contagem atual: {contador}</h1>
            <button style={isDark ? { backgroundColor: '#7f1d1d' } : { backgroundColor: '#fecaca' }} onClick={aumentar}>Clique para aumentar</button>
            <button style={isDark ? { backgroundColor: '#7f1d1d' } : { backgroundColor: '#fecaca' }} onClick={resetar}>Clique para resetar</button>
            <button style={isDark ? { backgroundColor: '#7f1d1d' } : { backgroundColor: '#fecaca' }} onClick={diminuir}>Clique para diminuir</button>

            <button onClick={alterarTema}>Clique para trocar o tema do botão</button>
        </div>
    )
};
