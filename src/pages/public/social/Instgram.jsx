import React from 'react';
import { useNavigate } from 'react-router-dom';

const Instagram = () => {
  const navigate = useNavigate();

  const posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80', caption: '🔥 Jalen Brooks with the crossover 🌪️ Elite ball handler. Watch film at BSR.', likes: '1.2K', comments: '89' },
    { id: 2, image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80', caption: '⭐ Showcase Standouts are in! Who impressed YOU the most at Elite 32? Drop names 👇', likes: '980', comments: '124' },
    { id: 3, image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80', caption: 'Fresh class of 2027 prospects on the radar 👀 This generation is SPECIAL.', likes: '1.5K', comments: '156' },
    { id: 4, image: 'https://images.unsplash.com/photo-1546519638-68711109d298?auto=format&fit=crop&w=800&q=80', caption: '🏀 Guard factory ⚙️ How the PNW develops elite point guards. Link in bio for full breakdown.', likes: '2.1K', comments: '201' },
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '40px', textAlign: 'center' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Home</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>📸 Instagram</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>@brooksscouting • Follow for daily highlights and updates</p>
        <a href="https://instagram.com/brooksscouting" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '15px', background: '#00B4FF', color: '#000', padding: '12px 30px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', cursor: 'pointer' }}>Follow on Instagram</a>
      </div>

      {/* FEED */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {posts.map(post => (
          <div 
            key={post.id}
            style={{
              borderRadius: '12px',
              border: '2px solid rgba(0,180,255,0.3)',
              overflow: 'hidden',
              background: 'rgba(0,180,255,0.1)',
              marginBottom: '30px'
            }}
          >
            {/* IMAGE */}
            <div 
              style={{
                backgroundImage: `url("${post.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px'
              }}
            />

            {/* CONTENT */}
            <div style={{ padding: '20px' }}>
              <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>{post.caption}</p>
              <div style={{ display: 'flex', gap: '20px', fontSize: '13px', opacity: 0.8 }}>
                <div>❤️ {post.likes} likes</div>
                <div>💬 {post.comments} comments</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;