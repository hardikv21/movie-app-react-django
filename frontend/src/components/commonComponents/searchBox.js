import * as React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBox = ({ props }) => {
    return (
        <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, margin: 'auto' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder='Search movie by title'
                onChange={(event) => props.setSearch(event.target.value)}
            />
            <IconButton disabled type='button' sx={{ p: '10px' }}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBox;