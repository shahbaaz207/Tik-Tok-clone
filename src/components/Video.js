import React from "react";
import { useRef } from "react";
import { useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  likes,
  messages,
  shares,
  song,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoRef = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video_player"
        loop
        onClick={onVideoRef}
        ref={videoRef}
        type="video/mp4/"
        src={url}
      ></video>
      <VideoFooter song={song} channel={channel} description={description} />

      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
