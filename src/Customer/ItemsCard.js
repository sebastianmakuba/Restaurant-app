import React from "react";


function ItemsCard({item,onSubmit}){
    
    return(
     <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
         <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={item.image_url} className="card-img-top  img-fluid" />
       <div className="card-body">
     <h5 className="card-title">{item.food}</h5>
     <p className="card-text">{item.price}</p>
     <button className="btn btn-success" onClick={onSubmit}>Add to Cart</button>
      </div>
 </div>
     </div>
    )
 }
 
 
 export default ItemsCard;