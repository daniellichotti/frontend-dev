import { useEffect, useState } from "react"
import { RingLoader } from "react-spinners";
import { ButtonsContainer, CharCards, CharCardsContainer, Container, InfoContainer, Modal, ModalBackground } from "./styled";

export function FetchDbz() {
    const [characters, setCharacters] = useState(1)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    const [selectedCharacterImage, setSelectedCharacterImage] = useState(null)
    const [selectedCharacterId, setSelectedCharacterId] = useState(1)

    function PrevPage() {
        if (page === 1) {
            alert('Não é possivel voltar!')
            return
        }
        setPage(page - 1)
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function NextPage() {
        setPage(page + 1)
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function SetCharacterSelection(character) {
        setSelectedCharacterId(character.id)
    }

    useEffect(() => {
        async function fetchApiByID() {
            try {
                const res = await fetch(`https://dragonball-api.com/api/characters/${selectedCharacterId}`)
                const data = await res.json()
                //Verificar se existe a transofrmação antes de setar
                setSelectedCharacter(data)
            } catch (error) {
                console.log('Erro ao buscar os personagens: ', error)
            } finally {
                await new Promise((res) => setTimeout(res, 2000));
                setLoading(false)
            }
        }

        fetchApiByID()
    }, [selectedCharacterId])


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
                    <CharCards onClick={() => { SetCharacterSelection(character) }} key={character.id}>
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


            {selectedCharacter && (
                <ModalBackground onClick={() => { setSelectedCharacter(null) }}>
                    <Modal>
                        <img src={selectedCharacter.transformations[2].image} alt="" />
                        <InfoContainer>
                            <h2>Name: {selectedCharacter.name}</h2>
                            <h2>Gender: {selectedCharacter.gender}</h2>
                            <p><strong>Race: </strong>{selectedCharacter.race}</p>
                            <p><strong>Ki: </strong>{selectedCharacter.ki}</p>
                            <p><strong>Ki: </strong>{selectedCharacter.maxKi}</p>
                            <p><strong>Description: </strong>{selectedCharacter.description}</p>
                            <p><strong>Planet: </strong>{selectedCharacter.originPlanet.name}</p>
                        </InfoContainer>
                    </Modal>
                </ModalBackground>
            )}

        </Container >
    )
};
