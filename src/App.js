// src/App.js
import React, { useState, useEffect } from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load blogs from localStorage on first render
  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) setBlogs(JSON.parse(storedBlogs));
  }, []);

  // Save blogs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    if (editIndex !== null) {
      const updated = [...blogs];
      updated[editIndex] = blog;
      setBlogs(updated);
      setEditIndex(null);
    } else {
      setBlogs([...blogs, blog]);
    }
  };

  const deleteBlog = (index) => {
    const filtered = blogs.filter((_, i) => i !== index);
    setBlogs(filtered);
  };

  const editBlog = (index) => {
    setEditIndex(index);
  };

  return (
    <div
      style={{
        padding: '30px',
        backgroundColor: '#f2f2f2',
        fontFamily: 'Segoe UI',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ color: '#6a0dad', textAlign: 'center' }}>🌸 Active Blogs 🌸</h1>

      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: '#fff',
          padding: '25px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <BlogForm onSubmit={addBlog} initialData={editIndex !== null ? blogs[editIndex] : null} />
        <hr />
        <BlogList blogs={blogs} onDelete={deleteBlog} onEdit={editBlog} />
      </div>
    </div>
  );
}

export default App;
