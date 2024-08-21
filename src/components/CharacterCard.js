import React from 'react';

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