import React, { useState, useEffect } from 'react';
import { getCharacters } from './services/rickAndMortyServices';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import './styles.css';  

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCharacters(url);
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      setError('Failed to fetch characters. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    if (info.prev) {
      fetchCharacters(info.prev);
    }
  };

  const handleNext = () => {
    if (info.next) {
      fetchCharacters(info.next);
    }
  };

  const handleSearch = (searchTerm) => {
    fetchCharacters(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && <p>Loading...</p>}  {/* Display loading state */}
        {error && <p className="error">{error}</p>}  {/* Display error message */}
        
        {!loading && !error && <CharacterList characters={characters} />}
        
        <Pagination prev={info.prev} next={info.next} onPrevious={handlePrevious} onNext={handleNext} />
        
        <CharacterDetails character={selectedCharacter} />
      </header>
    </div>
  );
}

export default App;