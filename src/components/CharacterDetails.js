import React from 'react'; //Import react


//displays info  of a selected character
const CharacterDetails = ({ character }) => {
  if (!character) return <div>Select a character to see details</div>;
// Prompt user to select a character if they none is selected.
  return (
    <div className="character-details">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

export default CharacterDetails;