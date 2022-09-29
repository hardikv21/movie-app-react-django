import React, { useState } from 'react';
import { Box, Button, Typography, Modal, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const UpdateModal = ({ props }) => {
    const [movie, setMovie] = useState(props.movie);

    const handleCapture = (event) => {
        let temp = { ...movie };
        temp.poster = event.target.files[0];
        setMovie(temp);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        
        let form_data = new FormData();
        form_data.append('id', movie.id);
        form_data.append('title', movie.title);
        form_data.append('releaseYear', movie.releaseYear);
        if (movie.poster) {
            form_data.append("poster", movie.poster, movie.poster.name);
        }
        form_data.append('like', movie.like);
        form_data.append('dislike', movie.dislike);

        props.updateMovie(form_data, movie.id);
        props.handleCloseUpdateModal();
    }

    return (
        <Modal
            open={props.openUpdateModal}
            onClose={props.handleCloseUpdateModal}
        >
            <Box sx={style}>
                <Typography id='update-modal-title' variant='h6' component='h2' sx={{ justifyContent: 'center' }}>
                    Update Movie
                </Typography>
                <Box>
                    <TextField
                        id='name'
                        variant='standard'
                        label='Name'
                        onChange={(event) => setMovie({ ...movie, title: event.target.value })}
                        required
                        value={movie.title}
                    /><br /><br />
                    <TextField
                        id='releaseYear'
                        variant='standard'
                        label='Release Year'
                        onChange={(event) => setMovie({ ...movie, releaseYear: event.target.value })}
                        required
                        value={movie.releaseYear}
                    /><br /><br />
                    <input
                        accept='image/*'
                        style={{ display: 'none' }}
                        id='image-upload'
                        type='file'
                        onChange={handleCapture}
                    />
                    <label htmlFor='image-upload'>
                    Image  <Button variant='outlined' component='span' color='secondary'>
                            Upload
                        </Button>
                    </label><br /><br />
                    <TextField
                        id='like'
                        variant='standard'
                        label='Like'
                        onChange={(event) => setMovie({ ...movie, like: event.target.value })}
                        type='number'
                        defaultValue='0'
                        helperText='(optional)'
                        value={movie.like}
                    /><br /><br />
                    <TextField
                        id='dislike'
                        variant='standard'
                        label='Dislike'
                        onChange={(event) => setMovie({ ...movie, dislike: event.target.value })}
                        type='number'
                        defaultValue='0'
                        helperText='(optional)'
                        value={movie.dislike}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '2%' }}>
                    <Button
                        variant='outlined'
                        onClick={props.handleCloseUpdateModal}
                    >Cancel</Button>
                    <Button
                        variant='outlined'
                        color='warning'
                        onClick={handleUpdate}
                        disabled={!movie.title || !movie.releaseYear || !movie.poster}
                    >Update</Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default UpdateModal;