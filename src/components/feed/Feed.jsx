import React, { useEffect, useState } from 'react';
import './feed.css';
import TweetBox from '../tweetBox/TweetBox';
import Post from '../post/Post';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import {  db } from '../../firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const set = getFirestore(db.app);  

    const unsubscribe = onSnapshot(collection(set, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();  
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
      {posts.map((post, index) => (
        <Post
          key={index}  
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avata={post.avata}
        />
      ))}
     </FlipMove>
    </div>
  );
};

export default Feed;
