import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Pagination, Container } from 'react-bootstrap';
import MovieDisplay from './MovieDisplay';
import './Movie.css';

const MoviePagination = ({ props }) => {
    const [movies, setMovies] = useState([]);
    const [activePage, setActivePage] = useState(0);
    const [limit, setLimit] = useState([]);
    const [error, setError] = useState('');

    const createMovieDisplay = (data) => {
        const createCol = (i, item) => (
            item
            ? (
                <Col>
                    <MovieDisplay
                        key={i + activePage}
                        props={{movie: item}}
                    />
                </Col>
            )
            : null
        );

        const items = [];
        for (let i = 0; i < data.length; i += 5) {
            items.push(
                <Row>
                    {createCol(i, data[i])}
                    {createCol(i + 1, data[i + 1])}
                    {createCol(i + 2, data[i + 2])}
                    {createCol(i + 3, data[i + 3])}
                    {createCol(i + 4, data[i + 4])}
                </Row>
            );
        }

        return items;
    };

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);

        axios.get(`http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}&s=${props.search}&page=${pageNumber + 1}`)
            .then((response) => {
                if (!response.data.Error) {
                    setMovies([...createMovieDisplay(response.data.Search)]);
                    setError('');
                }
                else {
                    setError(response.data.Error);
                }
            })
            .catch((error) => console.log(error));
    };

    const paginationItem = (no) => (
        <Pagination.Item
            onClick={() => handlePageChange(no)}
            key={no}
        >
            {no + 1}
        </Pagination.Item>
    );

    useEffect(() => {
        axios.get(`http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}&s=${props.search}`)
            .then((response) => {
                if (!response.data.Error) {
                    setMovies([...createMovieDisplay(response.data.Search)]);
                    const totalPage = Math.ceil(response.data.totalResults / 10);
                    let items = [];
                    for (let i = 0; i < totalPage; i++) {
                        items.push(paginationItem(i));
                    }
                    setLimit(items);
                    setError('');
                }
                else {
                    setError(response.data.Error);
                }
            })
            .catch((error) => console.log(error));
    }, [props.search]);

    return (
        !error
        ? (
        <>
            <Container>{movies}</Container>
            <div className='scrollmenu'>
                <Pagination className='px-4'>
                    <Pagination.Item
                        onClick={() => handlePageChange(activePage - 1)}
                        disabled={activePage === 0}
                    >
                        Previous
                    </Pagination.Item>
                    {limit}
                    <Pagination.Item
                        onClick={() => handlePageChange(activePage + 1)}
                        disabled={activePage === (limit.length - 1)}
                    >
                        Next
                    </Pagination.Item>
                </Pagination>
            </div>
        </>
        )
        : <p>{error}</p>
    );
}

export default MoviePagination;