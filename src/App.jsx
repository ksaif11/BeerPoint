import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Beer from './Beer';
import './App.css';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer List</h1>
      <input
        type="text"
        placeholder="Search Beers"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="beer-list">
        {filteredBeers.map(beer => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
