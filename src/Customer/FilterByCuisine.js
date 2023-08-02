import React, { useState } from 'react';

const FilterOptions = ({ restaurants, onFilter }) => {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleFilterClick = () => {
    onFilter(selectedCuisine, selectedPrice);
  };

  return (
    <div>
      <h2>Filter Options</h2>
      <div>
        <label>
          Cuisine:
          <select value={selectedCuisine} onChange={handleCuisineChange}>
            <option value="">All</option>
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Price:
          <select value={selectedPrice} onChange={handlePriceChange}>
            <option value="">All</option>
            <option value="lowest">Lowest to Highest</option>
            <option value="highest">Highest to Lowest</option>
          </select>
        </label>
      </div>
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
};

export default FilterOptions;
