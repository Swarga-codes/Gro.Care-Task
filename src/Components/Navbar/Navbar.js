import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import YoutubeIcon from '../assets/youtube.png'
import { Link } from 'react-router-dom';
export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:'rgb(18, 18, 18)'}}>
        <Toolbar variant="dense">

          <Link to='/' style={{display:'flex',textDecoration:'none',color:'#fff'}}>
          <img src={YoutubeIcon} alt="" width="30px"/>
          <Typography variant="h6" color="inherit" component="div" ml="0.5rem">
            {" "}YouTubeClone
          </Typography>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}