import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import { useState } from 'react';

const VideoSidebar = ({likes,shares,messages}) => {

    const [liked,setLiked]=useState(false)
    return (
        <div className="video__sidebar">
            <div className='videoSidebar_button'>
            {liked?
            (
                <FavoriteIcon onClick={(e)=>setLiked(false)} className="liked_icon"/>
                
            ):
                ( <FavoriteBorderIcon onClick={(e)=>setLiked(true)} className="liked_icon"/>)
            }
                <p>{liked?likes+1:likes}</p>
            </div>

            <div className='videoSidebar_button'>
                <MessageIcon/>
                <p>{messages}</p>
            </div>

            <div className='videoSidebar_button'>
                <ShareIcon/>
                <p>{shares}</p>
            </div>

            
        </div>
    )
}

export default VideoSidebar
