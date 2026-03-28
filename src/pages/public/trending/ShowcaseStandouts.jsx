import React, { useState } from 'react';

const ShowcaseStandouts = () => {
  const [standouts] = useState([
    { id: 1, name: 'Kobe Martinez', height: '6\'4"', position: 'SG', event: 'Elite 32 Showcase', rating: 4.9, performance: 'MVP Performance - 28 PPG, 6 APG' },
    { id: 2, name: 'DeShawn Wilson', height: '6\'8"', position: 'PF', event: 'Nike Global Camp', rating: 4.7, performance: 'Outstanding athleticism - elite rim protection' },
    { id: 3, name: 'Tyler Brown', height: '5\'11"', position: 'PG', event: 'AAU Summer Circuit', rating: 4.6, performance: 'Exceptional ball security and court vision' },
    { id: 4, name: 'Jordan Lee', height: '6\'9"', position: 'C', event: 'Elite 32 Showcase', rating: 4.5, performance: 'Dominant inside presence - 15 RPG' },
  ]);

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <h1 style={{ fontSize: '42px', fontWeight: '900', background: 'linear-gradient(90deg, #00B4FF, #0088CC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '40px' }}>🌟 Showcase Standouts</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {standouts.map(player => (
          <div key={player.id} style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ background: 'rgba(255,215,0,0.2)', padding: '8px', borderRadius: '6px', marginBottom: '12px', textAlign: 'center' }}>
              <p style={{ color: '#FFD700', fontWeight: '700', margin: 0 }}>⭐ Showcase MVP</p>
            </div>
            <h3 style={{ color: '#00B4FF', fontSize: '20px', marginBottom: '10px' }}>{player.name}</h3>
            <p style={{ opacity: 0.9, marginBottom: '8px' }}><strong>Height:</strong> {player.height}</p>
            <p style={{ opacity: 0.9, marginBottom: '8px' }}><strong>Position:</strong> {player.position}</p>
            <p style={{ opacity: 0.9, marginBottom: '8px' }}><strong>Event:</strong> {player.event}</p>
            <p style={{ opacity: 0.9, marginBottom: '8px' }}><strong>Rating:</strong> ⭐ {player.rating}/5.0</p>
            <p style={{ opacity: 0.8, fontSize: '14px', marginBottom: '15px', color: '#FFD700' }}>{player.performance}</p>
            <button style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500)', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', width: '100%' }}>🎥 Watch Performance</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseStandouts;
