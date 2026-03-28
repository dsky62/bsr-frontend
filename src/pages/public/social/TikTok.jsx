import React from 'react';
import { useNavigate } from 'react-router-dom';

const TikTok = () => {
  const navigate = useNavigate();

  const videos = [
    { id: 1, title: 'Jalen Brooks Crossover 🔥', views: '245K', likes: '18K' },
    { id: 2, title: 'Top 5 Guards PNW', views: '189K', likes: '12K' },
    { id: 3, title: 'Freshmen to Watch 👀', views: '156K', likes: '9.2K' },
    { id: 4, title: 'Showcase Highlights', views: '201K', likes: '14K' },
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '40px', textAlign: 'center' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Home</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🎵 TikTok</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>@brooksscouting • Short-form scouting content</p>
        <a href="https://tiktok.com/@brooksscouting" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '15px', background: '#00B4FF', color: '#000', padding: '12px 30px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', cursor: 'pointer' }}>Follow on TikTok</a>
      </div>

      {/* VIDEOS GRID */}
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {videos.map(video => (
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
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,180,255,0.3)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* VIDEO THUMBNAIL */}
              <div 
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <div style={{ background: 'rgba(0,0,0,0.6)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <div style={{ width: 0, height: 0, borderLeft: '20px solid #00B4FF', borderTop: '12px solid transparent', borderBottom: '12px solid transparent', marginLeft: '3px' }} />
                </div>
              </div>

              {/* CONTENT */}
              <div style={{ padding: '15px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '10px' }}>{video.title}</div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>👁️ {video.views} • ❤️ {video.likes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TikTok;