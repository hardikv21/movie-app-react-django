import SearchBox from './components/SearchBox';
import MoviePagination from './components/MoviePagination';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import React  from 'react';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='App'>
      <SearchBox props={{ setSearch }} />
      <MoviePagination props={{ search }} />
    </div>
  );
};

export default App;
