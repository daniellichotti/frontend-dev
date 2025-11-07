import { useEffect, useState } from "react"
import { RingLoader } from "react-spinners";
import { ButtonsContainer, CharCards, CharCardsContainer, Container } from "./styled";

export function FetchDbz() {
    const [characters, setCharacters] = useState(1)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    function PrevPage() {
        setPage(page - 1)
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function NextPage() {
        setPage(page + 1)
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    useEffect(() => {
        async function fetchApi() {
            try {
                const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=20`)
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
    }, [page])

    if (loading) {
        return (
            <Container style={{ height: '100vh' }}>
                <RingLoader
                    color="#2b00ff"
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

            <ButtonsContainer>
                <button onClick={PrevPage}>{'<'}</button>
                <p>{page}</p>
                <button onClick={NextPage}>{'>'}</button>
            </ButtonsContainer>
        </Container >
    )
};
