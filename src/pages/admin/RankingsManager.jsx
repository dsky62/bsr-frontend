import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RankingsManager = () => {
    const [rankings, setRankings] = useState([]);
    const [classYear, setClassYear] = useState('');
    const [newRanking, setNewRanking] = useState({ name: '', year: '' });

    useEffect(() => {
        // Fetch rankings when component mounts
        fetchRankings();
    }, []);

    const fetchRankings = async () => {
        // Fetch rankings filtered by class year
        const res = await axios.get(`/api/rankings?year=${classYear}`);
        setRankings(res.data);
    };

    const handleYearChange = (event) => {
        setClassYear(event.target.value);
    };

    const handleInputChange = (event) => {
        setNewRanking({ ...newRanking, [event.target.name]: event.target.value });
    };

    const addRanking = async () => {
        // Add new ranking
        await axios.post('/api/rankings', newRanking);
        fetchRankings();
    };

    const deleteRanking = async (id) => {
        // Delete ranking
        await axios.delete(`/api/rankings/${id}`);
        fetchRankings();
    };

    return (
        <div>
            <h1>Rankings Manager</h1>
            <div>
                <label>Class Year:</label>
                <input type="text" value={classYear} onChange={handleYearChange} />
                <button onClick={fetchRankings}>Filter</button>
            </div>
            <div>
                <h2>Add New Ranking</h2>
                <input type="text" name="name" placeholder="Ranking Name" onChange={handleInputChange} />
                <input type="text" name="year" placeholder="Class Year" onChange={handleInputChange} />
                <button onClick={addRanking}>Add Ranking</button>
            </div>
            <ul>
                {rankings.map((ranking) => (
                    <li key={ranking.id}>
                        {ranking.name} - {ranking.year} <button onClick={() => deleteRanking(ranking.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RankingsManager;