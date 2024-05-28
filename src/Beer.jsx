import React from 'react';
import './Beer.css';

const BeerCard = ({ beer }) => {
  return (
    <div className="beer">
      <img src={beer.image} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.description}</p>
    </div>
  );
}

export default BeerCard;
