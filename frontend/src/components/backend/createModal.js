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

const CreateModal = ({ props }) => {
    const [movie, setMovie] = useState({ title: 'a', releaseYear: '21', like: 0, dislike: 0, poster: null });

    const handleCapture = (event) => {
        setMovie({
            ...movie,
            poster: event.target.files[0],
        })
    };

    const handleAdd = (e) => {
        e.preventDefault();
        
        let form_data = new FormData();
        form_data.append('poster', movie.poster, movie.poster.name);
        form_data.append('title', movie.title);
        form_data.append('releaseYear', movie.releaseYear);
        form_data.append('like', movie.like);
        form_data.append('dislike', movie.dislike);

        props.addMovie(form_data);
    }

    return (
        <Modal
            open={props.openAddModal}
            onClose={props.handleCloseAddModal}
        >
            <Box sx={style}>
                <Typography id='add-modal-title' variant='h6' component='h2' sx={{ justifyContent: 'center' }}>
                    Add Movie
                </Typography>
                <Box>
                    <TextField
                        id='name'
                        variant='standard'
                        label='Name'
                        onChange={(event) => setMovie({ ...movie, title: event.target.value })}
                        required
                    /><br /><br />
                    <TextField
                        id='releaseYear'
                        variant='standard'
                        label='Release Year'
                        onChange={(event) => setMovie({ ...movie, releaseYear: event.target.value })}
                        required
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
                    /><br /><br />
                    <TextField
                        id='dislike'
                        variant='standard'
                        label='Dislike'
                        onChange={(event) => setMovie({ ...movie, dislike: event.target.value })}
                        type='number'
                        defaultValue='0'
                        helperText='(optional)'
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '2%' }}>
                    <Button
                        variant='outlined'
                        onClick={props.handleCloseAddModal}
                    >Cancel</Button>
                    <Button
                        variant='outlined'
                        color='warning'
                        onClick={handleAdd}
                        disabled={!movie.title || !movie.releaseYear}
                    >Add</Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default CreateModal;