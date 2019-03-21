import React from "react";

const Quote = ({ country, destination, photo, distance }) => (
    <figure>
        <p>{country}</p>
        <cite>{destination}</cite>
        <img src={photo} alt={destination} />
        <figcaption>
            <blockquote>{distance}</blockquote>
        </figcaption>
    </figure>
);

export default Quote;