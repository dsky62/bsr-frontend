import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🏀 BSR Login</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '12px', padding: '30px' }}>
          {error && (
            <div style={{ background: 'rgba(255,0,0,0.2)', border: '1px solid #FF0000', color: '#FF6B6B', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '13px' }}>
              ❌ {error}
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '2px solid rgba(0,180,255,0.3)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
                transition: '0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#00B4FF'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,180,255,0.3)'}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '2px solid rgba(0,180,255,0.3)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box',
                transition: '0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#00B4FF'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,180,255,0.3)'}
            />
          </div>

          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <Link to="/auth/reset-password" style={{ color: '#00B4FF', textDecoration: 'none', fontSize: '13px', fontWeight: '700' }}>Forgot Password?</Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              background: loading ? 'rgba(0,180,255,0.5)' : 'linear-gradient(90deg, #00B4FF, #0088CC)',
              color: '#000',
              border: 'none',
              fontWeight: '700',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: '0.3s',
              marginBottom: '20px'
            }}
            onMouseEnter={(e) => !loading && (e.target.style.background = 'linear-gradient(90deg, #00D4FF, #00A8FF)')}
            onMouseLeave={(e) => !loading && (e.target.style.background = 'linear-gradient(90deg, #00B4FF, #0088CC)')}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
            Don't have an account? <Link to="/auth/signup" style={{ color: '#00B4FF', textDecoration: 'none', fontWeight: '700' }}>Sign Up</Link>
          </div>
        </form>

        <div style={{ marginTop: '30px', background: 'rgba(0,180,255,0.1)', border: '1px solid rgba(0,180,255,0.3)', borderRadius: '8px', padding: '15px', fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
          <div style={{ fontWeight: '700', color: '#00B4FF', marginBottom: '8px' }}>Demo Credentials:</div>
          <div>Email: <span style={{ color: '#fff' }}>coach@bsr.com</span></div>
          <div>Password: <span style={{ color: '#fff' }}>password123</span></div>
        </div>
      </div>
    </div>
  );
};

export default Login;