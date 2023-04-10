import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentManager from './CommentManager';
import CommentWall from './CommentWall';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/comment-form">发送弹幕</Link>
        </li>
        <li>
          <Link to="/comment-manager">弹幕管理</Link>
        </li>
        <li>
          <Link to="/comment-wall">弹幕墙</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  function handleCommentSubmit(newComment) {
    const newComments = [...comments, { ...newComment, id: Date.now() }];
    setComments(newComments);
    localStorage.setItem('comments', JSON.stringify(newComments));
  }

  function handleCommentDelete(comment) {
    const newComments = comments.filter((c) => c.id !== comment.id);
    setComments(newComments);
    localStorage.setItem('comments', JSON.stringify(newComments));
  }

  function handleCommentColorChange(comment, color) {
    const index = comments.indexOf(comment);
    if (index !== -1) {
      const newComments = [...comments];
      newComments[index].color = color;
      setComments(newComments);
      localStorage.setItem('comments', JSON.stringify(newComments));
    }
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/comment-form" element={<CommentForm onCommentSubmit={handleCommentSubmit} />} />
          <Route
            path="/comment-manager"
            element={
              <CommentManager
                comments={comments}
                onCommentDelete={handleCommentDelete}
                onCommentColorChange={handleCommentColorChange}
              />
            }
          />
          <Route path="/comment-wall" element={<CommentWall comments={comments} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;