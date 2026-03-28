import React from 'react';
import { useNavigate } from 'react-router-dom';

const News = () => {
  const navigate = useNavigate();

  const articles = [
    { id: 1, title: 'Inside the PNW Guard Factory', author: 'Dom Brooks', date: '03/24/2026', category: 'Feature', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80', excerpt: 'Why the Pacific Northwest keeps producing elite backcourt talent. An in-depth look at the systems, coaching, and culture.' },
    { id: 2, title: 'Showcase Standouts: Who Popped?', author: 'BSR Scout', date: '03/22/2026', category: 'Recap', image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80', excerpt: 'Elite 32 Showcase delivered on the hype. Here are the players who made their case for the next level.' },
    { id: 3, title: 'Class of 2027 Early Watchlist', author: 'Dom Brooks', date: '03/20/2026', category: 'Rankings', image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80', excerpt: 'Too early? Maybe. But these freshmen are special. Here\'s who you need to know now before the hype explodes.' },
    { id: 4, title: 'Jalen Brooks: The Complete Player', author: 'Pro Scout Analysis', date: '03/18/2026', category: 'Analysis', image: 'https://images.unsplash.com/photo-1546519638-68711109d298?auto=format&fit=crop&w=800&q=80', excerpt: 'What makes Jalen Brooks different? We break down his game on and off the ball, and why coaches are circling.' },
    { id: 5, title: 'AAU Summer Circuit Predictions', author: 'BSR', date: '03/16/2026', category: 'Prediction', image: 'https://images.unsplash.com/photo-1522778119541-b48a89f173d8?auto=format&fit=crop&w=800&q=80', excerpt: 'Which teams will dominate? Which players will emerge? Our complete breakdown of the summer\'s biggest tournaments.' },
    { id: 6, title: 'Coaching Changes & Impact', author: 'Dom Brooks', date: '03/14/2026', category: 'News', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', excerpt: 'Three major coaching moves in the region. Here\'s how they could impact recruiting and player development.' },
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Home</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>📰 Latest BSR Stories</h1>
        <p style={{ fontSize: '16px', opacity: 0.8 }}>Ballislife-style storytelling with deep scouting context</p>
      </div>

      {/* ARTICLES GRID */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {articles.map(article => (
            <div 
              key={article.id}
              onClick={() => navigate(`/public/news/article/${article.id}`)}
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
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,180,255,0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* IMAGE */}
              <div 
                style={{
                  backgroundImage: `url("${article.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  position: 'relative'
                }}
              >
                <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#00B4FF', color: '#000', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>
                  {article.category}
                </div>
              </div>

              {/* CONTENT */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px', color: '#00B4FF' }}>{article.title}</h3>
                <p style={{ fontSize: '13px', opacity: 0.85, marginBottom: '15px', lineHeight: '1.6' }}>{article.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', opacity: 0.7 }}>
                  <div>{article.author}</div>
                  <div>{article.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;