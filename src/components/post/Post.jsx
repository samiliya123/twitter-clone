import React, { forwardRef } from 'react'
import './post.css'
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material'
 

const Post = forwardRef(({ displayName, username, verified, text, image, avata }, ref) => {
     
        return (
            <div className="post" ref={ref}>
              <div className="post__avata">
                <Avatar src={avata}/>
              </div>
              <div className="post__body">
                <div className="post__header">
                  <div className="post__headerText">
                    <h3>{displayName} <span className='post__headerSpecial'>{verified && <VerifiedUser className='post__badge' />} @{username} </span> </h3>
                  </div>
                  <div className="post__description">
                    <p>{text}</p>
                  </div>
                </div>
                <img src={image} alt=''/>
                <div className="post__footer">
                  
                  <ChatBubbleOutline fontSize='small'/>
                  <Repeat fontSize='small'/>
                  <FavoriteBorder fontSize='small'/>
                  <Publish fontSize='small'/>

                </div>
              </div>
            </div>
        )
      })
      
      export default Post