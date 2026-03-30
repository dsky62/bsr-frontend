import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicNav from '../../components/PublicNav';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const styles = {
    page: { minHeight: '100vh', background: 'radial-gradient(circle at top, #1F2933 0%, #050608 55%, #020203 100%)', color: '#FFFFFF', fontFamily: 'Arial, sans-serif', paddingBottom: '50px' },
    container: { maxWidth: '500px', margin: '60px auto', padding: '40px 20px' },
    header: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' },
    backBtn: { background: 'rgba(0,180,255,0.2)', color: '#00B4FF', border: '1px solid #00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', fontSize: '14px', transition: '0.3s' },
    title: { fontSize: '40px', fontWeight: '900', textShadow: '0 0 18px rgba(0, 180, 255, 0.9)', margin: 0 },
    card: { background: 'rgba(0,0,0,0.7)', border: '2px solid #00B4FF', borderRadius: '14px', padding: '30px', marginBottom: '20px', boxShadow: '0 0 30px rgba(0,180,255,0.5)' },
    cardTitle: { fontSize: '20px', fontWeight: '800', color: '#00B4FF', marginBottom: '20px', textAlign: 'center' },
    typesGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' },
    typeBtn: (active) => ({ background: active ? '#00B4FF' : 'rgba(0,180,255,0.2)', color: active ? '#000' : '#FFFFFF', border: '1px solid #00B4FF', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', fontSize: '13px', transition: '0.3s' }),
    formGroup: { marginBottom: '20px' },
    label: { display: 'block', fontSize: '13px', fontWeight: '700', color: '#00B4FF', marginBottom: '8px' },
    input: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,180,255,0.3)', background: 'rgba(0,0,0,0.6)', color: '#FFFFFF', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'inherit' },
    submitBtn: { width: '100%', padding: '12px', background: '#00B4FF', color: '#000', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', fontSize: '14px', marginTop: '15px', transition: '0.3s' },
    signupLink: { textAlign: 'center', marginTop: '20px', fontSize: '13px' },
    link: { color: '#00B4FF', cursor: 'pointer', textDecoration: 'underline' },
    footer: { textAlign: 'center', padding: '40px', opacity: 0.7, fontSize: '14px' },
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      alert(`Login successful as ${userType}!`);
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  if (!userType) {
    return (
      <div style={styles.page}>
        <PublicNav />
        <div style={styles.container}>
          <div style={styles.header}>
            <button onClick={() => navigate('/')} style={styles.backBtn}>← Back to Home</button>
            <h1 style={styles.title}>🔐 Login</h1>
          </div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Select Account Type</h2>
            <div style={styles.typesGrid}>
              <button style={styles.typeBtn(false)} onClick={() => setUserType('coach')}>👨‍🏫 Coach</button>
              <button style={styles.typeBtn(false)} onClick={() => setUserType('player')}>🏀 Player</button>
              <button style={styles.typeBtn(false)} onClick={() => setUserType('scout')}>🔍 Scout</button>
            </div>
          </div>
        </div>
        <footer style={styles.footer}>
          <p>Built by DLW Solutions LLC • brooksports.com</p>
        </footer>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <PublicNav />
      <div style={styles.container}>
        <div style={styles.header}>
          <button onClick={() => navigate('/')} style={styles.backBtn}>← Back to Home</button>
          <h1 style={styles.title}>🔐 Login</h1>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>{userType === 'coach' ? '👨‍🏫 Coach' : userType === 'player' ? '🏀 Player' : '🔍 Scout'} Login</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input type="email" placeholder="your@email.com" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" placeholder="Enter password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button style={styles.submitBtn} onClick={handleLogin} disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          <div style={styles.signupLink}>
            Don't have an account? <span style={styles.link} onClick={() => navigate('/signup')}>Sign Up Here</span>
          </div>
          <div style={{textAlign: 'center', marginTop: '15px'}}>
            <span style={{...styles.link, cursor: 'pointer', fontSize: '12px'}} onClick={() => setUserType(null)}>← Select Different Account Type</span>
          </div>
        </div>
      </div>
      <footer style={styles.footer}>
        <p>Built by DLW Solutions LLC • brooksports.com</p>
      </footer>
    </div>
  );
};

export default Login;