import React from 'react'; // Import react

// Displays a single character's basic info
const CharacterCard = ({ character,onSelectCharacter }) => {
  return (
    <div className="character-card" onClick={()=> onSelectCharacter(character)}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

export default CharacterCard;