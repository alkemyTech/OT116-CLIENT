import Grid from '@mui/material/Grid/Grid';
import Button from "@mui/material/Button/Button";
import IconButton from "@mui/material/IconButton/IconButton";
import {
    PlayArrow,
    Pause,
    VolumeOff,
    VolumeDown,
    VolumeUp
} from "@mui/icons-material";
const CustomVideoPlayerControls = ({playing,volume,currentSeek,handlePlay,handlePause,handleSeekChange,handleVolumeChange,durationOfVideo}) => {

    return (
        <div>
        <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='space-between'
        >
           { !playing ? (<IconButton onClick={handlePlay}>
                <PlayArrow fontSize='inherit'/>
            </IconButton>):
            (<IconButton onClick={handlePause}>
                <Pause fontSize='inherit'/>
            </IconButton>)
            }
            <div style={{width:'72%'}}>
                <input
                    type='range'
                    min={0}
                    max={durationOfVideo}
                    value={currentSeek}
                    onInput={(e)=>handleSeekChange(e)}
                    style={{width:'100%'}}
                />
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
                <div>
                    {
                        (volume) != 0 ? volume > 50 ? <VolumeUp/> : <VolumeDown/> : <VolumeOff/>
                    }
                </div>
                <input
                    type='range'
                    min={0}
                    max={100}
                    value={volume}
                    onInput={(e)=>handleVolumeChange(e)}
                />
            </div>
        </Grid>
    </div>
    )
}

export default CustomVideoPlayerControls
