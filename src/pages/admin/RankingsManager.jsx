import React, { useState, useEffect } from 'react';
import './admin.css';

const RankingsManager = () => {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    rank: '',
    playerName: '',
    position: '',
    height: '',
    weight: '',
    school: '',
    grade: '',
    class: '',
    stats: '',
    notes: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [filterClass, setFilterClass] = useState('All');

  useEffect(() => {
    fetchRankings();
  }, []);

  const fetchRankings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/rankings`);
      if (!response.ok) throw new Error('Failed to fetch rankings');
      const data = await response.json();
      setRankings(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching rankings:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = editingId
        ? `${process.env.REACT_APP_API_URL}/rankings/${editingId}`
        : `${process.env.REACT_APP_API_URL}/rankings`;
      
      const method = editingId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to save ranking');
      
      await fetchRankings();
      resetForm();
      setShowForm(false);
    } catch (err) {
      setError(err.message);
      console.error('Error saving ranking:', err);
    }
  };

  const handleEdit = (ranking) => {
    setFormData(ranking);
    setEditingId(ranking._id || ranking.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this ranking?')) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/rankings/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) throw new Error('Failed to delete ranking');
        
        await fetchRankings();
      } catch (err) {
        setError(err.message);
        console.error('Error deleting ranking:', err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      rank: '',
      playerName: '',
      position: '',
      height: '',
      weight: '',
      school: '',
      grade: '',
      class: '',
      stats: '',
      notes: ''
    });
    setEditingId(null);
  };

  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  const filteredRankings = filterClass === 'All' 
    ? rankings 
    : rankings.filter(r => r.class === filterClass);

  const sortedRankings = [...filteredRankings].sort((a, b) => 
    parseInt(a.rank) - parseInt(b.rank)
  );

  const classes = ['All', ...new Set(rankings.map(r => r.class).filter(Boolean))];

  if (loading) return <div className="loading">Loading rankings...</div>;

  return (
    <div className="rankings-manager">
      <h1>Rankings Manager</h1>
      
      {error && <div className="error-message">{error}</div>}

      <div className="manager-controls">
        <button 
          className="btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Ranking'}
        </button>

        <div className="filter-controls">
          <label htmlFor="classFilter">Filter by Class:</label>
          <select 
            id="classFilter"
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
          >
            {classes.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
      </div>

      {showForm && (
        <form className="ranking-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>{editingId ? 'Edit Ranking' : 'Add New Ranking'}</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="rank">Rank *</label>
                <input
                  type="number"
                  id="rank"
                  name="rank"
                  value={formData.rank}
                  onChange={handleInputChange}
                  placeholder="e.g., 1, 2, 3"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="playerName">Player Name *</label>
                <input
                  type="text"
                  id="playerName"
                  name="playerName"
                  value={formData.playerName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="e.g., PG, SG, SF"
                />
              </div>

              <div className="form-group">
                <label htmlFor="height">Height</label>
                <input
                  type="text"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  placeholder="e.g., 6'2\""
                />
              </div>

              <div className="form-group">
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="e.g., 195 lbs"
                />
              </div>

              <div className="form-group">
                <label htmlFor="school">School</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  placeholder="High school name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="grade">Grade</label>
                <input
                  type="text"
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  placeholder="e.g., Senior, Junior"
                />
              </div>

              <div className="form-group">
                <label htmlFor="class">Class *</label>
                <input
                  type="text"
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  placeholder="e.g., 2025, 2026"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="stats">Stats</label>
                <textarea
                  id="stats"
                  name="stats"
                  value={formData.stats}
                  onChange={handleInputChange}
                  placeholder="Career stats, averages, highlights"
                  rows="4"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="notes">Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Additional notes or comments"
                  rows="4"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editingId ? 'Update Ranking' : 'Add Ranking'}
              </button>
              <button 
                type="button" 
                className="btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="rankings-table-container">
        <table className="rankings-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player Name</th>
              <th>Position</th>
              <th>Height/Weight</th>
              <th>School</th>
              <th>Grade</th>
              <th>Class</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedRankings.length > 0 ? (
              sortedRankings.map((ranking) => (
                <tr key={ranking._id || ranking.id}>
                  <td className="rank-cell">{ranking.rank}</td>
                  <td className="player-name">{ranking.playerName}</td>
                  <td>{ranking.position || '-'}</td>
                  <td>
                    {ranking.height || '-'} / {ranking.weight || '-'}
                  </td>
                  <td>{ranking.school || '-'}</td>
                  <td>{ranking.grade || '-'}</td>
                  <td>{ranking.class || '-'}</td>
                  <td className="actions-cell">
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(ranking)}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(ranking._id || ranking.id)}
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="empty-message">
                  No rankings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="rankings-summary">
        <p>Total Rankings: {sortedRankings.length}</p>
      </div>
    </div>
  );
};

export default RankingsManager;