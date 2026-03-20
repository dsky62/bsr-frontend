import React, { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchNews = async () => {
    const res = await fetch("http://localhost:5000/news");
    const data = await res.json();
    setNews(data);
  };

  const addNews = async () => {
    await fetch("http://localhost:5000/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    setTitle("");
    setContent("");
    fetchNews();
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>News Admin</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button onClick={addNews}>Add News</button>
      </div>

      <h2>Existing News</h2>
      {news.map((item) => (
        <div key={item._id} style={{ marginBottom: "10px" }}>
          <strong>{item.title}</strong>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default News;

