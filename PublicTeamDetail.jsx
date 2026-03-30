import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PublicNav from '../../../components/PublicNav';

const PublicTeamDetail = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/teams/${id}`);
        if (!response.ok) throw new Error('Failed to fetch team');
        const data = await response.json();
        setTeam(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [id]);

  if (loading) return <div style={styles.loading}>Loading team profile...</div>;
  if (error) return <div style={styles.error}>Error: {error}</div>;
  if (!team) return <div style={styles.notFound}>Team not found</div>;

  return (
    <div style={styles.page}>
      <PublicNav />
      
      <section style={styles.hero}>
        <div style={styles.heroLogo} />
        <div style={styles.heroInfo}>
          <h1 style={styles.teamName}>{team.name}</h1>
          <p style={styles.teamMeta}>{team.ageGroup} • {team.region}</p>
          <p style={styles.teamCoach}>Coach: {team.coach || 'N/A'}</p>
        </div>
      </section>

      <section style={styles.statsSection}>
        <h2 style={styles.sectionTitle}>Record</h2>
        <div style={styles.recordGrid}>
          <div style={styles.recordBlock}>
            <div style={styles.recordValue}>{team.wins || 0}</div>
            <div style={styles.recordLabel}>Wins</div>
          </div>
          <div style={styles.recordBlock}>
            <div style={styles.recordValue}>{team.losses || 0}</div>
            <div style={styles.recordLabel}>Losses</div>
          </div>
          <div style={styles.recordBlock}>
            <div style={styles.recordValue}>{team.ppg || 'N/A'}</div>
            <div style={styles.recordLabel}>PPG</div>
          </div>
          <div style={styles.recordBlock}>
            <div style={styles.recordValue}>{team.d1Prospects || 0}</div>
            <div style={styles.recordLabel}>D1 Prospects</div>
          </div>
        </div>
      </section>

      <section style={styles.rosterSection}>
        <h2 style={styles.sectionTitle}>Roster</h2>
        <div style={styles.rosterList}>
          {team.roster?.map((player, idx) => (
            <div key={idx} style={styles.rosterItem}>
              <p style={styles.playerName}>{player.name}</p>
              <p style={styles.playerInfo}>{player.number} • {player.position} • {player.height}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.systemSection}>
        <h2 style={styles.sectionTitle}>System & Style</h2>
        <p style={styles.systemText}>{team.system || 'No system info available'}</p>
      </section>

      <section style={styles.scheduleSection}>
        <h2 style={styles.sectionTitle}>Schedule</h2>
        <div style={styles.scheduleList}>
          {team.schedule?.map((game, idx) => (
            <div key={idx} style={styles.gameCard}>
              <p style={styles.gameOpponent}>{game.opponent}</p>
              <p style={styles.gameDate}>{game.date}</p>
              <p style={styles.gameResult}>{game.result || 'TBD'}</p>
            </div>
          ))}
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
  heroLogo: { flex: '0 0 200px', height: '200px', borderRadius: '14px', border: '2px solid #00B4FF', background: 'rgba(0,180,255,0.1)' },
  heroInfo: { flex: '1' },
  teamName: { fontSize: '42px', fontWeight: '900', marginBottom: '8px', textShadow: '0 0 18px rgba(0, 180, 255, 0.9)' },
  teamMeta: { fontSize: '16px', opacity: 0.9, marginBottom: '4px' },
  teamCoach: { fontSize: '14px', opacity: 0.8, marginTop: '8px' },
  sectionTitle: { fontSize: '24px', fontWeight: '800', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.12em' },
  statsSection: { maxWidth: '1300px', margin: '0 auto 40px', padding: '0 20px' },
  recordGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px' },
  recordBlock: { borderRadius: '10px', border: '2px solid #00B4FF', padding: '16px', textAlign: 'center', background: 'rgba(0,0,0,0.6)' },
  recordValue: { fontSize: '28px', fontWeight: '800', color: '#00B4FF' },
  recordLabel: { fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.8, marginTop: '4px' },
  rosterSection: { maxWidth: '1300px', margin: '0 auto 40px', padding: '0 20px' },
  rosterList: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' },
  rosterItem: { background: 'rgba(0,0,0,0.6)', borderRadius: '10px', border: '1px solid #00B4FF', padding: '12px' },
  playerName: { fontSize: '14px', fontWeight: '700', color: '#00B4FF' },
  playerInfo: { fontSize: '12px', opacity: 0.8, marginTop: '4px' },
  systemSection: { maxWidth: '1300px', margin: '0 auto 40px', padding: '0 20px' },
  systemText: { fontSize: '15px', opacity: 0.9, lineHeight: '1.6', background: 'rgba(0,0,0,0.6)', padding: '16px', borderRadius: '10px', border: '1px solid #00B4FF' },
  scheduleSection: { maxWidth: '1300px', margin: '0 auto 40px', padding: '0 20px' },
  scheduleList: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' },
  gameCard: { background: 'rgba(0,0,0,0.6)', borderRadius: '10px', border: '1px solid #FFFFFF', padding: '12px', textAlign: 'center' },
  gameOpponent: { fontSize: '14px', fontWeight: '700', marginBottom: '4px' },
  gameDate: { fontSize: '12px', opacity: 0.8 },
  gameResult: { fontSize: '13px', color: '#00B4FF', fontWeight: '600', marginTop: '4px' },
};

export default PublicTeamDetail;