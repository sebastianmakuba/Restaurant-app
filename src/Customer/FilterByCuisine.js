import React, { useState } from 'react';

function FilterByCuisine({ restaurants, onFilter }) {
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  const handleFilterClick = () => {
    onFilter(selectedCuisine);
  };
  return (
    <div>
      <h2>Filter by Cuisine</h2>
      <label>
        Cuisine:
        <select value={selectedCuisine} onChange={handleCuisineChange}>
          <option value="">All</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.name}>
              {restaurant.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
}

export default FilterByCuisine;
