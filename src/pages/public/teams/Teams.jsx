import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // LAYER 1: Position Categories
  const positions = [
    { id: 1, name: 'Point Guards', emoji: '🎯', count: 24 },
    { id: 2, name: 'Shooting Guards', emoji: '🔫', count: 18 },
    { id: 3, name: 'Forwards', emoji: '💪', count: 22 },
  ];

  // LAYER 2: Players by Position
  const playersByPosition = {
    1: [
      { id: 101, name: 'Jalen Brooks', height: '6\'3"', class: '2026', grad: '2025', team: 'Elite AAU', rating: '⭐⭐⭐⭐⭐' },
      { id: 102, name: 'Marcus Thompson', height: '6\'1"', class: '2027', grad: '2026', team: 'Top Flight', rating: '⭐⭐⭐⭐' },
      { id: 103, name: 'DeShawn Carter', height: '6\'0"', class: '2026', grad: '2025', team: 'Elite AAU', rating: '⭐⭐⭐⭐' },
    ],
    2: [
      { id: 201, name: 'Tyler Johnson', height: '6\'5"', class: '2026', grad: '2025', team: 'Pro Pathway', rating: '⭐⭐⭐⭐⭐' },
      { id: 202, name: 'Alex Rodriguez', height: '6\'3"', class: '2027', grad: '2026', team: 'Elite AAU', rating: '⭐⭐⭐⭐' },
    ],
    3: [
      { id: 301, name: 'Brandon Williams', height: '6\'7"', class: '2026', grad: '2025', team: 'Top Flight', rating: '⭐⭐⭐⭐⭐' },
      { id: 302, name: 'Christian Lee', height: '6\'6"', class: '2027', grad: '2026', team: 'Pro Pathway', rating: '⭐⭐⭐⭐' },
    ],
  };

  // LAYER 3: Player Details
  const playerDetails = {
    101: {
      name: 'Jalen Brooks',
      position: 'Point Guard',
      height: '6\'3"',
      weight: '190 lbs',
      class: '2026',
      graduation: '2025',
      team: 'Elite AAU',
      college: 'Undecided',
      stats: { ppg: '18.5', apg: '6.2', rpg: '4.1', steals: '2.1' },
      highlights: 'Elite ball handler, court vision, athleticism, three-level scorer',
      bio: 'Jalen Brooks is one of the most complete guards in his class. With elite athleticism, a 6\'3" frame, and a complete offensive skill set, he\'s a priority target for top college programs. His ability to score at all three levels and facilitate for teammates makes him special.',
    },
    102: {
      name: 'Marcus Thompson',
      position: 'Point Guard',
      height: '6\'1"',
      weight: '185 lbs',
      class: '2027',
      graduation: '2026',
      team: 'Top Flight',
      college: 'Undecided',
      stats: { ppg: '16.3', apg: '5.8', rpg: '3.5', steals: '1.9' },
      highlights: 'Quick, intelligent, solid defender, high basketball IQ',
      bio: 'Marcus Thompson is an emerging talent showing elite potential. His basketball intelligence and defensive intensity set him apart from the competition.',
    },
  };

  // LAYER 3: Show Full Player Profile
  if (selectedPlayer) {
    const player = playerDetails[selectedPlayer];
    return (
      <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <button onClick={() => setSelectedPlayer(null)} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '30px' }}>← Back to Players</button>

          <div style={{ background: 'rgba(0,0,0,0.6)', border: '2px solid #00B4FF', borderRadius: '16px', padding: '40px' }}>
            <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#00B4FF', marginBottom: '8px' }}>{player.name}</h1>
            <div style={{ fontSize: '18px', opacity: 0.8, marginBottom: '30px' }}>{player.position} | {player.height} | {player.weight} | Class of {player.class}</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
              <div>
                <h3 style={{ color: '#00B4FF', fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>📊 Stats</h3>
                <div style={{ fontSize: '14px', opacity: 0.85 }}>
                  <div style={{ marginBottom: '10px' }}>PPG: <span style={{ color: '#00B4FF', fontWeight: '700' }}>{player.stats.ppg}</span></div>
                  <div style={{ marginBottom: '10px' }}>APG: <span style={{ color: '#00B4FF', fontWeight: '700' }}>{player.stats.apg}</span></div>
                  <div style={{ marginBottom: '10px' }}>RPG: <span style={{ color: '#00B4FF', fontWeight: '700' }}>{player.stats.rpg}</span></div>
                  <div>Steals: <span style={{ color: '#00B4FF', fontWeight: '700' }}>{player.stats.steals}</span></div>
                </div>
              </div>

              <div>
                <h3 style={{ color: '#00B4FF', fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>🎯 Details</h3>
                <div style={{ fontSize: '14px', opacity: 0.85 }}>
                  <div style={{ marginBottom: '10px' }}>Team: <span style={{ color: '#00B4FF', fontWeight: '700' }}>{player.team}</span></div>
                  <div style={{ marginBottom: '10px' }}>Graduation: <span style={{ color: '#00B4FF', fontWeight: '700' }}>Class of {player.graduation}</span></div>
                  <div>College: <span style={{ color: '#00B4FF', fontWeight: '700' }}>{player.college}</span></div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#00B4FF', fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>💪 Strengths</h3>
              <p style={{ opacity: 0.85, fontSize: '14px', lineHeight: '1.7', marginBottom: '30px' }}>{player.highlights}</p>

              <h3 style={{ color: '#00B4FF', fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>📖 Bio</h3>
              <p style={{ opacity: 0.85, fontSize: '14px', lineHeight: '1.7' }}>{player.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // LAYER 2: Show Players by Position
  if (selectedPosition) {
    const position = positions.find(p => p.id === selectedPosition);
    return (
      <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <button onClick={() => setSelectedPosition(null)} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '30px' }}>← Back to Positions</button>
          
          <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#00B4FF', marginBottom: '30px' }}>{position.emoji} {position.name}</h1>

          <div style={{ display: 'grid', gap: '15px' }}>
            {playersByPosition[selectedPosition]?.map(player => (
              <div
                key={player.id}
                onClick={() => setSelectedPlayer(player.id)}
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(0,180,255,0.3)',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: '0.3s',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00B4FF';
                  e.currentTarget.style.background = 'rgba(0,180,255,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,180,255,0.3)';
                  e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
                }}
              >
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#00B4FF', marginBottom: '5px' }}>{player.name}</h3>
                  <div style={{ fontSize: '13px', opacity: 0.7 }}>{player.height} | {player.team} | Class of {player.class}</div>
                </div>
                <div style={{ fontSize: '16px' }}>{player.rating}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // LAYER 1: Show Positions
  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '30px' }}>← Back to Home</button>
        
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🏀 Elite Players</h1>
        <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '40px' }}>Browse elite prospects by position</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {positions.map(pos => (
            <div
              key={pos.id}
              onClick={() => setSelectedPosition(pos.id)}
              style={{
                background: 'rgba(0,0,0,0.6)',
                border: '2px solid #00B4FF',
                borderRadius: '16px',
                padding: '30px',
                cursor: 'pointer',
                transition: '0.3s',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#00FFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#00B4FF';
              }}
            >
              <div style={{ fontSize: '42px', marginBottom: '15px' }}>{pos.emoji}</div>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#00B4FF', marginBottom: '8px' }}>{pos.name}</h2>
              <p style={{ fontSize: '14px', opacity: 0.8 }}>{pos.count} Players</p>
              <button style={{ background: '#00B4FF', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '15px' }}>View →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;