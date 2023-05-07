import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';

import './Intro.css';

/*
app__video
  video
  app__video-overlay
    app__video-overlay_circle
      BsPauseFill || BsFillPlayFill
*/

const Intro = () => {

  const [playVideo, setplayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo)
    
    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <div className='app__video'>
      <video
        ref={vidRef}
        src={meal}
        type='video/mp4'
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div 
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {playVideo 
          ? <BsPauseFill color='#fff' fontSize={30} />
          : <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>

    </div>
  );
}
export default Intro;