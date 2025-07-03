import React, { useState } from "react";
import "./LikeBtn.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <button className={`like-button ${liked ? "liked" : ""}`} onClick={toggleLike}>
      ❤️ {count}
    </button>
  );
};

export default LikeButton;
