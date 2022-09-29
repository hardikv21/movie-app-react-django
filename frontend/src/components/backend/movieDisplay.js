import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@mui/material';
import { ThumbUpOffAlt, ThumbDownOffAlt, Edit, Delete } from '@mui/icons-material';
import UpdateModal from './updateModal';
import DeleteModal from './deleteModal';

const MovieDisplay = ({ props }) => {
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    
    const handleOpenUpdateModal = () => setOpenUpdateModal(true);
    const handleCloseUpdateModal = () => setOpenUpdateModal(false);
    
    const handleOpenDeleteModal = () => setOpenDeleteModal(true);
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    const handleLikeDislike = (event, type) => {
        event.preventDefault();

        const movie = props.movie;
        type === 'like' ? movie.like++ : movie.dislike++;

        let form_data = new FormData();
        form_data.append('id', movie.id);
        form_data.append('title', movie.title);
        form_data.append('releaseYear', movie.releaseYear);
        form_data.append('poster', movie.poster);
        form_data.append('like', movie.like);
        form_data.append('dislike', movie.dislike);

        props.updateMovie(form_data, movie.id);
    };

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
                <IconButton onClick={(event) => handleLikeDislike(event, 'like')}>
                    <ThumbUpOffAlt />
                </IconButton> {props.movie.like}
                <IconButton onClick={(event) => handleLikeDislike(event, 'dislike')}>
                    <ThumbDownOffAlt />
                </IconButton> {props.movie.dislike}
            </CardActions>
            <CardActions>
                <Button
                    variant='outlined'
                    startIcon={<Edit />}
                    size='small'
                    onClick={handleOpenUpdateModal}
                >Edit</Button>
                <UpdateModal
                    props={{
                        movie: props.movie,
                        openUpdateModal,
                        handleOpenUpdateModal,
                        handleCloseUpdateModal,
                        updateMovie: props.updateMovie
                    }}
                />
                <Button
                    variant='outlined'
                    color='error'
                    startIcon={<Delete />}
                    size='small'
                    onClick={handleOpenDeleteModal}
                >Delete</Button>
                <DeleteModal
                    props={{
                        openDeleteModal,
                        handleOpenDeleteModal,
                        handleCloseDeleteModal,
                        title: props.movie.title,
                        id: props.movie.id,
                        deleteMovie: props.deleteMovie,
                    }}
                />
            </CardActions>
        </Card>
    );
};

export default MovieDisplay;
