function calcularIdade() {
    const input = document.getElementById('birthDate').value
    const inputName = document.getElementById('name').value
    const resultado = document.getElementById('resultado')
    const resultadoPodeDirigir = document.getElementById('resultadoPodeDirigir')


    console.log(input, inputName)
    if (!input) {
        resultado.textContent = 'Por favor, insira uma data válida.'
        resultado.style.color = 'red'
        alert('teste')
    } else if (inputName == '') {
        resultado.textContent = 'Por favor, insira um nome válido.'
        resultado.style.color = 'red'
    }

    const birthDate = new Date(input)
    const today = new Date()

    if (birthDate.getFullYear() > today.getFullYear()) {
        resultado.textContent = 'Por favor, insira uma data válida.'
        resultado.style.color = 'red'
    } else {
        let idade = today.getFullYear() - birthDate.getFullYear()

        resultado.textContent = `Você tem ${idade} ano(s)`
        resultado.style.color = 'green'
        if (podeDirigir(idade)) {
            resultadoPodeDirigir.textContent = 'Pode dirigir'
            resultadoPodeDirigir.style.color = 'green'
        } else {
            resultadoPodeDirigir.textContent = 'Não pode dirigir'
            resultadoPodeDirigir.style.color = 'red'
        }
    }


}

function podeDirigir(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}