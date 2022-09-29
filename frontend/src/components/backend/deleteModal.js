import React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';

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

const DeleteModal = ({ props }) => {
    return (
        <Modal
            open={props.openDeleteModal}
            onClose={props.handleCloseDeleteModal}
        >
            <Box sx={style}>
                <Typography id='delete-modal-title' variant='h6' component='h2'>
                    Are you sure you want to delete this "{props.title}"?
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '2%' }}>
                    <Button
                        variant='outlined'
                        onClick={props.handleCloseDeleteModal}
                    >Cancel</Button>
                    <Button
                        variant='outlined'
                        color='error'
                        onClick={() => props.deleteMovie(props.id)}
                    >Delete</Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default DeleteModal;