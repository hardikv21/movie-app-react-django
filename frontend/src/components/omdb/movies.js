import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination, Typography, Box, Grid } from '@mui/material';
import MovieDisplay from './movieDisplay';

const Movies = ({ props }) => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}&s=${props.search}`)
            .then((response) => {
                if (!response.data.Error) {
                    setMovies([...response.data.Search]);
                    setTotalPages(Math.ceil(response.data.totalResults / 10));
                    setError('');
                }
                else {
                    setError(response.data.Error);
                }
            })
            .catch((error) => setError(error.message));
    }, [props.search]);

    const handlePageChange = (page) => {
        axios.get(`http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}&s=${props.search}&page=${page}`)
            .then((response) => {
                if (!response.data.Error) {
                    setMovies([...response.data.Search]);
                    setError('');
                }
                else {
                    setError(response.data.Error);
                }
            })
            .catch((error) => setError(error.message));
    };

    return (
        !error
            ? (
            <>
                <Pagination
                    count={totalPages}
                    onChange={(event, page) => handlePageChange(page)}
                    sx={{
                        margin: '2% 0',
                        '& .MuiPagination-ul': {
                            justifyContent: 'center',
                        }
                    }}
                />
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
                            movies.map((movie, index) => (
                                <Grid item xs={2} sm={4} md={3} key={index}>
                                    <MovieDisplay
                                        key={movie.Title.concat(index)}
                                        props={{movie}}
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