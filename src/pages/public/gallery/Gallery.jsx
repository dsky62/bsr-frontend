import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: 'PNW Elite Showcase', category: 'Showcase', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Elite 32 Championship', category: 'Tournament', image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Guard Showcase Highlights', category: 'Showcase', image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Regional Championship Game', category: 'Tournament', image: 'https://images.unsplash.com/photo-1546519638-68711109d298?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'AAU Summer Circuit', category: 'AAU', image: 'https://images.unsplash.com/photo-1522778119541-b48a89f173d8?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Jalen Brooks MVP Game', category: 'Showcase', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80' },
    { id: 7, title: 'High School Elite Eight', category: 'Tournament', image: 'https://images.unsplash.com/photo-1503803548695-659e19b239f3?auto=format&fit=crop&w=800&q=80' },
    { id: 8, title: 'PNW Guard Factory', category: 'Feature', image: 'https://images.unsplash.com/photo-1540747913ee8c40a2a15f86b2e2e9f3?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Home</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>📸 From the Lens</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>Behind-the-scenes photos from showcases, tournaments, and games</p>
      </div>

      {/* GALLERY GRID */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {images.map(img => (
            <div 
              key={img.id}
              onClick={() => setSelectedImage(img)}
              style={{ 
                borderRadius: '12px', 
                border: '2px solid rgba(0,180,255,0.3)', 
                overflow: 'hidden', 
                backgroundImage: `url("${img.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '240px',
                cursor: 'pointer',
                transition: '0.3s',
                position: 'relative',
                background: 'rgba(0,180,255,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = '#00B4FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(0,180,255,0.3)';
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.8))' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                <div style={{ fontSize: '12px', color: '#00B4FF', fontWeight: '700', marginBottom: '5px' }}>{img.category}</div>
                <div style={{ fontSize: '16px', fontWeight: '700' }}>{img.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.95)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div style={{ maxWidth: '90vw', maxHeight: '90vh', position: 'relative' }}>
            <img src={selectedImage.image} alt={selectedImage.title} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '12px' }} />
            <button 
              onClick={() => setSelectedImage(null)}
              style={{ position: 'absolute', top: '-50px', right: 0, background: '#00B4FF', color: '#000', border: 'none', padding: '10px 15px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}
            >
              ✕ Close
            </button>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: '700' }}>{selectedImage.title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;