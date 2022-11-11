import { useEffect, useState } from "react";
import { Card } from "../../components/card/card.js";
import { Api } from "../../helpers/Api";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function Home() {
  const [characters, setCharacter] = useState([]);
  const [characterId, setId] = useState({});
  const [modalAberto, setModalAberto] = useState(false);

  async function getCharacter() {
    const allChar = await Api.getCharacters();
    setCharacter(allChar);
  }

  function handleModal() {
    setModalAberto(!modalAberto);
  }

  useEffect(() => {
    getCharacter();
  }, [characters]);

  return (
    <>
      <div>
        {characters.map((char, index) => {
          return (
            <>
              <button
                onClick={() => {
                  handleModal();
                  setId(char);
                  console.log(char);
                }}
                key={index}
              >
                <Card
                  key={index}
                  imageUrl={char.imageUrl}
                  name={char.name}
                  films={char.films.length}
                  shortFilms={char.shortFilms.length}
                  tvShows={char.tvShows.length}
                />
              </button>
            </>
          );
        })}
      </div>
      <Modal
        isOpen={modalAberto}
        onRequestClose={handleModal}

      >
        <div className="card-Modal">
          <section>
            <h3>Name: </h3>
            <p>{characterId.name}</p>
          </section>
          <img src={characterId.imageUrl} alt={characterId.name} />
          <section >
            <h3>Filmes: </h3>
            <p>{characterId.films}</p>
          </section>
          <section >
            <h3>Curta-metragens: </h3>
            <p>{characterId.shortFilms}</p>
          </section>
          <section>
            <h3>Programas de TV: </h3>
            <p>{characterId.tvShows}</p>
          </section>
        </div>
      </Modal>
    </>
  );
}
