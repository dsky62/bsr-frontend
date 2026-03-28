import React from 'react';
import { useNavigate } from 'react-router-dom';

const YouTube = () => {
  const navigate = useNavigate();

  const videos = [
    { id: 1, title: 'Jalen Brooks Full Game Highlights', duration: '8:45', views: '3.2K' },
    { id: 2, title: 'PNW Guard Factory Documentary', duration: '15:30', views: '2.1K' },
    { id: 3, title: 'Elite 32 Showcase Full Recap', duration: '12:15', views: '1.8K' },
    { id: 4, title: 'Class of 2027 Watchlist', duration: '10:00', views: '1.5K' },
    { id: 5, title: 'Top Guards Mixtape', duration: '7:20', views: '2.8K' },
    { id: 6, title: 'How to Scout Like Dom', duration: '14:45', views: '1.2K' },
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px', textAlign: 'center' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Home</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>▶️ YouTube</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>@BrooksScouting • Long-form scouting content</p>
        <a href="https://youtube.com/@brooksscouting" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '15px', background: '#FF0000', color: '#fff', padding: '12px 30px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', cursor: 'pointer' }}>Subscribe on YouTube</a>
      </div>

      {/* VIDEOS GRID */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
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
                e.currentTarget.style.borderColor = '#FF0000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,180,255,0.3)';
              }}
            >
              {/* VIDEO THUMBNAIL */}
              <div 
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <div style={{ background: 'rgba(0,0,0,0.6)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <div style={{ width: 0, height: 0, borderLeft: '16px solid #FF0000', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', marginLeft: '3px' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.9)', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '700' }}>{video.duration}</div>
              </div>

              {/* CONTENT */}
              <div style={{ padding: '15px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '10px' }}>{video.title}</div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>👁️ {video.views} views</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTube;