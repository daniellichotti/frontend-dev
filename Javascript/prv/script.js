function exibeTexto() {
    const resultado = document.getElementById('resultado')
    const nome = document.getElementById('nome').value
    const checkbox = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked')

    console.log(Number(nome))

    if (!isNaN(Number(nome))) {
        alert('Insira um nome válido!')
        return
    }

    if (nome == '') {
        alert('Insira um nome válido!')
        return
    }



    resultado.innerHTML = `O ${nome} é ${checkbox[0].value}`
}

function trocaCor() {
    const body = document.querySelectorAll('body')[0]

    body.style = `background-color: rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
}