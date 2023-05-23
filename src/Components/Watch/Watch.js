import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import WatchStyles from './Watch.module.css'
import { Avatar, Box, Typography } from '@mui/material'
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
function Watch() {
   const location=useLocation()
   const data=location.state.data;

    useEffect(()=>{
window.scrollTo(0,0)
    },[])
  return (
    <Box className={WatchStyles.Watch}>
    <Box className={WatchStyles.player_detail}>
    <ReactPlayer url={data.submission.mediaUrl} controls width="100%" height="25rem"/>
    <Box className={WatchStyles.video_details}>
    <Typography fontSize='larger' fontWeight='600' mt='1rem'>{data.submission.title}</Typography>
    <Box display='flex' mt="1rem" className={WatchStyles.channel_stats}>
    <Box display={"flex"}>
    <Avatar src={data.creator.pic}/><span className={WatchStyles.data_handle}><b>{data.creator.handle}</b></span>
    </Box>
    <Box className={WatchStyles.like_comm}>
    <FaceRetouchingNaturalIcon/>
    <Typography mr='2rem'>&nbsp;{data.reaction.count}<b> Reactions</b></Typography>
    <ModeCommentIcon/>
    <Typography>&nbsp;{data.comment.count}<b> Comments</b></Typography>
    </Box>
    </Box>
    <Typography fontSize='medium' fontWeight='600' mt='1rem'>Description</Typography>
    <Typography fontSize='larger' fontWeight='600' mt='0.5rem'>{data.submission.description}</Typography>
    </Box>
    </Box>
    </Box>
  )
}

export default Watch