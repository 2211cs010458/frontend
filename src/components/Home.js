import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is my first post!', likes: 0 },
    { id: 2, title: 'Hello World', content: 'Welcome to our social media app!', likes: 0 }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="home">
      <h1>Welcome to SocialMedia app</h1>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="post-actions">
              <button onClick={() => handleLike(post.id)}>
                ❤️ {post.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;