import React, { useState } from 'react';

const TopGuardsPNW = () => {
  const [guards] = useState([
    { id: 1, rank: 1, name: 'Jalen Brooks', height: '6\'3"', class: '2028', rating: 4.8, school: 'Seattle Select', stats: 'PPG: 18.5 | APG: 7.2 | SPG: 2.1' },
    { id: 2, rank: 2, name: 'Tyler Brown', height: '5\'11"', class: '2027', rating: 4.6, school: 'Portland Elite', stats: 'PPG: 16.3 | APG: 8.1 | SPG: 2.5' },
    { id: 3, rank: 3, name: 'Marcus Washington', height: '6\'1"', class: '2026', rating: 4.5, school: 'Spokane Hoops', stats: 'PPG: 15.8 | APG: 6.9 | SPG: 1.9' },
    { id: 4, rank: 4, name: 'Devon Garcia', height: '5\'10"', class: '2027', rating: 4.4, school: 'Vancouver BC', stats: 'PPG: 14.2 | APG: 7.8 | SPG: 2.3' },
    { id: 5, rank: 5, name: 'Chris Anderson', height: '6\'2"', class: '2028', rating: 4.3, school: 'Tacoma Thunder', stats: 'PPG: 13.5 | APG: 6.5 | SPG: 1.7' },
  ]);

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <h1 style={{ fontSize: '42px', fontWeight: '900', background: 'linear-gradient(90deg, #00B4FF, #0088CC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '40px' }}>🏀 Top Guards PNW</h1>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {guards.map(guard => (
          <div key={guard.id} style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '15px', display: 'grid', gridTemplateColumns: '80px 1fr 150px', gap: '20px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', fontSize: '36px', fontWeight: '900', color: '#00B4FF' }}>#{guard.rank}</div>
            <div>
              <h3 style={{ color: '#00B4FF', fontSize: '20px', marginBottom: '8px' }}>{guard.name}</h3>
              <p style={{ opacity: 0.9, marginBottom: '4px' }}><strong>School:</strong> {guard.school}</p>
              <p style={{ opacity: 0.9, marginBottom: '4px' }}><strong>Class:</strong> {guard.class}</p>
              <p style={{ opacity: 0.8, fontSize: '13px' }}>{guard.stats}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: '#00B4FF', fontSize: '24px', fontWeight: '900', marginBottom: '8px' }}>⭐ {guard.rating}</p>
              <button style={{ background: 'linear-gradient(90deg, #00B4FF, #0088CC)', color: '#000', padding: '8px 16px', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', width: '100%' }}>View Film</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGuardsPNW;