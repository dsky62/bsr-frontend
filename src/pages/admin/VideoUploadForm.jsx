import React, { useState } from 'react';

const VideoUploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the logic to handle the file upload and metadata submission here
    console.log('File:', file);
    console.log('Title:', title);
    console.log('Description:', description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Upload Video:</label>
        <input type="file" accept="video/*" onChange={handleFileChange} required />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default VideoUploadForm;