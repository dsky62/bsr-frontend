import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HighSchool = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('2026');

  const prospects = {
    '2026': [
      { rank: 1, name: 'Jalen Brooks', school: 'PNW Elite', height: '6\'3"', position: 'PG', rating: 4.8, offers: 12, top3: ['Washington', 'UCLA', 'Oregon'] },
      { rank: 2, name: 'Tyson Davis', school: 'Rain City Hoops', height: '6\'7"', position: 'SF', rating: 4.5, offers: 8, top3: ['Oregon', 'Stanford', 'Washington St'] },
      { rank: 3, name: 'Marcus Johnson', school: 'Seattle Select', height: '6\'5"', position: 'SG', rating: 4.3, offers: 7, top3: ['USC', 'Arizona', 'Oregon'] },
      { rank: 4, name: 'Devon Garcia', school: 'Spokane Elite', height: '5\'10"', position: 'PG', rating: 4.2, offers: 6, top3: ['Gonzaga', 'Washington', 'Oregon'] },
    ],
    '2027': [
      { rank: 1, name: 'Tyler Brown', school: 'Portland Elite', height: '5\'11"', position: 'PG', rating: 4.6, offers: 5, top3: ['Oregon', 'Washington', 'UCLA'] },
      { rank: 2, name: 'Chris Anderson', school: 'Tacoma Thunder', height: '6\'2"', position: 'SG', rating: 4.4, offers: 4, top3: ['Washington', 'Oregon State', 'WSU'] },
      { rank: 3, name: 'Brandon Miller', school: 'Seattle Select', height: '6\'8"', position: 'SF', rating: 4.1, offers: 3, top3: ['Stanford', 'Cal', 'Oregon'] },
    ],
    '2028': [
      { rank: 1, name: 'Jordan Lee', school: 'PNW Elite', height: '6\'9"', position: 'C', rating: 4.3, offers: 2, top3: ['Washington', 'Oregon', 'UCLA'] },
      { rank: 2, name: 'Alex Rodriguez', school: 'Seattle Prep', height: '6\'1"', position: 'PG', rating: 4.0, offers: 1, top3: ['Gonzaga', 'Washington', 'Portland'] },
    ],
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <button onClick={() => navigate('/public/prospects')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Prospects</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🏫 High School Prospects</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>Elite HS players with D1 and professional potential</p>
      </div>

      {/* CLASS FILTER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          {['2026', '2027', '2028'].map(year => (
            <button
              key={year}
              onClick={() => setSelectedClass(year)}
              style={{
                padding: '12px 28px',
                borderRadius: '8px',
                border: selectedClass === year ? '2px solid #00B4FF' : '2px solid rgba(0,180,255,0.3)',
                background: selectedClass === year ? 'rgba(0,180,255,0.2)' : 'transparent',
                color: '#00B4FF',
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

      {/* PROSPECTS LIST */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {prospects[selectedClass].map(prospect => (
          <div 
            key={prospect.rank}
            style={{
              borderRadius: '12px',
              border: '2px solid rgba(0,180,255,0.3)',
              padding: '25px',
              marginBottom: '20px',
              background: 'rgba(0,180,255,0.1)',
              display: 'grid',
              gridTemplateColumns: '60px 1fr 200px 150px',
              gap: '20px',
              alignItems: 'center'
            }}
          >
            {/* RANK */}
            <div style={{ fontSize: '28px', fontWeight: '900', color: '#00B4FF', textAlign: 'center' }}>
              #{prospect.rank}
            </div>

            {/* INFO */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '8px' }}>{prospect.name}</h3>
              <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '6px' }}>{prospect.school}</p>
              <p style={{ fontSize: '13px', opacity: 0.7 }}>{prospect.height} • {prospect.position}</p>
            </div>

            {/* RATING & OFFERS */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: '900', color: '#FFD700', marginBottom: '8px' }}>⭐ {prospect.rating}</div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>{prospect.offers}+ Offers</div>
            </div>

            {/* TOP 3 */}
            <div style={{ fontSize: '12px', opacity: 0.85 }}>
              <div style={{ color: '#00B4FF', fontWeight: '700', marginBottom: '4px' }}>Top Schools:</div>
              {prospect.top3.map((school, idx) => (
                <div key={idx}>{idx + 1}. {school}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighSchool;