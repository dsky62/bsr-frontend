import React, { useState, useEffect } from 'react';

const FreshmenToWatch = () => {
  const [freshmen, setFreshmen] = useState([
    { id: 1, name: 'Jalen Brooks', height: '6\'3"', position: 'PG', class: '2028', rating: 4.8, bio: 'Elite ball handler with great size for a point guard.' },
    { id: 2, name: 'Tyson Davis', height: '6\'7"', position: 'SF', class: '2028', rating: 4.5, bio: 'Excellent athlete with great upside.' },
    { id: 3, name: 'Marcus Johnson', height: '6\'5"', position: 'SG', class: '2028', rating: 4.3, bio: 'Strong shooter with good court vision.' },
  ]);

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <h1 style={{ fontSize: '42px', fontWeight: '900', background: 'linear-gradient(90deg, #00B4FF, #0088CC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '40px' }}>👀 Freshmen to Watch</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {freshmen.map(player => (
          <div key={player.id} style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ color: '#00B4FF', fontSize: '20px', marginBottom: '10px' }}>{player.name}</h3>
            <p style={{ opacity: 0.9, marginBottom: '8px' }}><strong>Height:</strong> {player.height}</p>
            <p style={{ opacity: 0.9, marginBottom: '8px' }}><strong>Position:</strong> {player.position}</p>
            <p style={{ opacity: 0.9, marginBottom: '8px' }}><strong>Class:</strong> {player.class}</p>
            <p style={{ opacity: 0.9, marginBottom: '8px' }}><strong>Rating:</strong> ⭐ {player.rating}/5.0</p>
            <p style={{ opacity: 0.8, fontSize: '14px', marginBottom: '15px' }}>{player.bio}</p>
            <button style={{ background: 'linear-gradient(90deg, #00B4FF, #0088CC)', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', width: '100%' }}>📺 View Highlights</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreshmenToWatch;