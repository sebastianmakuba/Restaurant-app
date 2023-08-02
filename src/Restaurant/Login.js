import React, { useState } from "react";

export default function Login() {
  const [owners, setOwners] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const addRestaurant = (event) => {
    event.preventDefault();

    const newOutlet = {      
      name: restaurantName,
      contact: phoneNumber,
    };

    // Send the data to the server (JSON server)
    fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOutlet),
    })
      .then((response) => response.json())
      .then((data) => {
        
        setOwners([...owners, data]);

        // Reset the form fields after successful registration
        setRestaurantName("");
        setPhoneNumber("");
      })
      
  };

  return (
    <div>
      <form className="center position-absolute top-50 start-50 translate-middle" onSubmit={addRestaurant}>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Restaurant Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="07123456"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
