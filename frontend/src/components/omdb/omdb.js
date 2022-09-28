import React  from 'react';
import { useState } from 'react';
import SearchBox from './searchBox';
import Movies from './movies';

const OmdbComponent = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <SearchBox props={{ setSearch }} />
            <Movies props={{ search }} />
        </>
    )
};

export default OmdbComponent;