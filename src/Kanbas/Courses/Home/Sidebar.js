// Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <button>Import Existing Content</button>
      <button>Import from Commons</button>
      <button>Choose Home Page</button>
      <button>View Course Stream</button>
      <button>New Announcement</button>
      <button>New Analytics</button>
      <button>View Course Notifications</button>
      
      <div className="todo-section">
        <h3>To Do</h3>
        <div className="todo-item">
          <span>Grade A1 - ENV + HTML</span>
          <span>100 points • Sep 18 at 11:59pm</span>
          <button>x</button>
        </div>
        <div className="todo-item">
          <span>Grade A2 - CSS + BOOTSTRAP</span>
          <span>100 points • Oct 2 at 11:59pm</span>
          <button>x</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
