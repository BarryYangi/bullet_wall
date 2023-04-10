import React, { useEffect, useRef } from 'react';
import './CommentWall.css';

function CommentWall(props) {
  const commentContainerRef = useRef(null);

  useEffect(() => {
    if (!commentContainerRef.current) return;

    const maxDuration = 15; // seconds
    const minDuration = 10; // seconds
    const minDelay = 2; // seconds
    const maxDelay = 10; // seconds
    const maxFontSize = 24; // pixels
    const minFontSize = 18; // pixels

    const comments = props.comments.slice(0, 50); // limit the number of comments to avoid performance issues

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function getRandomPosition() {
      const positionX = -commentContainerRef.current.offsetWidth;
      const positionY = Math.floor(getRandomArbitrary(0, window.innerHeight - 32)); // 32 is the estimated height of each line
      return { x: positionX, y: positionY };
    }

    comments.forEach((comment) => {
      const commentNode = document.getElementById(`comment-${comment.id}`);
      if (!commentNode) return;

      const fontSize = Math.floor(getRandomArbitrary(minFontSize, maxFontSize));
      const position = getRandomPosition();
      const duration = getRandomArbitrary(minDuration, maxDuration);
      const delay = getRandomArbitrary(minDelay, maxDelay);

      commentNode.style.fontSize = `${fontSize}px`;
      commentNode.style.left = `${position.x}px`;
      commentNode.style.top = `${position.y}px`;
      commentNode.style.animationDuration = `${duration}s`;
      commentNode.style.animationDelay = `${delay}s`;
    });
  }, [props.comments]);

  const commentNodes = props.comments.slice(0, 50).map((comment) => (
    <span key={comment.id} id={`comment-${comment.id}`} style={{ color: comment.color }}>
      [{comment.name}]: {comment.content}
    </span>
  ));

  return (
    <div className="comment-wall" ref={commentContainerRef}>
      {commentNodes}
    </div>
  );
}

export default CommentWall;
