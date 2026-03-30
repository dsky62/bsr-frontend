import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicNav from '../../../components/PublicNav';

const RankingsPage = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('2026');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const rankingsData = {
    '2026': [
      { id: 1, rank: 1, name: 'Jalen Brooks', position: 'PG', height: '6\'3"', team: 'Elite AAU', trend: '↑', notes: 'Shifty guard with elite pace and vision' },
      { id: 2, rank: 2, name: 'Brandon Williams', position: 'SF', height: '6\'7"', team: 'Top Flight', trend: '↑', notes: 'Versatile wing with size and skill' },
      { id: 3, rank: 3, name: 'Tyler Johnson', position: 'SG', height: '6\'5"', team: 'Pro Pathway', trend: '→', notes: 'Consistent scorer and competitor' },
      { id: 4, rank: 4, name: 'Marcus Thompson', position: 'PG', height: '6\'1"', team: 'Elite AAU', trend: '↑', notes: 'Improving decision maker' },
      { id: 5, rank: 5, name: 'DeShawn Carter', position: 'PG', height: '6\'0"', team: 'Elite AAU', trend: '↓', notes: 'Still elite but facing competition' },
      { id: 6, rank: 6, name: 'Alex Brown', position: 'F', height: '6\'6"', team: 'Garfield', trend: '↑', notes: 'Strong rebounder with developing skills' },
      { id: 7, rank: 7, name: 'Christian Young', position: 'G', height: '6\'2"', team: 'O\'Dea', trend: '→', notes: 'Solid all-around guard' },
      { id: 8, rank: 8, name: 'David Harris', position: 'W', height: '6\'4"', team: 'Lakes', trend: '↑', notes: 'Athletic wing improving' },
      { id: 9, rank: 9, name: 'Kevin Lewis', position: 'G', height: '6\'0"', team: 'Bellarmine', trend: '↑', notes: 'Quick and skilled guard' },
      { id: 10, rank: 10, name: 'Samuel Walker', position: 'F', height: '6\'8"', team: 'Lincoln', trend: '↓', notes: 'Big man with potential' },
    ],
    '2027': [
      { id: 11, rank: 1, name: 'Alex Rodriguez', position: 'SG', height: '6\'3"', team: 'Elite AAU', trend: '↑', notes: 'Scorer with range' },
      { id: 12, rank: 2, name: 'Christian Lee', position: 'PF', height: '6\'6"', team: 'Pro Pathway', trend: '↑', notes: 'Strong all-around forward' },
      { id: 13, rank: 3, name: 'Kevin Davis', position: 'C', height: '6\'10"', team: 'Top Flight', trend: '→', notes: 'Developing big man' },
      { id: 14, rank: 4, name: 'Jordan Mitchell', position: 'G', height: '6\'2"', team: 'Elite AAU', trend: '↑', notes: 'Versatile guard' },
      { id: 15, rank: 5, name: 'Patrick Wilson', position: 'F', height: '6\'7"', team: 'Garfield', trend: '→', notes: 'Athletic forward' },
    ],
    '2028': [
      { id: 16, rank: 1, name: 'Anthony Jackson', position: 'PG', height: '6\'2"', team: 'Elite AAU', trend: '↑', notes: 'Future point guard' },
      { id: 17, rank: 2, name: 'Joshua Miller', position: 'SG', height: '6\'4"', team: 'Pro Pathway', trend: '↑', notes: 'Developing scorer' },
      { id: 18, rank: 3, name: 'Matthew Garcia', position: 'SF', height: '6\'5"', team: 'Top Flight', trend: '→', notes: 'Solid wing prospect' },
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
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      paddingBottom: '15px',
    },
    tab: (active) => ({
      padding: '10px 20px',
      border: 'none',
      background: active ? '#00B4FF' : 'transparent',
      color: active ? '#000' : '#FFFFFF',
      cursor: 'pointer',
      fontWeight: '700',
      fontSize: '14px',
      transition: '0.3s',
    }),
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '40px',
    },
    tableHeader: {
      background: 'rgba(0,180,255,0.2)',
      padding: '15px',
      textAlign: 'left',
      fontWeight: '700',
      borderBottom: '2px solid #00B4FF',
    },
    tableRow: (index) => ({
      background: index % 2 === 0 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.5)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      cursor: 'pointer',
      transition: '0.3s',
    }),
    tableCell: {
      padding: '15px',
      fontSize: '14px',
    },
    rankNumber: {
      fontSize: '16px',
      fontWeight: '800',
      color: '#00B4FF',
    },
    playerName: {
      fontSize: '15px',
      fontWeight: '700',
      color: '#FFFFFF',
    },
    trend: (direction) => ({
      fontSize: '16px',
      color: direction === '↑' ? '#00FF00' : direction === '↓' ? '#FF0000' : '#FFFF00',
    }),
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
      marginBottom: '15px',
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
                <div style={styles.modalStatLabel}>Rank</div>
                <div style={styles.modalStatValue}>#{selectedPlayer.rank}</div>
              </div>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>Position</div>
                <div style={styles.modalStatValue}>{selectedPlayer.position}</div>
              </div>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>Height</div>
                <div style={styles.modalStatValue}>{selectedPlayer.height}</div>
              </div>
              <div style={styles.modalStat}>
                <div style={styles.modalStatLabel}>Team</div>
                <div style={styles.modalStatValue}>{selectedPlayer.team}</div>
              </div>
            </div>
            <p style={{fontSize: '15px', opacity: 0.9, lineHeight: '1.6'}}>{selectedPlayer.notes}</p>
          </div>
        </div>
      </div>
    );
  }

  const currentRankings = rankingsData[selectedClass];

  return (
    <div style={styles.page}>
      <PublicNav />
      <div style={styles.container}>
        <div style={styles.header}>
          <button onClick={() => navigate('/')} style={styles.backBtn}>← Back to Home</button>
          <h1 style={styles.title}>📊 Rankings</h1>
        </div>

        <div style={styles.tabs}>
          <button style={styles.tab(selectedClass === '2026')} onClick={() => setSelectedClass('2026')}>Class of 2026</button>
          <button style={styles.tab(selectedClass === '2027')} onClick={() => setSelectedClass('2027')}>Class of 2027</button>
          <button style={styles.tab(selectedClass === '2028')} onClick={() => setSelectedClass('2028')}>Class of 2028</button>
        </div>

        <table style={styles.table}>
          <thead>
            <tr style={{background: 'rgba(0,180,255,0.2)'}}>
              <th style={styles.tableHeader}>Rank</th>
              <th style={styles.tableHeader}>Player</th>
              <th style={styles.tableHeader}>Position</th>
              <th style={styles.tableHeader}>Height</th>
              <th style={styles.tableHeader}>Team</th>
              <th style={styles.tableHeader}>Trend</th>
            </tr>
          </thead>
          <tbody>
            {currentRankings.map((player, idx) => (
              <tr key={player.id} style={styles.tableRow(idx)} onClick={() => setSelectedPlayer(player)}>
                <td style={styles.tableCell}><div style={styles.rankNumber}>#{player.rank}</div></td>
                <td style={styles.tableCell}><div style={styles.playerName}>{player.name}</div></td>
                <td style={styles.tableCell}>{player.position}</td>
                <td style={styles.tableCell}>{player.height}</td>
                <td style={styles.tableCell}>{player.team}</td>
                <td style={styles.tableCell}><div style={styles.trend(player.trend)}>{player.trend}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer style={styles.footer}>
        <p>Built by DLW Solutions LLC • brooksports.com</p>
      </footer>
    </div>
  );
};

export default RankingsPage;