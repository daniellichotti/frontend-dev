function mostrarPreferencias() {
    const nome = document.getElementById('nome').value
    const animais = document.getElementById('animais').value
    const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked')
    const resultado = document.getElementById('resultado')


    if (!nome) {
        resultado.innerHTML = "<p style='color: red'>Por favor, escolha um nome</p>"
        return
    }

    if (!animais) {
        resultado.innerHTML = "<p style='color: red'>Por favor, escolha um animal</p>"
        return
    }




    let texto = `<h3 style='color: green'>${nome} ${animais} ${checkboxes[1].value}</h3  >`
    resultado.innerHTML = texto

    for (let index = 0; index < checkboxes.length; index++) {
        resultado.innerHTML += checkboxes[index].value
    }
}