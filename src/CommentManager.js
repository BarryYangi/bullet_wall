import React from 'react';

function CommentManager(props) {
  function handleDeleteComment(comment) {
    props.onCommentDelete(comment);
  }

  function handleColorChange(comment, color) {
    props.onCommentColorChange(comment, color);
  }

  return (
    <ul>
      {props.comments.map((comment) => (
        <li key={comment.id}>
          <span style={{ color: comment.color }}>{comment.content}</span>
          <button onClick={() => handleDeleteComment(comment)}>删除</button>
          <select value={comment.color} onChange={(event) => handleColorChange(comment, event.target.value)}>
            <option value="#000">默认</option>
            <option value="#f00">红色</option>
            <option value="#0f0">绿色</option>
            <option value="#00f">蓝色</option>
          </select>
        </li>
      ))}
    </ul>
  );
}

export default CommentManager;
