import React from 'react';
import './ShowServices.css'

const ShowServices = (props) => {
    const{id,price,picture,name}=props.service
    return (
        <div className="col-md-6  p-3 ">
        <div className="card-group" >
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <img src={picture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
               Price : {price}
              </p>
              <p className="card-text">
               <button  className="btn btn-primary">Buy Now</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShowServices;