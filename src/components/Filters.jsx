export default function Filters({ setFilter }) {
    return (
      <div className="filters">
        <select onChange={(e) => setFilter({ type: "block", value: e.target.value })}>
          <option value="All">Todos los Bloques</option>
          <option value="Primera Parte">Primera Parte</option>
          <option value="Rolas">Rolas</option>
          <option value="Teclas">Teclas</option>
          <option value="Antología">Antología</option>
          <option value="George Harrison">George Harrison</option>
          <option value="Segunda Parte">Segunda Parte</option>
          <option value="Final">Final</option>
        </select>
        <select onChange={(e) => setFilter({ type: "composer", value: e.target.value })}>
          <option value="All">Todos los Compositores</option>
          <option value="Lennon/McCartney">Lennon/McCartney</option>
          <option value="George Harrison">George Harrison</option>
          <option value="The Beatles">The Beatles</option>
          <option value="Meredith Willson">Otros</option>
        </select>
      </div>
    );
  }
  