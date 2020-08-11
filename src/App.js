import React, { useState, useEffect } from 'react'
import Video from './components/Video'
import './App.css'
import { db } from './firebase'
export default function App() {

  const [videos,setVideos]=useState([])

    useEffect(()=>{
      db.collection('vedios')
      .orderBy('timeStamp','desc')
      .onSnapshot(snap=>(
        setVideos(snap.docs.map(doc=>doc.data()))
      ))  
    },[])
  return (
    <div className="app">
      <div className="app_video">
      {videos.map(({url,channel,description,song,likes,shares,messages})=>(
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
      ))}
        <Video
          likes={310}
          shares={200}
          messages={111}
          url="http://localhost:3000/static/media/Saanson%20Ke%20-%20Raees%20-%20HD%20HQ.e8a64dc3.mp4"
          song='Saanson Ke - Raees - HD HQ.mp4'
          description="Aao kabhi hawali par"
          channel='@siddiali786'
        />
        
      </div>

    </div>
  )
}
