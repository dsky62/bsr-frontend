import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedStory = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
        <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Home</button>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🏀 Featured Player</h1>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HERO SECTION */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px', alignItems: 'center' }}>
          <div style={{ borderRadius: '16px', border: '2px solid rgba(0,180,255,0.3)', overflow: 'hidden', background: 'rgba(0,180,255,0.1)', minHeight: '400px', backgroundImage: 'url("https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          
          <div>
            <div style={{ fontSize: '14px', color: '#00B4FF', fontWeight: '700', marginBottom: '10px' }}>FEATURED PLAYER</div>
            <h2 style={{ fontSize: '44px', fontWeight: '900', marginBottom: '15px' }}>Jalen Brooks</h2>
            <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '20px' }}>6'3" • Point Guard • Class of 2026 • PNW Elite</p>
            
            <div style={{ background: 'rgba(0,180,255,0.15)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.8', opacity: 0.95 }}>
                Jalen Brooks is a shifty, dynamic point guard with elite ball-handling skills and court vision. He controls the tempo of games with his pace and decision-making, while also being a threat from three. His ability to embrace big moments and lead by example makes him a generational talent for the PNW.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '30px' }}>
              <div style={{ background: 'rgba(0,180,255,0.15)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '900', color: '#00B4FF' }}>23.4</div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '5px' }}>PPG</div>
              </div>
              <div style={{ background: 'rgba(0,180,255,0.15)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '900', color: '#00B4FF' }}>6.1</div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '5px' }}>APG</div>
              </div>
              <div style={{ background: 'rgba(0,180,255,0.15)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '900', color: '#00B4FF' }}>4.8</div>
                <div style={{ fontSize: '12px', opacity: 0.8, marginTop: '5px' }}>RPG</div>
              </div>
            </div>

            <button style={{ background: 'linear-gradient(90deg, #00B4FF, #0088CC)', color: '#000', padding: '14px 28px', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '16px', width: '100%' }}>📺 View Full Highlight Reel</button>
          </div>
        </div>

        {/* SCOUTING REPORT */}
        <div style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '16px', padding: '40px', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#00B4FF', marginBottom: '20px' }}>📊 Scouting Report</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            <div>
              <h4 style={{ color: '#00B4FF', marginBottom: '10px', fontWeight: '700' }}>Strengths</h4>
              <ul style={{ listStyle: 'none', padding: 0, opacity: 0.9 }}>
                <li style={{ marginBottom: '8px' }}>✅ Elite ball-handling in tight spaces</li>
                <li style={{ marginBottom: '8px' }}>✅ Great court vision and playmaking</li>
                <li style={{ marginBottom: '8px' }}>✅ Three-level scoring ability</li>
                <li style={{ marginBottom: '8px' }}>✅ Controls tempo and pace of games</li>
                <li style={{ marginBottom: '8px' }}>✅ High basketball IQ and decision-making</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: '#00B4FF', marginBottom: '10px', fontWeight: '700' }}>Areas to Develop</h4>
              <ul style={{ listStyle: 'none', padding: 0, opacity: 0.9 }}>
                <li style={{ marginBottom: '8px' }}>📈 Defensive consistency and on-ball pressure</li>
                <li style={{ marginBottom: '8px' }}>📈 3-point volume and consistency</li>
                <li style={{ marginBottom: '8px' }}>📈 Strength and physicality in paint</li>
                <li style={{ marginBottom: '8px' }}>📈 Pick-and-roll execution in transition</li>
                <li style={{ marginBottom: '8px' }}>📈 Leadership presence in clutch moments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* GAME FILM */}
        <div style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '16px', padding: '40px', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#00B4FF', marginBottom: '20px' }}>🎬 Game Film</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {['Full Game: PNW Elite vs Rain City (12/15/25)', 'Highlights: Showcase Standouts Performance', 'Game Film: Elite 32 Showcase', 'Highlights: PNW Regional Championship'].map((title, idx) => (
              <div key={idx} style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0,180,255,0.2)', cursor: 'pointer', transition: '0.3s' }}>
                <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>📹 {title}</div>
                <button style={{ background: '#00B4FF', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer', width: '100%' }}>Watch Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* RECRUITING */}
        <div style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '16px', padding: '40px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#00B4FF', marginBottom: '20px' }}>🎓 Recruiting Status</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0,180,255,0.2)', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Offers</div>
              <div style={{ fontSize: '24px', fontWeight: '900', color: '#00B4FF' }}>12+</div>
              <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '8px' }}>Washington, Oregon, UCLA, USC, Stanford, more...</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0,180,255,0.2)', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Visits Scheduled</div>
              <div style={{ fontSize: '24px', fontWeight: '900', color: '#00B4FF' }}>5</div>
              <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '8px' }}>UW, Oregon, UCLA, ASU, Colorado</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0,180,255,0.2)', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Commitment</div>
              <div style={{ fontSize: '24px', fontWeight: '900', color: '#FFD700' }}>TBD</div>
              <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '8px' }}>Decision Expected: Spring 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;