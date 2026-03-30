import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Media = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);

  // LAYER 1: Media Types
  const mediaTypes = [
    { id: 1, name: 'Highlights', emoji: '🎬', count: 45, desc: 'Player highlight reels' },
    { id: 2, name: 'Photos', emoji: '📸', count: 120, desc: 'Game and event photos' },
    { id: 3, name: 'Interviews', emoji: '🎙️', count: 18, desc: 'Player and coach interviews' },
  ];

  // LAYER 2: Content by Type
  const contentByType = {
    1: [
      { id: 101, title: 'Jalen Brooks Season Highlights', duration: '8:42', player: 'Jalen Brooks', views: '2.4K', thumbnail: '🎬' },
      { id: 102, title: 'Brandon Williams Elite Montage', duration: '6:15', player: 'Brandon Williams', views: '1.8K', thumbnail: '🎬' },
      { id: 103, title: 'Tyler Johnson Game 3 Highlights', duration: '5:30', player: 'Tyler Johnson', views: '1.2K', thumbnail: '🎬' },
    ],
    2: [
      { id: 201, title: 'Elite 32 Showcase Game Day', count: '34 photos', event: 'Elite 32 Showcase', views: '892', thumbnail: '📸' },
      { id: 202, title: 'Regional Tournament Finals', count: '28 photos', event: 'Regional Tournament', views: '756', thumbnail: '📸' },
    ],
    3: [
      { id: 301, title: 'Jalen Brooks Interview', duration: '12:30', player: 'Jalen Brooks', views: '3.1K', thumbnail: '🎙️' },
      { id: 302, title: 'Coach Dom On Guard Development', duration: '18:45', subject: 'Coach Dom', views: '2.2K', thumbnail: '🎙️' },
    ],
  };

  // LAYER 3: Full Content View
  const contentDetails = {
    101: {
      title: 'Jalen Brooks Season Highlights',
      type: 'Video Highlight Reel',
      player: 'Jalen Brooks',
      duration: '8:42',
      views: '2,451',
      date: '03/24/2026',
      description: 'A complete compilation of Jalen Brooks\' best moments from the 2025-26 season. Features his elite ball handling, scoring ability, and court vision. Watch as one of the top prospects in the class of 2026 dominates on both ends of the court.',
      stats: { points: '18.5 PPG', assists: '6.2 APG', steals: '2.1 SPG' },
      thumbnail: '🎬',
    },
    102: {
      title: 'Brandon Williams Elite Montage',
      type: 'Video Highlight Reel',
      player: 'Brandon Williams',
      duration: '6:15',
      views: '1,843',
      date: '03/22/2026',
      description: 'Brandon Williams showcasing his elite athleticism, length, and defensive prowess. This video highlights why he\'s a top-10 prospect in the class of 2026.',
      stats: { points: '16.2 PPG', rebounds: '8.1 RPG', blocks: '1.8 BPG' },
      thumbnail: '🎬',
    },
    301: {
      title: 'Jalen Brooks Interview',
      type: 'Interview',
      subject: 'Jalen Brooks',
      duration: '12:30',
      views: '3,142',
      date: '03/20/2026',
      description: 'One-on-one interview with Jalen Brooks discussing his journey, training regimen, college process, and goals. Get insight into the mind of one of the nation\'s top prospects.',
      topics: ['College Choice', 'Training Regimen', 'NBA Dreams', 'Leadership'],
      thumbnail: '🎙️',
    },
  };

  // LAYER 3: Show Full Content
  if (selectedContent) {
    const content = contentDetails[selectedContent];
    return (
      <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <button onClick={() => setSelectedContent(null)} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '30px' }}>← Back to Media</button>

          <div style={{ background: 'rgba(0,0,0,0.8)', border: '2px solid #00B4FF', borderRadius: '16px', overflow: 'hidden', marginBottom: '30px' }}>
            <div style={{ background: 'rgba(0,180,255,0.2)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '80px' }}>
              {content.thumbnail}
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.6)', border: '2px solid #00B4FF', borderRadius: '16px', padding: '40px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>{content.title}</h1>
            <div style={{ fontSize: '14px', opacity: 0.7, marginBottom: '30px', display: 'flex', gap: '20px' }}>
              <span>{content.type}</span>
              <span>{content.duration}</span>
              <span>{content.views} views</span>
              <span>{content.date}</span>
            </div>

            <p style={{ opacity: 0.85, fontSize: '14px', lineHeight: '1.8', marginBottom: '30px' }}>{content.description}</p>

            {content.stats && (
              <div>
                <h3 style={{ color: '#00B4FF', fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>📊 Stats Featured</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '30px' }}>
                  {Object.entries(content.stats).map(([key, value]) => (
                    <div key={key} style={{ background: 'rgba(0,180,255,0.1)', padding: '15px', borderRadius: '8px' }}>
                      <div style={{ fontSize: '12px', opacity: 0.7, textTransform: 'uppercase', fontWeight: '700', marginBottom: '5px' }}>{key}</div>
                      <div style={{ fontSize: '20px', fontWeight: '900', color: '#00B4FF' }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {content.topics && (
              <div>
                <h3 style={{ color: '#00B4FF', fontSize: '18px', fontWeight: '700', marginBottom: '15px' }}>🎯 Topics Covered</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {content.topics.map((topic, idx) => (
                    <span key={idx} style={{ background: '#00B4FF', color: '#000', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '700' }}>{topic}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // LAYER 2: Show Content by Type
  if (selectedType) {
    const mediaType = mediaTypes.find(t => t.id === selectedType);
    return (
      <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <button onClick={() => setSelectedType(null)} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '30px' }}>← Back to Media Types</button>

          <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#00B4FF', marginBottom: '30px' }}>{mediaType.emoji} {mediaType.name}</h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {contentByType[selectedType]?.map(content => (
              <div
                key={content.id}
                onClick={() => setSelectedContent(content.id)}
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(0,180,255,0.3)',
                  borderRadius: '12px',
                  overflow: 'hidden',
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
                <div style={{ background: 'rgba(0,180,255,0.2)', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px' }}>
                  {content.thumbnail}
                </div>
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#00B4FF', marginBottom: '8px' }}>{content.title}</h3>
                  <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '10px' }}>
                    {content.duration || content.count} • {content.views} views
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // LAYER 1: Show Media Types
  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '30px' }}>← Back to Home</button>

        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>📺 Media & Content</h1>
        <p style={{ fontSize: '16px', opacity: 0.8, marginBottom: '40px' }}>Highlights, photos, interviews, and more</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {mediaTypes.map(type => (
            <div
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              style={{
                background: 'rgba(0,0,0,0.6)',
                border: '2px solid #00B4FF',
                borderRadius: '16px',
                padding: '30px',
                cursor: 'pointer',
                transition: '0.3s',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#00FFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#00B4FF';
              }}
            >
              <div style={{ fontSize: '42px', marginBottom: '15px' }}>{type.emoji}</div>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#00B4FF', marginBottom: '8px' }}>{type.name}</h2>
              <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '15px' }}>{type.desc}</p>
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#00B4FF', marginBottom: '15px' }}>{type.count} Pieces</p>
              <button style={{ background: '#00B4FF', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Browse →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;