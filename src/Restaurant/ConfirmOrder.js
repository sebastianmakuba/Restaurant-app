// The outlet owner/waiter should confirm the order in the dashboard so that the customer can be notified that their order has been received and it will be served in x amount of time.
import React, { useState, useEffect } from 'react';

const ConfirmOrder = () => {
  const [orders, setOrders] = useState([]);

  function confirm(){
    alert("The Order Has Been Confirmed Successfully!")
  }
  useEffect(() => {
    // Fetch orders 
    fetch('http://localhost:3000/orders') 
      .then(response => response.json())
      .then(data => {
        setOrders(data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Order Confirmation</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Food ID</th>
            <th>Table No</th>
            <th>Timestamp</th>
            <th>Restaurant ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.food_id}</td>
              <td>{order.table_no}</td>
              <td>{order.timestamp}</td>
              <td>{order.restaurant_id}</td>
              <td>
                <button className="btn btn-primary " onClick={confirm}>
                  CONFIRM
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConfirmOrder;
