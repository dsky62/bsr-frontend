import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import rankingsApi from '../api/rankingsApi';
import '../styles/RankingsManager.css';

const RankingsManager = () => {
  const navigate = useNavigate();
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [filterClass, setFilterClass] = useState('all');

  // Form state for creating/editing
  const [formData, setFormData] = useState({
    playerName: '',
    rank: '',
    position: '',
    height: '',
    weight: '',
    school: '',
    class: '',
    stats: '',
    highlights: ''
  });

  // Fetch rankings on component mount
  useEffect(() => {
    fetchRankings();
  }, []);

  const fetchRankings = async () => {
    try {
      setLoading(true);
      const data = await rankingsApi.getAll();
      setRankings(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch rankings: ' + err.message);
      console.error(err);
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
    
    if (!formData.playerName || !formData.rank) {
      setError('Player name and rank are required');
      return;
    }

    try {
      if (editingId) {
        // Update existing ranking
        await rankingsApi.update(editingId, formData);
      } else {
        // Create new ranking
        await rankingsApi.create(formData);
      }
      
      // Reset form and refresh rankings
      resetForm();
      await fetchRankings();
    } catch (err) {
      setError('Failed to save ranking: ' + err.message);
      console.error(err);
    }
  };

  const handleEdit = (ranking) => {
    setEditingId(ranking.id);
    setFormData({
      playerName: ranking.playerName || '',
      rank: ranking.rank || '',
      position: ranking.position || '',
      height: ranking.height || '',
      weight: ranking.weight || '',
      school: ranking.school || '',
      class: ranking.class || '',
      stats: ranking.stats || '',
      highlights: ranking.highlights || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this ranking?')) {
      try {
        await rankingsApi.delete(id);
        await fetchRankings();
      } catch (err) {
        setError('Failed to delete ranking: ' + err.message);
        console.error(err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      playerName: '',
      rank: '',
      position: '',
      height: '',
      weight: '',
      school: '',
      class: '',
      stats: '',
      highlights: ''
    });
    setEditingId(null);
  };

  // Filter and sort rankings
  const filteredRankings = rankings
    .filter(ranking => {
      const matchesSearch = ranking.playerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           ranking.school?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesClass = filterClass === 'all' || ranking.class === filterClass;
      return matchesSearch && matchesClass;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rank':
          return parseInt(a.rank) - parseInt(b.rank);
        case 'name':
          return (a.playerName || '').localeCompare(b.playerName || '');
        case 'school':
          return (a.school || '').localeCompare(b.school || '');
        default:
          return 0;
      }
    });

  if (loading) {
    return <div className="loading">Loading rankings...</div>;
  }

  return (
    <div className="rankings-manager">
      <div className="manager-header">
        <h1>{editingId ? 'Edit Ranking' : 'Add New Ranking'}</h1>
        {editingId && (
          <button className="btn btn-secondary" onClick={resetForm}>
            Clear Form
          </button>
        )}
      </div>

      {error && <div className="error-message">{error}</div>}

      {/* Form Section */}
      <form className="ranking-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="playerName">Player Name *</label>
            <input
              type="text"
              id="playerName"
              name="playerName"
              value={formData.playerName}
              onChange={handleInputChange}
              placeholder="Enter player name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rank">Rank *</label>
            <input
              type="number"
              id="rank"
              name="rank"
              value={formData.rank}
              onChange={handleInputChange}
              placeholder="e.g., 1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
            >
              <option value="">Select Position</option>
              <option value="PG">Point Guard</option>
              <option value="SG">Shooting Guard</option>
              <option value="SF">Small Forward</option>
              <option value="PF">Power Forward</option>
              <option value="C">Center</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="class">Class</label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
            >
              <option value="">Select Class</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
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
              placeholder="e.g., 190 lbs"
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
              placeholder="Enter school name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="stats">Stats</label>
            <input
              type="text"
              id="stats"
              name="stats"
              value={formData.stats}
              onChange={handleInputChange}
              placeholder="e.g., 15.2 PPG, 6.5 RPG"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="highlights">Highlights/Notes</label>
          <textarea
            id="highlights"
            name="highlights"
            value={formData.highlights}
            onChange={handleInputChange}
            placeholder="Add any highlights or notes about the player"
            rows="4"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingId ? 'Update Ranking' : 'Add Ranking'}
          </button>
          {editingId && (
            <button type="button" className="btn btn-secondary" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Search by player name or school..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="filterClass">Filter by Class:</label>
          <select
            id="filterClass"
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
          >
            <option value="all">All Classes</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sortBy">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rank">Rank</option>
            <option value="name">Player Name</option>
            <option value="school">School</option>
          </select>
        </div>
      </div>

      {/* Rankings Table */}
      <div className="rankings-table-container">
        <h2>Manage Rankings ({filteredRankings.length})</h2>
        
        {filteredRankings.length === 0 ? (
          <p className="no-data">No rankings found. {searchTerm && 'Try adjusting your search.'}</p>
        ) : (
          <table className="rankings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player Name</th>
                <th>Position</th>
                <th>Class</th>
                <th>School</th>
                <th>Height/Weight</th>
                <th>Stats</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRankings.map(ranking => (
                <tr key={ranking.id}>
                  <td className="rank-cell">#{ranking.rank}</td>
                  <td className="name-cell">{ranking.playerName}</td>
                  <td>{ranking.position || '-'}</td>
                  <td>{ranking.class || '-'}</td>
                  <td>{ranking.school || '-'}</td>
                  <td>
                    {ranking.height && ranking.weight 
                      ? `${ranking.height} / ${ranking.weight}` 
                      : '-'}
                  </td>
                  <td className="stats-cell">{ranking.stats || '-'}</td>
                  <td className="actions-cell">
                    <button
                      className="btn btn-sm btn-edit"
                      onClick={() => handleEdit(ranking)}
                      title="Edit"
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-delete"
                      onClick={() => handleDelete(ranking.id)}
                      title="Delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RankingsManager;