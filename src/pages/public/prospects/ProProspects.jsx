
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProProspects = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('high-school');

  const categories = [
    { id: 'high-school', label: 'High School', icon: '🏫' },
    { id: 'college', label: 'College', icon: '🎓' },
    { id: 'commits', label: 'Commits', icon: '✅' },
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Home</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🌟 Pro Prospect Pipeline</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>Track the next generation from high school → college → professional</p>
      </div>

      {/* CATEGORY TABS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                if (cat.id === 'high-school') navigate('/public/prospects/high-school');
                else if (cat.id === 'college') navigate('/public/prospects/college');
                else if (cat.id === 'commits') navigate('/public/prospects/commits');
              }}
              style={{
                padding: '14px 28px',
                borderRadius: '8px',
                border: selectedCategory === cat.id ? '2px solid #00B4FF' : '2px solid rgba(0,180,255,0.3)',
                background: selectedCategory === cat.id ? 'rgba(0,180,255,0.2)' : 'transparent',
                color: '#00B4FF',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* OVERVIEW CARDS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          
          {/* HIGH SCHOOL CARD */}
          <div 
            onClick={() => navigate('/public/prospects/high-school')}
            style={{
              borderRadius: '12px',
              border: '2px solid rgba(0,180,255,0.3)',
              padding: '30px',
              background: 'rgba(0,180,255,0.1)',
              cursor: 'pointer',
              transition: '0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00B4FF';
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,180,255,0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>🏫</div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>High School</h3>
            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>Elite prospects grades 9-12 with D1 and pro potential</p>
            <div style={{ background: 'rgba(0,180,255,0.15)', padding: '15px', borderRadius: '8px', textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#00B4FF' }}>48</div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>Prospects Tracked</div>
            </div>
            <button style={{ background: '#00B4FF', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', width: '100%' }}>View High School →</button>
          </div>

          {/* COLLEGE CARD */}
          <div 
            onClick={() => navigate('/public/prospects/college')}
            style={{
              borderRadius: '12px',
              border: '2px solid rgba(0,200,150,0.3)',
              padding: '30px',
              background: 'rgba(0,200,150,0.1)',
              cursor: 'pointer',
              transition: '0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00C896';
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,200,150,0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎓</div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#00C896', marginBottom: '10px' }}>College</h3>
            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>D1 athletes with NBA draft potential</p>
            <div style={{ background: 'rgba(0,200,150,0.15)', padding: '15px', borderRadius: '8px', textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#00C896' }}>24</div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>Prospects Tracked</div>
            </div>
            <button style={{ background: '#00C896', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', width: '100%' }}>View College →</button>
          </div>

          {/* COMMITS CARD */}
          <div 
            onClick={() => navigate('/public/prospects/commits')}
            style={{
              borderRadius: '12px',
              border: '2px solid rgba(255,215,0,0.3)',
              padding: '30px',
              background: 'rgba(255,215,0,0.1)',
              cursor: 'pointer',
              transition: '0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FFD700';
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>✅</div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#FFD700', marginBottom: '10px' }}>Commits</h3>
            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>Signed recruits & committed prospects</p>
            <div style={{ background: 'rgba(255,215,0,0.15)', padding: '15px', borderRadius: '8px', textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#FFD700' }}>18</div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>Commits Tracked</div>
            </div>
            <button style={{ background: '#FFD700', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', width: '100%' }}>View Commits →</button>
          </div>
        </div>

        {/* PIPELINE INFO */}
        <div style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '16px', padding: '40px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#00B4FF', marginBottom: '20px' }}>📈 The Pipeline Explained</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#00B4FF', marginBottom: '10px' }}>🏫 High School</div>
              <p style={{ fontSize: '14px', opacity: 0.85, lineHeight: '1.6' }}>We track elite prospects from freshman year through college recruitment. We evaluate tape, measurables, and development trajectory.</p>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#00C896', marginBottom: '10px' }}>🎓 College</div>
              <p style={{ fontSize: '14px', opacity: 0.85, lineHeight: '1.6' }}>D1 athletes we're monitoring for NBA potential. We follow their college career arc and draft projections.</p>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#FFD700', marginBottom: '10px' }}>✅ Commits</div>
              <p style={{ fontSize: '14px', opacity: 0.85, lineHeight: '1.6' }}>High school prospects who have committed to D1 programs. Track their pre-collegiate development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProProspects;