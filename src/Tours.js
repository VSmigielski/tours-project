import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
    return (
    <section>
        <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
        </div>
        <div className="container">
            <div className="row">
                
                {tours.map((tour) => {
                return (
                    <div className="col-md-6">
                        <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                    </div>
                    );
            })}
            </div>
        </div>
        </section>
    );
};

export default Tours;