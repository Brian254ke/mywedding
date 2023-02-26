/*import MyVideo from "../videos/group8.mp4";
import ReactPlayer from 'react-player'
const Video =()=>{
    return (
        <div className="myvideo">
            <ReactPlayer
            
            />
            <video  width="50%" height="50%" preload="auto">
            <source src={MyVideo} type="video/mp4" />
            </video>
        </div>
    
  )};
  export default Video;*/
import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://youtu.be/HPmOAbgOQqg';
function Video() {
   const playerRef = useRef(null);
   return (
      <div className="myvideo">
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
   )
};
export default Video;