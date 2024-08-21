import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, onSelectCharacter }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} onSelectCharacter={onSelectCharacter} />
      ))}
    </div>
  );
};

export default CharacterList;