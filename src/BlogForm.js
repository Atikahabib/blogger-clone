// src/BlogForm.js
import React, { useState, useEffect } from 'react';

const BlogForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setImage(initialData.image || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Title & Content required!");
    onSubmit({ title, content, image });
    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ color: '#6a0dad' }}>{initialData ? '✏️ Edit Blog' : '📝 New Blog'}</h2>
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={inputStyle}
        placeholder="Write your blog content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button style={buttonStyle} type="submit">
        {initialData ? 'Update Blog' : 'Add Blog'}
      </button>
    </form>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#6a0dad',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default BlogForm;
