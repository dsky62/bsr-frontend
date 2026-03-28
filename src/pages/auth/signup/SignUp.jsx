import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'coach'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await signup(formData.email, formData.password, formData.name, formData.role);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '2px solid rgba(0,180,255,0.3)',
    background: 'rgba(0,0,0,0.5)',
    color: '#fff',
    fontSize: '14px',
    boxSizing: 'border-box',
    transition: '0.3s'
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#00B4FF';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(0,180,255,0.3)';
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '450px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🏀 BSR Sign Up</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Create your account</p>
        </div>

        <form onSubmit={handleSubmit} style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '12px', padding: '30px' }}>
          {error && (
            <div style={{ background: 'rgba(255,0,0,0.2)', border: '1px solid #FF0000', color: '#FF6B6B', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '13px' }}>
              ❌ {error}
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>I am a...</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '2px solid rgba(0,180,255,0.3)',
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            >
              <option value="coach" style={{ background: '#1a1a2e' }}>Coach</option>
              <option value="scout" style={{ background: '#1a1a2e' }}>Scout</option>
              <option value="player" style={{ background: '#1a1a2e' }}>Player</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
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
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
            Already have an account? <Link to="/auth/login" style={{ color: '#00B4FF', textDecoration: 'none', fontWeight: '700' }}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;