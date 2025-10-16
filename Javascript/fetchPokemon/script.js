const container = document.getElementById('container')

const limit = 100

async function carregarPokemons() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const data = await response.json()

        for (let i = 0; i < data.results.length; i++) {
            const pokeResponse = await fetch(data.results[i].url);
            const pokeData = await pokeResponse.json()
            console.log(pokeData.sprites.front_default)

            const card = document.createElement('div')
            card.classList.add('pokemon')

            card.innerHTML = `
                <div class="pokemon-name">${pokeData.name.toUpperCase()}</div >
                <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}" id="pokeImg">
                <p>height: ${pokeData.height / 10}m | weight: ${pokeData.weight / 10}kg</p>
            `

            container.appendChild(card)
        }
    } catch (error) {
        console.log('Erro ao carregar os pokémons:', error)
    }
}

carregarPokemons()