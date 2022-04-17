import React from 'react';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
          <section>
            <div className="row">
                <div className="col-12">
                    <img className='w-100'  src="https://images.squarespace-cdn.com/content/v1/5fa7745f2f5c0e2041278686/b250ae91-c444-4a09-927e-f08b1ce8ada5/Ashyana+Banquets+Wedding+-+Downers+Grove.jpg?format=2500w" alt="" />
                </div>
            </div>
          </section>
          <section>
              <div className='d-flex justify-content-center align-item-center p-5 bg-dark text-white'>
              <h2 className='m-5'>"A picture is worth thousand words they say, but we feel wedding photographs are more than that. For the amount of love, joy, promise, dreams and memories they carry within, it is an endless journey of emotions that the couple gets to experience on the big day.we make sure not a moment is missed when you are in the flow of the occasion."</h2>
              </div>
          </section>
          <Services></Services>
        </div>
    );
};

export default Home;