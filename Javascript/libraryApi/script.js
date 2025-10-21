const API_URL = 'http://localhost:3000'
const container = document.getElementById("container")


function clearContainer() {
    container.innerHTML = ''
}

async function getBooks() {
    const res = await fetch(`${API_URL}/livros`)
    const data = await res.json()

    clearContainer()

    for (let i = 0; i < data.length; i++) {
        container.innerHTML += `
        <div id="card" style="border: 1px solid ${data[i].avaible ? "green" : "red"}">
        <div id="title">${data[i].title}</div >
        <p>Ano: ${data[i].year}</p>
        <p>Id: ${data[i].id}</p>
        </div>
        `
    }
}

async function getBook() {
    const bookId = document.getElementById("bookId").value

    const res = await fetch(`${API_URL}/livros/${bookId}`)
    const data = await res.json()

    clearContainer()

    container.innerHTML = `
                <div id="card" style="border: 1px solid ${data.avaible ? "green" : "red"}">
                    <div id="title">${data.title}</div >
                    <p>Ano: ${data.year}</p>
                    <p>Id do autor: ${data.authorId}</p>
                </div>
            `
}

async function getAuthors() {
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

async function getAuthor(id) {
    const res = await fetch(`${API_URL}/autores/${id}`)
    const data = await res.json()

    container.innerHTML = `
                <div id="card" style="border: 1px solid red">
                    <div id="title">${data.name}</div >
                    <p>Nacionalidade: ${data.nacionality}</p>
                </div>
            `
}

async function addBook() {
    const bookTitle = document.getElementById("bookTitle").value
    const bookYear = document.getElementById("bookYear").value
    const bookAvaible = document.getElementById("bookAvaible").value

    const newBook = {
        "title": bookTitle,
        "authorId": 2,
        "year": bookYear,
        "avaible": bookAvaible
    }

    const res = await fetch(`${API_URL}/livros`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook)
    })

    if (res.ok) {
        alert('Livro adicionado com sucesso!')
    } else {
        alert('Falha ao adicionar o livro!')
    }
}

async function deleteBook() {
    const bookId = document.getElementById("bookId").value

    const res = await fetch(`${API_URL}/livros/${bookId}`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" }
    })

    if (res.ok) {
        alert('Livro deletado com sucesso!')
    } else {
        alert('Falha ao deletar o livro!')
    }

    getBooks()
}

async function updateBook() {
    const bookId = document.getElementById("bookId").value
    const bookTitle = document.getElementById("bookTitle").value
    const bookYear = document.getElementById("bookYear").value
    const bookAvaible = document.getElementById("bookAvaible").value

    const newBook = {
        "title": bookTitle,
        "authorId": 2,
        "year": bookYear,
        "avaible": bookAvaible
    }

    const res = await fetch(`${API_URL}/livros/${bookId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook)
    })

    if (res.ok) {
        alert('Livro atualizado com sucesso!')
    } else {
        alert('Falha ao adicionar o livro!')
    }
}