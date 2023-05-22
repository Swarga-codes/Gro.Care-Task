import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import VideoCardStyles from './VideoCard.module.css'


export default function ActionAreaCard({post}) {
  return (
    <Card sx={{ minWidth: 345, margin: '0.5rem 0.5rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={post.submission.thumbnail}
          alt="green iguana"
        />

        <CardContent sx={{display:'flex',background:'#1a1a1a',pl:'0rem',border:'2px solid #1a1a1a'}}>
        <div className="avatar">
        <Avatar sx={{ bgcolor: 'red'}} aria-label="recipe" src={post.creator.pic}/>
    
         
            </div>
            <div className={VideoCardStyles.card_detail}>
          <Typography gutterBottom variant="h5" component="div" className={VideoCardStyles.video_title}>
            {post.submission.title}
          </Typography>
          
          <Typography variant='p' className={VideoCardStyles.creator_details}>{post.creator.handle}</Typography>
          <br />
          <Typography variant='p' className={VideoCardStyles.creator_details}>{post.reaction.count}{" Reactions"}</Typography>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}