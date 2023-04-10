import React, { useState } from 'react';

function CommentForm(props) {
  const [userName, setUserName] = useState('');
  const [userContent, setUserContent] = useState('');
  const [userColor, setUserColor] = useState('#000');

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handleUserContentChange(event) {
    setUserContent(event.target.value);
  }

  function handleUserColorChange(event) {
    setUserColor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userName.trim() === '' || userContent.trim() === '') {
      alert('请输入弹幕和弹幕内容');
      return;
    }
    const newComment = {
      name: userName,
      content: userContent,
      color: userColor
    };
    props.onCommentSubmit(newComment);
    setUserName('');
    setUserContent('');
    setUserColor('#000');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>昵称：</label>
        <input type="text" value={userName} onChange={handleUserNameChange} />
      </div>
      <div>
        <label>弹幕内容：</label>
        <textarea value={userContent} onChange={handleUserContentChange}></textarea>
      </div>
      <div>
        <label>弹幕颜色：</label>
        <input type="color" value={userColor} onChange={handleUserColorChange} />
      </div>
      <button type="submit">发送弹幕</button>
    </form>
  );
}

export default CommentForm;
