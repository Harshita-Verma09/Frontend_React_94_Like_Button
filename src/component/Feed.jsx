// Feed.jsx
import Post from "./Post";
import { useState } from "react";

export default function Feed({ onLike, onDislike }) {
  const images = [
    "https://images.unsplash.com/photo-1744719256525-3deab6fd16ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1745185948516-cfbdd0ae4400?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744566917617-452209a98498?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D"
  ];

  const [postsState, setPostsState] = useState(
    images.map(() => ({ likes: 0, dislikes: 0, isLiked: false, isDisliked: false }))
  );

  const handleLike = (index) => {
    const updated = [...postsState];
    if (!updated[index].isLiked) {
      updated[index].likes = 1;
      updated[index].isLiked = true;
      setPostsState(updated);
      onLike();
    }
  };

  const handleDislike = (index) => {
    const updated = [...postsState];
    if (!updated[index].isDisliked) {
      updated[index].dislikes = 1;
      updated[index].isDisliked = true;
      setPostsState(updated);
      onDislike();
    }
  };

  return (
    <div className="p-6 grid gap-6">
      <h2 className="text-xl font-semibold mb-4">Your Feed</h2>
      {images.map((img, index) => (
        <Post
          key={index}
          imgUrl={img}
          onLike={() => handleLike(index)}
          onDislike={() => handleDislike(index)}
          likes={postsState[index].likes}
          dislikes={postsState[index].dislikes}
        />
      ))}
    </div>
  );
}
