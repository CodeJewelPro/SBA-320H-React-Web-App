import React, { useState, useEffect } from 'react'; // Import React and hooks
import { getCharacters } from './services/rickAndMortyServices'; // Fetch characters
import CharacterList from './components/CharacterList'; // Character list component 
import CharacterDetails from './components/CharacterDetails'; // Character details component
import Pagination from './components/Pagination'; // Pagination component 
import SearchBar from './components/SearchBar'; // Search bar component
import './styles.css';  // Import your custom styling 

function App() {
  // HOOKS
  const [characters, setCharacters] = useState([]); // Store character data
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Store selected character
  const [info, setInfo] = useState({}); // Store pagination info
  const [loading, setLoading] = useState(true);  // Track loading status 
  const [error, setError] = useState(null);  // Store any errors 

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchCharacters(); // Fetch all characters initially 
  }, []);

  // Function to fetch characters from the API 
  const fetchCharacters = async (url = 'https://rickandmortyapi.com/api/character') => {
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

  // Function to handle character selection 
  const handleCharacterSelection = (character) => {
    setSelectedCharacter(character);
  };

  // Function to handle pagination: fetch the previous page
  const handlePrevious = () => {
    if (info.prev) {
      fetchCharacters(info.prev);
    }
  };

  // Function to fetch the next page
  const handleNext = () => {
    if (info.next) {
      fetchCharacters(info.next);
    }
  };

  // Function to handle search functionality 
  const handleSearch = (searchTerm) => {
    fetchCharacters(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
  };

  // Render component
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && <p>Loading...</p>}  {/* Display loading state */}
        {error && <p className="error">{error}</p>}  {/* Display error message */}
        
        {!loading && !error && (
          <CharacterList
            characters={characters}
            onSelectCharacter={handleCharacterSelection}
          />
        )}
        
        <Pagination prev={info.prev} next={info.next} onPrevious={handlePrevious} onNext={handleNext} />
        
        <CharacterDetails character={selectedCharacter} />
      </header>
    </div>
  );
}

export default App;