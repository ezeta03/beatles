import React from 'react';
import styles from '../assets/sass/App.module.scss'

export default function SongList({ songs, onSelect, selectedSong }) {
  if (songs.length === 0) {
    return (
      <div className={styles.songListEmpty}>
        No se encontraron canciones con los filtros seleccionados.
      </div>
    );
  }
  
  return (
    <ul className={styles.songList}>
      {songs.map((song, index) => (
        <li 
          key={index} 
          onClick={() => onSelect(song)}
          className={selectedSong && selectedSong.title === song.title ? 'selected' : ''}
        >
          {song.title}
        </li>
      ))}
    </ul>
  );
}