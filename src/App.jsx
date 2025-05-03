import React, { useState, useEffect } from 'react';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';
import Filters from './components/Filters';
import songsData from './data/songs.json';
import styles from './assets/sass/App.module.scss'

function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [blockFilter, setBlockFilter] = useState('Todos');
  const [composerFilter, setComposerFilter] = useState('Todos');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar canciones y simular tiempo de carga
    setTimeout(() => {
      setSongs(songsData);
      setFilteredSongs(songsData);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    // Aplicar filtros cuando cambien
    let result = [...songs];
    
    if (blockFilter !== 'Todos') {
      result = result.filter(song => song.block === blockFilter);
    }
    
    if (composerFilter !== 'Todos') {
      result = result.filter(song => song.composer === composerFilter);
    }
    
    setFilteredSongs(result);
  }, [blockFilter, composerFilter, songs]);

  // Extraer bloques únicos para el filtro
  const blocks = ['Todos', ...new Set(songs.map(song => song.block))];
  
  // Extraer compositores únicos para el filtro
  const composers = ['Todos', ...new Set(songs.map(song => song.composer))];

  const handleSelectSong = (song) => {
    setSelectedSong(song);
    
    // En dispositivos móviles, desplazar hacia los detalles
    if (window.innerWidth <= 768) {
      document.querySelector('.right-panel')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loader}>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <path d="M25,5 A20,20 0 0,1 45,25" stroke="#1d75de" strokeWidth="5" fill="none" strokeLinecap="round">
              <animateTransform 
                attributeName="transform" 
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite" />
            </path>
          </svg>
          <p>Cargando repertorio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <h1>Repertorio de The Beatles</h1>
      
      <Filters 
        blocks={blocks}
        composers={composers}
        blockFilter={blockFilter}
        composerFilter={composerFilter}
        setBlockFilter={setBlockFilter}
        setComposerFilter={setComposerFilter}
      />
      
      <div className={styles.content}>
        <div className={styles.leftPanel}>
          <SongList 
            songs={filteredSongs} 
            onSelect={handleSelectSong} 
            selectedSong={selectedSong}
          />
        </div>
        <div className={styles.rightPanel}>
          <SongDetails selectedSong={selectedSong} />
        </div>
      </div>
    </div>
  );
}

export default App;