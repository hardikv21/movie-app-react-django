import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const MovieDisplay = ({ props }) => (
    <Card sx={{ width: 200 }}>      
        <CardMedia
            component='img'
            image={props.movie.Poster}
            alt='N/A'
        />
        <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
                {props.movie.Title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                {props.movie.Year}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Do Something</Button>
        </CardActions>
    </Card>
);

export default MovieDisplay;
