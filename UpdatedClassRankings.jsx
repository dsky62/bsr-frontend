import React, { useState } from 'react';

const UpdatedClassRankings = () => {
  const [selectedClass, setSelectedClass] = useState('2028');
  
  const rankings = {
    '2028': [
      { rank: 1, name: 'Jalen Brooks', position: 'PG', rating: 4.8, height: '6\'3"' },
      { rank: 2, name: 'Tyson Davis', position: 'SF', rating: 4.5, height: '6\'7"' },
      { rank: 3, name: 'Marcus Johnson', position: 'SG', rating: 4.3, height: '6\'5"' },
    ],
    '2027': [
      { rank: 1, name: 'Tyler Brown', position: 'PG', rating: 4.6, height: '5\'11"' },
      { rank: 2, name: 'DeShawn Wilson', position: 'PF', rating: 4.7, height: '6\'8"' },
      { rank: 3, name: 'Jordan Lee', position: 'C', rating: 4.5, height: '6\'9"' },
    ],
    '2026': [
      { rank: 1, name: 'Marcus Washington', position: 'PG', rating: 4.5, height: '6\'1"' },
      { rank: 2, name: 'Chris Anderson', position: 'SG', rating: 4.4, height: '6\'2"' },
      { rank: 3, name: 'Brandon Miller', position: 'SF', rating: 4.3, height: '6\'8"' },
    ],
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <h1 style={{ fontSize: '42px', fontWeight: '900', background: 'linear-gradient(90deg, #00B4FF, #0088CC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '40px' }}>📊 Updated Class Rankings</h1>
      
      <div style={{ marginBottom: '30px', display: 'flex', gap: '12px' }}>
        {['2028', '2027', '2026'].map(year => (
          <button 
            key={year}
            onClick={() => setSelectedClass(year)}
            style={{ 
              padding: '12px 24px', 
              background: selectedClass === year ? 'linear-gradient(90deg, #00B4FF, #0088CC)' : 'rgba(0,180,255,0.1)',
              border: '2px solid #00B4FF',
              borderRadius: '8px',
              color: selectedClass === year ? '#000' : '#00B4FF',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Class of {year}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: '900px' }}>
        {rankings[selectedClass].map(player => (
          <div key={player.rank} style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '12px', padding: '20px', marginBottom: '15px', display: 'grid', gridTemplateColumns: '60px 1fr 100px', gap: '20px', alignItems: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '900', color: '#00B4FF', textAlign: 'center' }}>#{player.rank}</div>
            <div>
              <h3 style={{ color: '#00B4FF', fontSize: '18px', marginBottom: '6px' }}>{player.name}</h3>
              <p style={{ opacity: 0.9, marginBottom: '4px' }}><strong>{player.position}</strong> | {player.height}</p>
            </div>
            <div style={{ textAlign: 'center', fontSize: '28px', color: '#00B4FF', fontWeight: '900' }}>⭐{player.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatedClassRankings;
