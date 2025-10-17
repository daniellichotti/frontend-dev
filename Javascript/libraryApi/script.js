const API_URL = 'http://localhost:3000'
const container = document.getElementById("container")

async function getBooks() {
    const res = await fetch(`${API_URL}/livros`)
    const data = await res.json()

    console.log(data[0].title)

    for (let i = 0; i < data.length; i++) {
        container.innerHTML += `
                <div id="card" style="border: 1px solid ${data[i].avaible ? "green" : "red"}">
                    <div id="title">${data[i].title}</div >
                    <p>Ano: ${data[i].year}</p>
                </div>
            `
    }
}

async function getBook(id) {
    const res = await fetch(`${API_URL}/livros/${id}`)
    const data = await res.json()

    console.log(res.status)

    container.innerHTML = `
                <div id="card" style="border: 1px solid ${data.avaible ? "green" : "red"}">
                    <div id="title">${data.title}</div >
                    <p>Ano: ${data.year}</p>
                    <p>Id do autor: ${data.authorId}</p>
                </div>
            `
}

async function getAuthor() {
    const res = await fetch(`${API_URL}/autores`)
    const data = await res.json()

    for (let i = 0; i < data.length; i++) {
        container.innerHTML += `
                <div id="card" style="border: 1px solid red">
                    <div id="title">${data[i].name}</div >
                    <p>Nacionalidade: ${data[i].nacionality}</p>
                </div>
            `
    }
}

getBook(3)