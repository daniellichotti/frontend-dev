import { useEffect, useState } from "react"
import { RingLoader } from "react-spinners";
import { CharCards, CharCardsContainer, Container } from "./styled";

export function FetchDbz() {
    const [characters, setCharacters] = useState(1)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)


    useEffect(() => {
        async function fetchApi() {
            try {
                const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=40`)
                const data = await res.json()
                setCharacters(data.items)
            } catch (error) {
                console.log('Erro ao buscar os personagens: ', error)
            } finally {
                await new Promise((res) => setTimeout(res, 2000));
                setLoading(false)
            }
        }

        fetchApi()
    }, [])

    if (loading) {
        return (
            <Container>
                <RingLoader
                    color="#ff6600"
                    loading={loading}
                    size={50}
                />
            </Container>
        )
    }

    return (
        <Container>
            <h1>Personagens do DBZ</h1>
            <CharCardsContainer>
                {characters.map((character) => (
                    <CharCards key={character.id}>
                        <img src={character.image} alt="" />
                        <h2>{character.name}</h2>
                        <p><strong>Ki: </strong>{character.ki}</p>
                        <p><strong>Race: </strong>{character.race}</p>
                    </CharCards>
                ))}
            </CharCardsContainer>
            <div>
                <button>{'<'}</button>
                <p>{page}</p>
                <button>{'>'}</button>
            </div>
        </Container>
    )
};
