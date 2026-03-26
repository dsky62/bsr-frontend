import React, { useState } from 'react';

const AddPlayerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        height: '',
        weight: '',
        position: '',
        grade: '',
        rating: '',
        team: '',
        bio: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., API call)
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Player</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Height:
                <input type="text" name="height" value={formData.height} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Weight:
                <input type="text" name="weight" value={formData.weight} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Position:
                <input type="text" name="position" value={formData.position} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Grade:
                <input type="text" name="grade" value={formData.grade} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Rating:
                <input type="text" name="rating" value={formData.rating} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Team:
                <input type="text" name="team" value={formData.team} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Bio:
                <textarea name="bio" value={formData.bio} onChange={handleChange} required></textarea>
            </label>
            <br />
            <button type="submit">Add Player</button>
        </form>
    );
};

export default AddPlayerForm;