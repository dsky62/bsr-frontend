import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Commits = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('2026');

  const commits = {
    '2026': [
      { name: 'Prospect Name 1', school: 'Washington', position: 'PG', height: '6\'2"', rating: 4.8, committed_date: '11/15/2025', status: 'Signed' },
      { name: 'Prospect Name 2', school: 'UCLA', position: 'SF', height: '6\'7"', rating: 4.5, committed_date: '10/22/2025', status: 'Signed' },
      { name: 'Prospect Name 3', school: 'Oregon', position: 'SG', height: '6\'4"', rating: 4.3, committed_date: '09/18/2025', status: 'Signed' },
    ],
    '2027': [
      { name: 'Prospect Name 4', school: 'Gonzaga', position: 'C', height: '6\'10"', rating: 4.2, committed_date: '12/01/2025', status: 'Committed' },
      { name: 'Prospect Name 5', school: 'Stanford', position: 'PG', height: '6\'1"', rating: 4.0, committed_date: '11/28/2025', status: 'Committed' },
    ],
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <button onClick={() => navigate('/public/prospects')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Prospects</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>✅ Committed Prospects</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>High school players who have committed to D1 programs</p>
      </div>

      {/* CLASS FILTER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          {['2026', '2027'].map(year => (
            <button
              key={year}
              onClick={() => setSelectedClass(year)}
              style={{
                padding: '12px 28px',
                borderRadius: '8px',
                border: selectedClass === year ? '2px solid #FFD700' : '2px solid rgba(255,215,0,0.3)',
                background: selectedClass === year ? 'rgba(255,215,0,0.2)' : 'transparent',
                color: '#FFD700',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Class of {year}
            </button>
          ))}
        </div>
      </div>

      {/* COMMITS CARDS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          {commits[selectedClass].map((commit, idx) => (
            <div 
              key={idx}
              style={{
                borderRadius: '12px',
                border: '2px solid rgba(255,215,0,0.3)',
                padding: '25px',
                background: 'rgba(255,215,0,0.1)',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFD700';
                e.currentTarget.style.background = 'rgba(255,215,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)';
                e.currentTarget.style.background = 'rgba(255,215,0,0.1)';
              }}
            >
              {/* STATUS BADGE */}
              <div style={{ display: 'inline-block', background: '#FFD700', color: '#000', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', marginBottom: '15px' }}>
                {commit.status}
              </div>

              {/* NAME & BASICS */}
              <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '8px' }}>{commit.name}</h3>
              <p style={{ fontSize: '14px', opacity: 0.85, marginBottom: '15px' }}>
                {commit.height} • {commit.position}
              </p>

              {/* SCHOOL & RATING */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>School</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#FFD700' }}>{commit.school}</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>Rating</div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#FFD700' }}>⭐ {commit.rating}</div>
                </div>
              </div>

              {/* COMMITTED DATE */}
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', textAlign: 'center', fontSize: '12px', opacity: 0.8 }}>
                Committed: {commit.committed_date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commits;
