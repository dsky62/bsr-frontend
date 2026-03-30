import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicNav from '../../../components/PublicNav';

const PlayersPage = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState('pg');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const playersData = {
    pg: [
      { id: 1, name: 'Jalen Brooks', height: '6\'3"', team: 'Elite AAU', class: '2026', ppg: 23.4, apg: 6.1, rpg: 4.8, notes: 'Elite pace and vision. Controls tempo effectively. Three-level scorer.' },
      { id: 2, name: 'Marcus Thompson', height: '6\'1"', team: 'Top Flight', class: '2027', ppg: 18.2, apg: 5.4, rpg: 3.2, notes: 'Improving decision maker. Strong defender.' },
      { id: 3, name: 'DeShawn Carter', height: '6\'0"', team: 'Elite AAU', class: '2026', ppg: 19.8, apg: 7.2, rpg: 2.9, notes: 'Shifty, quick decision maker. Excellent ball security.' },
      { id: 4, name: 'Anthony Jackson', height: '6\'2"', team: 'Elite AAU', class: '2028', ppg: 16.5, apg: 4.8, rpg: 3.1, notes: 'Rising prospect with great upside.' },
    ],
    sg: [
      { id: 5, name: 'Tyler Johnson', height: '6\'5"', team: 'Pro Pathway', class: '2026', ppg: 21.3, apg: 3.8, rpg: 5.2, notes: 'Consistent scorer. Strong shooter. Improving defender.' },
      { id: 6, name: 'Alex Rodriguez', height: '6\'3"', team: 'Elite AAU', class: '2027', ppg: 20.1, apg: 3.2, rpg: 4.4, notes: 'Range scorer with athleticism. High energy.' },
      { id: 7, name: 'Joshua Miller', height: '6\'4"', team: 'Pro Pathway', class: '2028', ppg: 17.8, apg: 2.9, rpg: 4.1, notes: 'Developing scorer with solid fundamentals.' },
    ],
    sf: [
      { id: 8, name: 'Brandon Williams', height: '6\'7"', team: 'Top Flight', class: '2026', ppg: 19.4, apg: 3.1, rpg: 7.2, notes: 'Versatile wing. Size and skill. Good rebounder.' },
      { id: 9, name: 'Christian Lee', height: '6\'6"', team: 'Pro Pathway', class: '2027', ppg: 18.7, apg: 2.8, rpg: 6.8, notes: 'Strong all-around forward. Good defender.' },
      { id: 10, name: 'Matthew Garcia', height: '6\'5"', team: 'Top Flight', class: '2028', ppg: 16.2, apg: 2.5, rpg: 5.9, notes: 'Solid wing prospect with improving skills.' },
    ],
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'radial-gradient(circle at top, #1F2933 0%, #050608 55%, #020203 100%)',
      color: '#FFFFFF',
      fontFamily: 'Arial, sans-serif',
      paddingBottom: '50px',
    },
    container: {
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '40px',
    },
    backBtn: {
      background: 'rgba(0,180,255,0.2)',
      color: '#00B4FF',
      border: '1px solid #00B4FF',
      padding: '10px 20px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '14px',
    },
    title: {
      fontSize: '48px',
      fontWeight: '900',
      textShadow: '0 0 18px rgba(0, 180, 255, 0.9)',
    },
    tabs: {
      display: 'flex',
      gap: '15px',
      marginBottom: '40px',
    },
    tab: (active) => ({
      padding: '10px 20px',
      border: active ? '2px solid #00B4FF' : '1px solid rgba(255,255,255,0.3)',
      background: active ? 'rgba(0,180,255,0.2)' : 'transparent',
      color: '#FFFFFF',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '14px',
      borderRadius: '8px',
      transition: '0.3s',
    }),
    playersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
    },
    playerCard: {
      background: 'rgba(0,0,0,0.7)',
      border: '2px solid #FFFFFF',
      borderRadius: '14px',
      padding: '20px',
      cursor: 'pointer',
      transition: '0.3s',
    },
    playerName: {
      fontSize: '18px',
      fontWeight: '800',
      color: '#00B4FF',
      marginBottom: '10px',
    },
    playerInfo: {
      fontSize: '13px',
      opacity: 0.85,
      marginBottom: '10px',
      lineHeight: '1.6',
    },
    playerStats: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '10px',
      marginTop: '15px',
      paddingTop: '15px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    },
    statBlock: {
      textAlign: 'center',
    },
    statValue: {
      fontSize: '16px',
      fontWeight: '800',
      color: '#00B4FF',
    },
    statLabel: {
      fontSize: '11px',
      opacity: 0.7,
      textTransform: 'uppercase',
      marginTop: '3px',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    },
    modalContent: {
      maxWidth: '600px',
      width: '90%',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)',
      borderRadius: '18px',
      border: '2px solid #00B4FF',
      padding: '40px',
    },
    modalTitle: {
      fontSize: '32px',
      fontWeight: '900',
      color: '#00B4FF',
      marginBottom: '20px',
    },
    modalStatGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
      marginBottom: '20px',
    },
    modalStat: {
      background: 'rgba(0,180,255,0.1)',
      padding: '15px',
      borderRadius: '8px',
      border: '1px solid rgba(0,180,255,0.3)',
    },
    modalStatLabel: {
      fontSize: '12px',
      color: '#00B4FF',
      textTransform: 'uppercase',
      marginBottom: '5px',
    },
    modalStatValue: {
      fontSize: '18px',
      fontWeight: '800',
    },
    footer: {
      textAlign: 'center',
      padding: '40px',
      opacity: 0.7,
      fontSize: '14px',
    },
  };

  if (selectedPlayer) {
    return (
      <div style={styles.page}>
        <PublicNav />
        <div style={styles.modal} onClick={() => setSelectedPlayer(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedPlayer(null)} style={styles.backBtn}>← Back</button>
            <h1 style={styles.modalTitle}>{selectedPlayer.name}</h1>
            <div style={styles.modalStatGrid}>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>Position</div>
                <div style={styles.modalStatValue}>{selectedPlayer.height.includes("'") ? selectedPlayer.height : 'G'}</div>
              </div>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>Height</div>
                <div style={styles.modalStatValue}>{selectedPlayer.height}</div>
              </div>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>Team</div>
                <div style={styles.modalStatValue}>{selectedPlayer.team}</div>
              </div>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>Class</div>
                <div style={styles.modalStatValue}>{selectedPlayer.class}</div>
              </div>
            </div>
            <div style={styles.modalStatGrid}>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>PPG</div>
                <div style={styles.modalStatValue}>{selectedPlayer.ppg}</div>
              </div>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>APG</div>
                <div style={styles.modalStatValue}>{selectedPlayer.apg}</div>
              </div>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>RPG</div>
                <div style={styles.modalStatValue}>{selectedPlayer.rpg}</div>
              </div>
            </div>
            <p style={{fontSize: '15px', opacity: 0.9, lineHeight: '1.6'}}>{selectedPlayer.notes}</p>
          </div>
        </div>
      </div>
    );
  }

  const currentPlayers = playersData[selectedPosition];

  return (
    <div style={styles.page}>
      <PublicNav />
      <div style={styles.container}>
        <div style={styles.header}>
          <button onClick={() => navigate('/')} style={styles.backBtn}>← Back to Home</button>
          <h1 style={styles.title}>🏀 Players</h1>
        </div>

        <div style={styles.tabs}>
          <button style={styles.tab(selectedPosition === 'pg')} onClick={() => setSelectedPosition('pg')}>🎯 Point Guards</button>
          <button style={styles.tab(selectedPosition === 'sg')} onClick={() => setSelectedPosition('sg')}>🔫 Shooting Guards</button>
          <button style={styles.tab(selectedPosition === 'sf')} onClick={() => setSelectedPosition('sf')}>💪 Forwards</button>
        </div>

        <div style={styles.playersGrid}>
          {currentPlayers.map(player => (
            <div key={player.id} style={styles.playerCard} onClick={() => setSelectedPlayer(player)}>
              <h3 style={styles.playerName}>{player.name}</h3>
              <div style={styles.playerInfo}>
                <p>{player.height} • {player.team}</p>
                <p>Class of {player.class}</p>
              </div>
              <div style={styles.playerStats}>
                <div style={styles.statBlock}>
                  <div style={styles.statValue}>{player.ppg}</div>
                  <div style={styles.statLabel}>PPG</div>
                </div>
                <div style={styles.statBlock}>
                  <div style={styles.statValue}>{player.apg}</div>
                  <div style={styles.statLabel}>APG</div>
                </div>
                <div style={styles.statBlock}>
                  <div style={styles.statValue}>{player.rpg}</div>
                  <div style={styles.statLabel}>RPG</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer style={styles.footer}>
        <p>Built by DLW Solutions LLC • brooksports.com</p>
      </footer>
    </div>
  );
};

export default PlayersPage;