import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const College = () => {
  const navigate = useNavigate();
  const [selectedConference, setSelectedConference] = useState('all');

  const prospects = [
    { name: 'Player Name 1', school: 'Washington', conference: 'Pac-12', position: 'PG', class: 'Jr', nba_grade: 'A-', notes: 'NBA-ready point guard' },
    { name: 'Player Name 2', school: 'UCLA', conference: 'Pac-12', position: 'SF', class: 'So', nba_grade: 'B+', notes: 'High upside, still developing' },
    { name: 'Player Name 3', school: 'Gonzaga', conference: 'WCC', position: 'C', class: 'Jr', nba_grade: 'A', notes: 'Elite rim runner' },
    { name: 'Player Name 4', school: 'Oregon', conference: 'Pac-12', position: 'SG', class: 'Sr', nba_grade: 'B', notes: 'One-year wonder potential' },
    { name: 'Player Name 5', school: 'USC', conference: 'Pac-12', position: 'PF', class: 'Jr', nba_grade: 'B+', notes: 'NBA body, still raw' },
    { name: 'Player Name 6', school: 'Stanford', conference: 'Pac-12', position: 'G', class: 'So', nba_grade: 'A-', notes: 'Can play both guard spots' },
  ];

  const conferences = ['all', 'Pac-12', 'WCC', 'Big 10', 'ACC'];

  const filtered = selectedConference === 'all' ? prospects : prospects.filter(p => p.conference === selectedConference);

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <button onClick={() => navigate('/public/prospects')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Prospects</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🎓 College Prospects</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>D1 athletes with NBA draft potential</p>
      </div>

      {/* CONFERENCE FILTER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {conferences.map(conf => (
            <button
              key={conf}
              onClick={() => setSelectedConference(conf)}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                border: selectedConference === conf ? '2px solid #00B4FF' : '2px solid rgba(0,180,255,0.3)',
                background: selectedConference === conf ? 'rgba(0,180,255,0.2)' : 'transparent',
                color: '#00B4FF',
                fontWeight: '700',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {conf}
            </button>
          ))}
        </div>
      </div>

      {/* PROSPECTS TABLE */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ borderRadius: '12px', border: '2px solid rgba(0,180,255,0.3)', overflow: 'hidden', background: 'rgba(0,180,255,0.1)' }}>
          
          {/* HEADER ROW */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr 0.8fr 1.2fr', gap: '20px', padding: '20px', background: 'rgba(0,180,255,0.15)', borderBottom: '1px solid rgba(0,180,255,0.2)', fontWeight: '700', fontSize: '13px', color: '#00B4FF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <div>Player</div>
            <div>School</div>
            <div>Position</div>
            <div>Class</div>
            <div>NBA Grade</div>
            <div>Notes</div>
          </div>

          {/* DATA ROWS */}
          {filtered.map((prospect, idx) => (
            <div 
              key={idx}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1.5fr 1fr 1fr 0.8fr 0.8fr 1.2fr', 
                gap: '20px', 
                padding: '20px', 
                borderBottom: idx !== filtered.length - 1 ? '1px solid rgba(0,180,255,0.1)' : 'none',
                alignItems: 'center'
              }}
            >
              <div style={{ fontWeight: '700' }}>{prospect.name}</div>
              <div style={{ opacity: 0.85 }}>{prospect.school}</div>
              <div style={{ opacity: 0.85 }}>{prospect.position}</div>
              <div style={{ opacity: 0.85 }}>{prospect.class}</div>
              <div style={{ color: '#FFD700', fontWeight: '700' }}>{prospect.nba_grade}</div>
              <div style={{ opacity: 0.8, fontSize: '13px' }}>{prospect.notes}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;
