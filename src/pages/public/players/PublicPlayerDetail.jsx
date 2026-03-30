import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PublicNav from '../../../components/PublicNav';

const PublicPlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/players/${id}`);
        if (!response.ok) throw new Error('Failed to fetch player');
        const data = await response.json();
        setPlayer(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  if (loading) return <div style={styles.loading}>Loading player profile...</div>;
  if (error) return <div style={styles.error}>Error: {error}</div>;
  if (!player) return <div style={styles.notFound}>Player not found</div>;

  return (
    <div style={styles.page}>
      <PublicNav />
      
      <section style={styles.hero}>
        <div style={styles.heroPhoto} />
        <div style={styles.heroInfo}>
          <h1 style={styles.playerName}>{player.name}</h1>
          <p style={styles.playerMeta}>{player.position} • {player.height} • {player.weight}lbs</p>
          <p style={styles.playerTeam}>{player.team}</p>
        </div>
      </section>

      <section style={styles.statsSection}>
        <h2 style={styles.sectionTitle}>Stats</h2>
        <div style={styles.statsGrid}>
          <div style={styles.statBlock}>
            <div style={styles.statValue}>{player.ppg || 'N/A'}</div>
            <div style={styles.statLabel}>PPG</div>
          </div>
          <div style={styles.statBlock}>
            <div style={styles.statValue}>{player.apg || 'N/A'}</div>
            <div style={styles.statLabel}>APG</div>
          </div>
          <div style={styles.statBlock}>
            <div style={styles.statValue}>{player.rpg || 'N/A'}</div>
            <div style={styles.statLabel}>RPG</div>
          </div>
          <div style={styles.statBlock}>
            <div style={styles.statValue}>{player.fg || 'N/A'}%</div>
            <div style={styles.statLabel}>FG%</div>
          </div>
        </div>
      </section>

      <section style={styles.bioSection}>
        <h2 style={styles.sectionTitle}>About</h2>
        <p style={styles.bioText}>{player.bio || 'No bio available'}</p>
      </section>

      <section style={styles.highlightsSection}>
        <h2 style={styles.sectionTitle}>Highlights</h2>
        <div style={styles.videosGrid}>
          {player.highlights?.map((video, idx) => (
            <div key={idx} style={styles.videoCard}>
              <div style={styles.videoThumb} />
              <p style={styles.videoTitle}>{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.recruitingSection}>
        <h2 style={styles.sectionTitle}>Recruiting</h2>
        <div style={styles.recruitInfo}>
          <p><strong>Class:</strong> {player.class || 'N/A'}</p>
          <p><strong>Offers:</strong> {player.offers?.join(', ') || 'None yet'}</p>
          <p><strong>Visits:</strong> {player.visits?.join(', ') || 'None scheduled'}</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: { minHeight: '100vh', background: 'radial-gradient(circle at top, #1F2933 0%, #050608 55%, #020203 100%)', color: '#FFFFFF', fontFamily: 'Arial, sans-serif' },
  loading: { fontSize: '18px', textAlign: 'center', padding: '40px', color: '#00B4FF' },
  error: { fontSize: '18px', textAlign: 'center', padding: '40px', color: '#FF6B6B' },
  notFound: { fontSize: '18px', textAlign: 'center', padding: '40px', color: '#FFD700' },
  hero: { maxWidth: '1300px', margin: '0 auto', padding: '40px 20px', display: 'flex', gap: '30px', alignItems: 'center' },
  heroPhoto: { flex: '0 0 300px', height: '350px', borderRadius: '14px', border: '2px solid #00B4FF', backgroundImage: 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
  heroInfo: { flex: '1' },
  playerName: { fontSize: '42px', fontWeight: '900', marginBottom: '8px', textShadow: '0 0 18px rgba(0, 180, 255, 0.9)' },
  playerMeta: { fontSize: '16px', opacity: 0.9, marginBottom: '4px' },
  playerTeam: { fontSize: '14px', opacity: 0.8, marginTop: '8px' },
  sectionTitle: { fontSize: '24px', fontWeight: '800', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.12em' },
  statsSection: { maxWidth: '1300px', margin: '0 auto 40px', padding: '0 20px' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px' },
  statBlock: { borderRadius: '10px', border: '2px solid #00B4FF', padding: '16px', textAlign: 'center', background: 'rgba(0,0,0,0.6)' },
  statValue: { fontSize: '28px', fontWeight: '800', color: '#00B4FF' },
  statLabel: { fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.8, marginTop: '4px' },
  bioSection: { maxWidth: '1300px', margin: '0 auto 40px', padding: '0 20px' },
  bioText: { fontSize: '16px', opacity: 0.9, lineHeight: '1.6' },
  highlightsSection: { maxWidth: '1300px', margin: '0 auto 40px', padding: '0 20px' },
  videosGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' },
  videoCard: { borderRadius: '12px', border: '2px solid #FFFFFF', overflow: 'hidden' },
  videoThumb: { height: '120px', backgroundImage: 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
  videoTitle: { padding: '8px', fontSize: '13px', fontWeight: '600' },
  recruitingSection: { maxWidth: '1300px', margin: '0 auto 40px', padding: '0 20px' },
  recruitInfo: { background: 'rgba(0,0,0,0.6)', borderRadius: '12px', border: '1px solid #00B4FF', padding: '16px', fontSize: '14px' },
};

export default PublicPlayerDetail;