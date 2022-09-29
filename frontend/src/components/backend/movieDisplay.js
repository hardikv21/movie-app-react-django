import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@mui/material';
import { ThumbUpOffAlt, ThumbDownOffAlt, Edit, Delete } from '@mui/icons-material';
import DeleteModal from './deleteModal';

const MovieDisplay = ({ props }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    
    const handleOpenDeleteModal = () => setOpenDeleteModal(true);
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    return (
        <Card sx={{ width: 200 }}>      
            <CardMedia
                component='img'
                image={props.movie.poster}
                alt='N/A'
            />
            <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                    {props.movie.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {props.movie.releaseYear}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    onClick={(e) => {
                        e.preventDefault();

                        props.movie.like++;
                        const movie = props.movie;
                        console.log(movie.poster);
        
                        let form_data = new FormData();
                        form_data.append('id', movie.id);
                        // form_data.append('poster', movie.poster);
                        form_data.append('title', movie.title);
                        form_data.append('releaseYear', movie.releaseYear);
                        form_data.append('like', movie.like);
                        form_data.append('dislike', movie.dislike);

                        props.updateMovie(form_data, movie.id);
                    }}
                >
                    <ThumbUpOffAlt />
                </IconButton> {props.movie.like}
                <IconButton
                    onClick={() => {
                        props.movie.dislike++;
                        props.updateMovie(props.movie);
                    }}
                >
                    <ThumbDownOffAlt />
                </IconButton> {props.movie.dislike}
            </CardActions>
            <CardActions>
                <Button
                    variant='outlined'
                    startIcon={<Edit />}
                    size='small'
                >Edit</Button>
                <Button
                    variant='outlined'
                    color='error'
                    startIcon={<Delete />}
                    size='small'
                    // onClick={() => props.deleteMovie(props.movie)}
                    onClick={handleOpenDeleteModal}
                >Delete</Button>
                <DeleteModal
                    props={{
                        openDeleteModal,
                        handleOpenDeleteModal,
                        handleCloseDeleteModal,
                        title: props.movie.title,
                        deleteMovie: () => props.deleteMovie(props.movie.id),
                    }}
                />
            </CardActions>
        </Card>
);
};

export default MovieDisplay;
