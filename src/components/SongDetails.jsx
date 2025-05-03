import React from 'react';
import styles from '../assets/sass/App.module.scss'

const SongDetails = ({ selectedSong }) => {
  if (!selectedSong) return <div className={styles.songDetails}>Selecciona una canción.</div>;

  return (
    <div className={styles.songDetails}>
      <h2>{selectedSong.title}</h2>
      <h4>{selectedSong.composer}</h4>
      <p><strong>Bloque:</strong> {selectedSong.block}</p>
      <div className={styles.lyrics}>
        {selectedSong.lyrics
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </div>
    </div>
  );
};

export default SongDetails;
