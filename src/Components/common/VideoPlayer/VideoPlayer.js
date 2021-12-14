import React, {useState,useRef} from 'react';
import ReactPlayer from "react-player";
import CustomVideoPlayerControls from './CustomVideoPlayerControls'

const VideoPlayer = ({video}) => {
    const [videoState, setVideoState] = useState({
        isPlay:false,
        currentSeek:0,
        volumeBar:30,
        volume:30,
        durationOfVideo: 0,
        muted:false
    });
    const refHostVideo = useRef();
    const handleVolumeChange = ({target}) =>{
        setVideoState({...videoState,volume:target.value / 100 , volumeBar: target.value});
    };
    const handleOnProgress = ({playedSeconds}) =>{
        setVideoState({...videoState,currentSeek: playedSeconds});
    };
    const handleSeekChange = ({target}) =>{
        setVideoState({...videoState,currentSeek:target.value});
        refHostVideo.current.seekTo(target.value);
    };
    const handlePlay = () =>{
        setVideoState({...videoState,isPlay:true,durationOfVideo:refHostVideo.current.getDuration()});
    };
    const handlePause = () =>{
        setVideoState({...videoState,isPlay:false});
    };
    const {isPlay,currentSeek,volumeBar,volume,durationOfVideo,muted} = videoState;
    return (
        <div>
            <ReactPlayer
                url={video}
                width='100%'
                height='350px'
                muted={muted}
                volume={volume}
                playing={isPlay}
                ref={refHostVideo}
                onProgress={handleOnProgress}
            />
            <CustomVideoPlayerControls
                playing={isPlay}
                volume={volumeBar}
                handlePlay={handlePlay}
                handlePause={handlePause}
                currentSeek = {currentSeek}
                handleSeekChange={handleSeekChange}
                handleVolumeChange={handleVolumeChange}
                durationOfVideo={durationOfVideo}
            />
        </div>
    );
};

export default VideoPlayer;
