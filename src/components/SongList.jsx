export default function SongList({ songs, onSelect }) {
    return (
      <ul className="song-list">
        {songs.map((song, index) => (
          <li key={index} onClick={() => onSelect(song)}>{song.title}</li>
        ))}
      </ul>
    );
  }
  