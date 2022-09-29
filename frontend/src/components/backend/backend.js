import React  from 'react';
import { useState } from 'react';
import SearchBox from '../commonComponents/searchBox';
import Movies from './movies';

const BackendComponent = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <SearchBox props={{ setSearch }} />
            <Movies props={{ search }} />
        </>
    )
};

export default BackendComponent;