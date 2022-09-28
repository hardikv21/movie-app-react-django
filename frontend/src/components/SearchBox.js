import React  from 'react';
import { Container, Navbar, Form } from 'react-bootstrap'; 

const SearchBox = ({ props }) => (
    <Navbar expand='lg' variant='light' bg='light'>
        <Container>
            <Form className='d-flex'>
                <Form.Control
                    type='search'
                    placeholder='Search movie by title'
                    className='me-2'
                    aria-label='Search'
                    onChange={(event) => props.setSearch(event.target.value)}
                />
            </Form>
        </Container>
    </Navbar>
);

export default SearchBox;
