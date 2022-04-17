import React from 'react';

const ShowServices = (props) => {
    const{id,price,picture,name}=props.service
    return (
        <div className="col-md-6  p-3 ">
        <div class="card-group" >
          <div class="card shadow p-3 mb-5 bg-body rounded">
            <img src={picture} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">
               Price : {price}
              </p>
              <p class="card-text">
               <button  className="btn btn-primary">Buy Now</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShowServices;