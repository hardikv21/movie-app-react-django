import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination, Typography, Box, Grid, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import MovieDisplay from './movieDisplay';
import CreateModal from './createModal';

const Movies = ({ props }) => {
    const [movies, setMovies] = useState({});
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState('');
    const [openAddModal, setOpenAddModal] = useState(false);
    
    const handleOpenAddModal = () => setOpenAddModal(true);
    const handleCloseAddModal = () => setOpenAddModal(false);

    const getMovies = () => {
        axios.get(`http://127.0.0.1:8000/movie/?search=${props.search}&page=1`)
            .then((response) => {
                const temp = {};
                response.data.results.forEach((movie) => {
                    temp[movie.id] = movie;
                });
                setMovies(temp);
                setTotalPages(Math.ceil(response.data.count / 10));
                setError('');
            })
            .catch((error) => setError(error.message));
    };

    useEffect(getMovies, [props.search]);

    const handlePageChange = (page) => {
        axios.get(`http://127.0.0.1:8000/movie/?search=${props.search}&page=${page}`)
            .then((response) => {
                const temp = {};
                response.data.results.forEach((movie) => {
                    temp[movie.id] = movie;
                });
                setMovies(temp);
                setError('');
            })
            .catch((error) => setError(error.message));
    };

    const addMovie = (movie) => {
        axios.post(
            `http://127.0.0.1:8000/movie/`,
            movie,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        )
            .then(getMovies)
            .catch((error) => setError(error.message));
    }

    const updateMovie = (movie, id) => {
        axios.put(
            `http://127.0.0.1:8000/movie/${id}/`,
            movie,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        )
            .then((response) => {
                const temp = {...movies};
                temp[response.data.id.toString()] = response.data;
                setMovies(temp);    
            })
            .catch((error) => setError(error.message));
    }

    const deleteMovie = (movieId) => {
        axios.delete(`http://127.0.0.1:8000/movie/${movieId}`)
            .then(getMovies)
            .catch((error) => setError(error.message));
    }

    return (
        !error
            ? (
            <>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
                    <Pagination
                        count={totalPages}
                        onChange={(event, page) => handlePageChange(page)}
                    />
                    <Button
                        variant='outlined'
                        color='warning'
                        startIcon={<Add />}
                        size='small'
                        onClick={handleOpenAddModal}
                    >Add Movie</Button>
                    <CreateModal
                        props={{
                            addMovie,
                            openAddModal,
                            handleOpenAddModal,
                            handleCloseAddModal,
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        '& .MuiGrid-root': {
                            margin: 'auto',
                        }
                    }}
                >
                    <Grid
                        container
                        spacing={{ xs: 2, sm: 3, md: 4 }}
                        columns={{ xs: 4, sm: 12, md: 12 }}
                    >
                        {
                            Object.keys(movies).map((movieKey) => (
                                <Grid item xs={2} sm={4} md={3} key={movieKey}>
                                    <MovieDisplay
                                        key={movieKey}
                                        props={{
                                            movie: movies[movieKey],
                                            updateMovie,
                                            deleteMovie,
                                        }}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </>
            )
            : (
                <Typography
                    variant='h6'
                    color='text.secondary'
                    style={{ textAlign: 'center', marginTop: '2%' }}
                >{error}</Typography>
            )
    );
}

export default Movies;