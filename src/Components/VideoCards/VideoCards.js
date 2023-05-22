import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';


export default function ActionAreaCard({post}) {
  return (
    <Card sx={{ maxWidth: 345, margin: '0.5rem 0.5rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={post.submission.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.submission.title}
          </Typography>
          <Avatar sx={{ bgcolor: 'red'}} aria-label="recipe">
              R
            </Avatar>
          <CardHeader
          title={post.creator.handle}
          subheader="September 14, 2016"
        sx={{padding:0}}/>
          {/*<Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
        </Typography>*/}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}