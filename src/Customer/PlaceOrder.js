// import React, { useState } from 'react';

// function PlaceOrderButton({ cart, onPlaceOrder }) {
//   const [isPlacingOrder, setIsPlacingOrder] = useState(false);

//   const handlePlaceOrder = () => {
//     setIsPlacingOrder(true);
//     // Simulate placing an order process, you can replace this with actual API call
//     setTimeout(() => {
//       onPlaceOrder(cart);
//       setIsPlacingOrder(false);
//     }, 2000); // Simulating a 2-second order placing process
//   };

//   return (
//     <div className="place-order-button">
//       <button onClick={handlePlaceOrder} disabled={isPlacingOrder || cart.length === 0}>
//         {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
//       </button>
//     </div>
//   );
// }

// export default PlaceOrderButton;
