// src/BlogList.js
import React from 'react';

const BlogList = ({ blogs, onDelete, onEdit }) => {
  return (
    <div>
      <h2 style={{ color: '#6a0dad' }}>📰 All Blogs</h2>
      {blogs.map((blog, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            margin: '20px 0',
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: '#f9f5ff',
          }}
        >
          <h3>{blog.title}</h3>
          {blog.image && (
            <img
              src={blog.image}
              alt="Blog"
              style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '6px', margin: '10px 0' }}
            />
          )}
          <p>{blog.content}</p>
          <button onClick={() => onEdit(index)} style={btn}>
            ✏️ Edit
          </button>
          <button onClick={() => onDelete(index)} style={{ ...btn, marginLeft: '10px', backgroundColor: '#e74c3c' }}>
            🗑️ Delete
          </button>
        </div>
      ))}
    </div>
  );
};

const btn = {
  backgroundColor: '#6a0dad',
  color: 'white',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default BlogList;
