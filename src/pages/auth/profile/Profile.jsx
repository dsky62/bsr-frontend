import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Passionate about scouting and player development'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateProfile({
      name: formData.name,
      bio: formData.bio
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <button onClick={() => navigate('/')} style={{ background: 'rgba(0,180,255,0.1)', border: '1px solid #00B4FF', color: '#00B4FF', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', marginBottom: '20px' }}>← Back to Home</button>
          <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#00B4FF' }}>👤 My Profile</h1>
        </div>

        <div style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '12px', padding: '40px', marginBottom: '30px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ fontSize: '80px', marginBottom: '15px' }}>👤</div>
            <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '5px' }}>{user?.name}</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', textTransform: 'capitalize', marginBottom: '15px' }}>{user?.role}</p>
            <p style={{ color: '#00B4FF', fontSize: '14px' }}>{user?.email}</p>
          </div>

          {!isEditing ? (
            <div style={{ marginBottom: '30px' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#00B4FF', fontWeight: '700', marginBottom: '8px', textTransform: 'uppercase' }}>Bio</div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.9 }}>{formData.bio}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: '#00B4FF', fontWeight: '700', marginBottom: '8px' }}>Member Since</div>
                  <div style={{ fontSize: '14px' }}>March 2026</div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: '#00B4FF', fontWeight: '700', marginBottom: '8px' }}>Account Status</div>
                  <div style={{ fontSize: '14px', color: '#00FF00' }}>✓ Active</div>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                style={{ background: '#00B4FF', color: '#000', padding: '12px 24px', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', width: '100%', marginBottom: '10px' }}
              >
                ✏️ Edit Profile
              </button>
            </div>
          ) : (
            <div style={{ marginBottom: '30px' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
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
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: '#00B4FF', fontWeight: '700', marginBottom: '8px' }}>Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '2px solid rgba(0,180,255,0.3)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    minHeight: '100px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handleSave}
                  style={{ flex: 1, background: '#00FF00', color: '#000', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
                >
                  ✓ Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  style={{ flex: 1, background: 'rgba(0,180,255,0.2)', color: '#00B4FF', padding: '12px', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}
                >
                  ✕ Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ background: 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '12px', padding: '30px', marginBottom: '30px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#00B4FF', marginBottom: '20px' }}>🔒 Security</h3>
          <button style={{ background: 'rgba(0,180,255,0.2)', color: '#00B4FF', padding: '12px 24px', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', width: '100%', marginBottom: '10px' }}>
            🔑 Change Password
          </button>
          <button style={{ background: 'rgba(0,180,255,0.2)', color: '#00B4FF', padding: '12px 24px', border: '2px solid rgba(0,180,255,0.3)', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', width: '100%' }}>
            📧 Update Email
          </button>
        </div>

        <button
          onClick={handleLogout}
          style={{ background: 'rgba(255,0,0,0.2)', color: '#FF6B6B', padding: '12px 24px', border: '2px solid rgba(255,0,0,0.5)', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', width: '100%' }}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;