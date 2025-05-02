// src/components/SongDetails.jsx
import { useEffect, useState } from "react";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[’']/g, "") // quitar comillas
    .replace(/[^a-z0-9]+/g, "-") // reemplazar cualquier cosa no alfanumérica por guión
    .replace(/(^-|-$)/g, ""); // quitar guiones iniciales/finales
}

export default function SongDetails({ song }) {
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    const fetchLyrics = async () => {
      if (!song) return;
      const filename = slugify(song.title);
      try {
        const response = await fetch(`/data/${filename}.txt`);
        if (!response.ok) throw new Error("No encontrado");
        const text = await response.text();
        setLyrics(text);
      } catch (err) {
        setLyrics("Letra no disponible.");
      }
    };

    fetchLyrics();
  }, [song]);

  if (!song) return <div>Selecciona una canción</div>;

  return (
    <div className="song-details">
      <h2>{song.order}. {song.title}</h2>
      <h4>{song.composer}</h4>
      <pre>{lyrics}</pre>
    </div>
  );
}
