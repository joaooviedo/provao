import "./card.css";

export function Card({ imageUrl, name, films, shortFilms, tvShows }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <section className="foto">
        <img srcSet={imageUrl} alt={""} />
      </section>

      <section className="char">
        <h2>Programas de TV:</h2>
        <h3>{tvShows}</h3>
      </section>
      <section className="char">
        <h2>Filmes</h2>
        <h3>{films}</h3>
      </section>
      <section className="char">
        <h2>Curta metragens:</h2>
        <h3>{shortFilms}</h3>
      </section>
    </div>
  );
}
