import React from 'react'; // Import React
import CharacterCard from './CharacterCard'; // Import the CharacterCard component

// Renders a list of characters
const CharacterList = ({ characters, onSelectCharacter }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard
          key={character.id} // Unique key for each character
          character={character} // Pass character data as a prop
          onSelectCharacter={onSelectCharacter} // Pass the character selection handler as a prop
        />
      ))}
    </div>
  );
};

export default CharacterList;