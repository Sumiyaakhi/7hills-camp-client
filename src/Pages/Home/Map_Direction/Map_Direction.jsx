import React from 'react';

const Map_Direction = () => {
    return (
        <div>
           <div className="mt-10 mb-10">
            <h1 className="font-bold text-3xl text-center font-serif pb-5">Find Our <span className="text-secondary ">Location</span></h1>
            <p className="text-center text-gray-400 pb-5">Discover us at our prime location to explore the perfect solution for your business.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.736114493185!2d90.36484007028851!3d23.756787841405366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf514d1469cf%3A0xdd853a290eab7237!2s4%2C%201%20Block%23B%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1704877240959!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> 
        </div>
    );
};

export default Map_Direction;