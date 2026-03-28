import React, { useState } from 'react';
import AddPlayerForm from './AddPlayerForm';
import VideoUploadForm from './VideoUploadForm';
import RankingsManager from './RankingsManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)', minHeight: '100vh', color: '#fff', padding: '40px' }}>
      <h1 style={{ background: 'linear-gradient(90deg, #00B4FF, #0088CC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '42px' }}>🎛️ Admin Dashboard</h1>
      
      <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
        <button onClick={() => setActiveTab('dashboard')} style={{ padding: '12px 20px', background: activeTab === 'dashboard' ? 'linear-gradient(90deg, #00B4FF, #0088CC)' : 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', color: activeTab === 'dashboard' ? '#000' : '#00B4FF', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>📊 Dashboard</button>
        <button onClick={() => setActiveTab('addPlayer')} style={{ padding: '12px 20px', background: activeTab === 'addPlayer' ? 'linear-gradient(90deg, #00B4FF, #0088CC)' : 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', color: activeTab === 'addPlayer' ? '#000' : '#00B4FF', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>➕ Add Player</button>
        <button onClick={() => setActiveTab('uploadVideo')} style={{ padding: '12px 20px', background: activeTab === 'uploadVideo' ? 'linear-gradient(90deg, #00B4FF, #0088CC)' : 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', color: activeTab === 'uploadVideo' ? '#000' : '#00B4FF', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>📹 Upload Video</button>
        <button onClick={() => setActiveTab('rankings')} style={{ padding: '12px 20px', background: activeTab === 'rankings' ? 'linear-gradient(90deg, #00B4FF, #0088CC)' : 'rgba(0,180,255,0.1)', border: '2px solid rgba(0,180,255,0.3)', color: activeTab === 'rankings' ? '#000' : '#00B4FF', borderRadius: '8px', cursor: 'pointer', fontWeight: '700' }}>🏆 Rankings</button>
      </div>

      {activeTab === 'dashboard' && <p>📊 Welcome to your admin dashboard!</p>}
      {activeTab === 'addPlayer' && <AddPlayerForm />}
      {activeTab === 'uploadVideo' && <VideoUploadForm />}
      {activeTab === 'rankings' && <RankingsManager />}
    </div>
  );
};

export default AdminDashboard;