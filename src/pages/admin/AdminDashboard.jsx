import React, { useState, useEffect } from 'react';
import PublicNav from '../../components/PublicNav';

const AdminDashboard = () => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [news, setNews] = useState([]);
  const [activeTab, setActiveTab] = useState('players');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [playersRes, teamsRes, newsRes] = await Promise.all([
        fetch('http://localhost:5000/api/players'),
        fetch('http://localhost:5000/api/teams'),
        fetch('http://localhost:5000/api/news'),
      ]);

      setPlayers(await playersRes.json());
      setTeams(await teamsRes.json());
      setNews(await newsRes.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddOrEdit = async () => {
    try {
      const method = editingId ? 'PUT' : 'POST';
      const endpoint = editingId
        ? `http://localhost:5000/api/${activeTab}/${editingId}`
        : `http://localhost:5000/api/${activeTab}`;

      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchAllData();
        setFormData({});
        setEditingId(null);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/${activeTab}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchAllData();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div style={styles.loading}>Loading admin dashboard...</div>;

  return (
    <div style={styles.page}>
      <PublicNav />

      <section style={styles.dashboardHeader}>
        <h1 style={styles.dashboardTitle}>Admin Dashboard</h1>
        <p style={styles.dashboardSubtitle}>Manage players, teams, and news content</p>
      </section>

      <section style={styles.dashboardContainer}>
        <div style={styles.tabs}>
          {['players', 'teams', 'news'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tab,
                ...(activeTab === tab ? styles.tabActive : {}),
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.formSection}>
          <h3 style={styles.formTitle}>{editingId ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}</h3>
          <form style={styles.form} onSubmit={(e) => { e.preventDefault(); handleAddOrEdit(); }}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Description/Content"
              value={formData.description || formData.content || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [activeTab === 'news' ? 'content' : 'description']: e.target.value,
                })
              }
              style={styles.input}
            />
            <button type="submit" style={styles.submitBtn}>
              {editingId ? 'Update' : 'Add'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => { setEditingId(null); setFormData({}); }}
                style={styles.cancelBtn}
              >
                Cancel
              </button>
            )}
          </form>
        </div>

        <div style={styles.dataSection}>
          <h3 style={styles.dataTitle}>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} List</h3>
          <div style={styles.dataGrid}>
            {(activeTab === 'players' ? players : activeTab === 'teams' ? teams : news).map((item) => (
              <div key={item._id} style={styles.dataCard}>
                <h4 style={styles.cardTitle}>{item.name || item.title}</h4>
                <p style={styles.cardDesc}>{item.position || item.category || item.author || 'N/A'}</p>
                <div style={styles.cardActions}>
                  <button
                    onClick={() => {
                      setFormData(item);
                      setEditingId(item._id);
                    }}
                    style={styles.editBtn}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item._id)} style={styles.deleteBtn}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: { minHeight: '100vh', background: 'radial-gradient(circle at top, #1F2933 0%, #050608 55%, #020203 100%)', color: '#FFFFFF', fontFamily: 'Arial, sans-serif' },
  loading: { fontSize: '18px', textAlign: 'center', padding: '40px', color: '#00B4FF' },
  dashboardHeader: { maxWidth: '1300px', margin: '0 auto', padding: '40px 20px' },
  dashboardTitle: { fontSize: '42px', fontWeight: '900', marginBottom: '8px', textShadow: '0 0 18px rgba(0, 180, 255, 0.9)' },
  dashboardSubtitle: { fontSize: '16px', opacity: 0.9 },
  dashboardContainer: { maxWidth: '1300px', margin: '0 auto', padding: '0 20px 40px' },
  tabs: { display: 'flex', gap: '12px', marginBottom: '24px', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '12px' },
  tab: { padding: '10px 20px', background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase' },
  tabActive: { color: '#00B4FF', borderBottom: '3px solid #00B4FF', marginBottom: '-15px', paddingBottom: '9px' },
  error: { background: '#FF6B6B', color: '#000', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px' },
  formSection: { background: 'rgba(0,0,0,0.6)', border: '1px solid #00B4FF', borderRadius: '12px', padding: '20px', marginBottom: '30px' },
  formTitle: { fontSize: '16px', fontWeight: '700', marginBottom: '12px' },
  form: { display: 'flex', gap: '12px', flexWrap: 'wrap' },
  input: { flex: '1', minWidth: '200px', padding: '10px 12px', background: 'rgba(0,0,0,0.6)', border: '1px solid #00B4FF', borderRadius: '6px', color: '#FFFFFF', fontSize: '14px' },
  submitBtn: { padding: '10px 20px', background: '#00B4FF', color: '#000', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' },
  cancelBtn: { padding: '10px 20px', background: 'rgba(255,107,107,0.2)', color: '#FF6B6B', border: '1px solid #FF6B6B', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' },
  dataSection: { marginTop: '30px' },
  dataTitle: { fontSize: '18px', fontWeight: '700', marginBottom: '16px' },
  dataGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' },
  dataCard: { background: 'rgba(0,0,0,0.6)', border: '1px solid #00B4FF', borderRadius: '10px', padding: '16px' },
  cardTitle: { fontSize: '15px', fontWeight: '700', marginBottom: '6px', color: '#00B4FF' },
  cardDesc: { fontSize: '13px', opacity: 0.8, marginBottom: '12px' },
  cardActions: { display: 'flex', gap: '8px' },
  editBtn: { flex: 1, padding: '8px', background: 'rgba(0,180,255,0.2)', border: '1px solid #00B4FF', borderRadius: '6px', color: '#00B4FF', cursor: 'pointer', fontWeight: '600', fontSize: '12px' },
  deleteBtn: { flex: 1, padding: '8px', background: 'rgba(255,107,107,0.2)', border: '1px solid #FF6B6B', borderRadius: '6px', color: '#FF6B6B', cursor: 'pointer', fontWeight: '600', fontSize: '12px' },
};

export default AdminDashboard;