import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStep1 = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await resetPassword(email);
      setMessage('Reset code sent to your email');
      setStep(2);
    } catch (err) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  const handleStep2 = (e) => {
    e.preventDefault();
    if (code.length === 6) {
      setMessage('Code verified. Enter your new password.');
      setStep(3);
    } else {
      setError('Invalid code format');
    }
  };

  const handleStep3 = (e) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setMessage('Password reset successfully! Redirecting to login...');
    setTimeout(() => navigate('/auth/login'), 2000);
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#00B4FF', marginBottom: '10px' }}>🔑 Reset Password</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Step {step} of 3</p>
        </div>

        <form 
          onSubmit={
            step === 1 ? handleStep1 :
            step === 2 ? handleStep2 :
            handleStep3
          }
          style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '12px', padding: '30px' }}
        >
          {message && (
            <div style={{ background: 'rgba(0,255,0,0.2)', border: '1px solid #00FF00', color: '#00FF00', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '13px' }}>
              ✓ {message}
            </div>
          )}

          {error && (
            <div style={{ background: 'rgba(255,0,0,0.2)', border: '1px solid #FF0000', color: '#FF6B6B', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '13px' }}>
              ❌ {error}
            </div>
          )}

          {step === 1 && (
            <div>
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
                    boxSizing: 'border-box'
                  }}
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
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? 'Sending...' : 'Send Reset Code'}
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Reset Code</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="000000"
                  maxLength="6"
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid rgba(0,180,255,0.3)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    fontSize: '14px',
                    textAlign: 'center',
                    letterSpacing: '2px',
                    boxSizing: 'border-box',
                    fontFamily: 'monospace'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  background: 'linear-gradient(90deg, #00B4FF, #0088CC)',
                  color: '#000',
                  border: 'none',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Verify Code
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  background: 'linear-gradient(90deg, #00B4FF, #0088CC)',
                  color: '#000',
                  border: 'none',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Reset Password
              </button>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '20px', color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
            <Link to="/auth/login" style={{ color: '#00B4FF', textDecoration: 'none', fontWeight: '700' }}>Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;