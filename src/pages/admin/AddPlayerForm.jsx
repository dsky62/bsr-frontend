import React, { useState } from 'react';

const AddPlayerForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [jerseyNumber, setJerseyNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const playerData = { name, position, height, weight, jerseyNumber };
    // Logic to handle player data submission goes here
    console.log(playerData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Position:</label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
      </div>
      <div>
        <label>Height (in cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />
      </div>
      <div>
        <label>Weight (in kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
      </div>
      <div>
        <label>Jersey Number:</label>
        <input type="number" value={jerseyNumber} onChange={(e) => setJerseyNumber(e.target.value)} required />
      </div>
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayerForm;