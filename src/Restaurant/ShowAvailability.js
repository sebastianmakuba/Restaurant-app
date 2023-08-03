// Customers can book a table 20 - 30 minutes in advance, so it’s important to show table availability.
import React, { useState } from 'react';

const ShowAvailability = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [occupants, setOccupants] = useState('');
  const [tables, setTables] = useState([]);

  const handleSaveTable = () => {
    const newTable = {
      restaurantName,
      tableNumber,
      occupants,
    };

   
    fetch('http://localhost:3000/tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Table added:', data);
        setTables([...tables, data]); // Update the tables state
        alert('Table Added Successfully'); // Show the alert
      })
      .catch(error => {
        console.error('Error adding table:', error);
      });

    // Clearing the input fields
    setRestaurantName('');
    setTableNumber('');
    setOccupants('');
  };

  return (
    <div className="container mt-4">
      <h2>Tables Available</h2>
      <div className="mb-3 w-25">
        <label htmlFor="restaurantName" className="form-label">Restaurant Name</label>
        <input
          type="text"
          className="form-control"
          id="restaurantName"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
        />
      </div>
      <div className="mb-3 w-25">
        <label htmlFor="tableNumber" className="form-label">Table Number</label>
        <input
          type="text"
          className="form-control"
          id="tableNumber"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
      </div>
      <div className="mb-3 w-25">
        <label htmlFor="occupants" className="form-label">Number of Occupants</label>
        <input
          type="number"
          className="form-control"
          id="occupants"
          value={occupants}
          onChange={(e) => setOccupants(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSaveTable}>
        Save
      </button>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Restaurant Name</th>
            <th>Table Number</th>
            <th>Occupants</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table, index) => (
            <tr key={index}>
              <td>{table.restaurantName}</td>
              <td>{table.tableNumber}</td>
              <td>{table.occupants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAvailability;
