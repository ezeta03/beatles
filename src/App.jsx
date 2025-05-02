import React, { useState } from "react";
import './assets/sass/App.module.scss'; // Si estás usando SCSS, asegúrate de importar los estilos

// Lista de canciones (simulada, en producción esta data vendría de un archivo JSON)
const songs = [
  { "order": 1, "title": "Day Tripper" },
  { "order": 2, "title": "Hello Goodbye" },
  { "order": 3, "title": "Eight Days a Week" },
  { "order": 4, "title": "We Can Work It Out" },
];

function App() {
  const [lyrics, setLyrics] = useState(""); // Guardar la letra de la canción seleccionada

  const fetchLyrics = async (songTitle) => {
    const songFileName = songTitle.toLowerCase().replace(/\s+/g, "_"); // Convertir el nombre de la canción a formato adecuado
    try {
      const response = await fetch(`/data/${songFileName}.txt`); // Buscar el archivo de texto en public/data/
      if (response.ok) {
        const text = await response.text();
        setLyrics(text); // Almacenar la letra en el estado
      } else {
        setLyrics("No se pudo cargar la letra de la canción.");
      }
    } catch (error) {
      setLyrics("Hubo un error al cargar la letra.");
    }
  };

  return (
    <div className="App">
      <h1>Lista de Canciones de The Beatles</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.order} onClick={() => fetchLyrics(song.title)}>
            {song.title}
          </li>
        ))}
      </ul>

      <div className="lyrics">
        <h2>Letra de la Canción</h2>
        <pre>{lyrics}</pre>
      </div>
    </div>
  );
}

export default App;
