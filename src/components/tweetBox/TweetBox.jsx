import React, { useState } from 'react';
import './tweetbox.css';
import { Avatar, Button } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';


const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const tweetSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const docRef = await addDoc(collection(db, 'posts'), {
        displayName: 'lampard unser',
        username: 'emma',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avata: 'https://images.freeimages.com/slides/6706fa8fc66148f5b12104ad14720cc2.webp',
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    
    <div className='tweetbox'>
      <form>
        <div className="tweetbox__input">
          <Avatar src='your_avatar_url' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className='tweetbox__imageUrl'
          type="text"
          placeholder="Enter image URL"
        />
        <Button onClick={tweetSubmit} className='tweetbox__tweetbutton'>Tweet</Button>
      </form>
    </div>
  )
};

export default TweetBox;
