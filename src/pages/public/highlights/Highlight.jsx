import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Highlights = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const highlights = [
    { id: 1, title: 'Top Guards Mixtape Vol. 1', category: 'Guards', views: '1.2K', duration: '8:45' },
    { id: 2, title: 'Freshmen to Watch 2026', category: 'Freshmen', views: '890', duration: '6:30' },
    { id: 3, title: 'Showcase Standouts Highlights', category: 'Showcases', views: '2.1K', duration: '10:15' },
    { id: 4, title: 'Jalen Brooks Mixtape', category: 'Players', views: '3.4K', duration: '7:20' },
    { id: 5, title: 'PNW Guard Factory', category: 'Features', views: '1.8K', duration: '12:00' },
    { id: 6, title: 'Elite 32 Championship Highlights', category: 'Tournaments', views: '2.5K', duration: '9:45' },
    { id: 7, title: 'Best Crossovers 2026', category: 'Plays', views: '4.2K', duration: '5:30' },
    { id: 8, title: 'Regional Tournament Recap', category: 'Tournaments', views: '1.6K', duration: '8:00' },
  ];

  const categories = ['all', 'Guards', 'Freshmen', 'Showcases', 'Players', 'Features', 'Tournaments', 'Plays'];

  const filtered = selectedCategory === 'all' ? highlights : highlights.filter(h => h.category === selectedCategory);

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Home</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🎥 Highlights & Reels</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>Ballislife-inspired clips and mixtapes from the best prospects</p>
      </div>

      {/* FILTERS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                border: selectedCategory === cat ? '2px solid #00B4FF' : '2px solid rgba(0,180,255,0.3)',
                background: selectedCategory === cat ? 'rgba(0,180,255,0.2)' : 'transparent',
                color: '#00B4FF',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '14px',
                textTransform: 'capitalize'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* VIDEOS GRID */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {filtered.map(video => (
            <div 
              key={video.id}
              style={{ 
                borderRadius: '12px', 
                border: '2px solid rgba(0,180,255,0.3)', 
                overflow: 'hidden',
                background: 'rgba(0,180,255,0.1)',
                cursor: 'pointer',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00B4FF';
                e.currentTarget.style.background = 'rgba(0,180,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,180,255,0.3)';
                e.currentTarget.style.background = 'rgba(0,180,255,0.1)';
              }}
            >
              <div style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '160px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ background: 'rgba(0,0,0,0.6)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <div style={{ width: 0, height: 0, borderLeft: '16px solid #00B4FF', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', marginLeft: '3px' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '700' }}>{video.duration}</div>
              </div>
              <div style={{ padding: '15px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>{video.title}</div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>👁️ {video.views} views • {video.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
