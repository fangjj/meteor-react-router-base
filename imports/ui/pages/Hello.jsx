import React from 'react';

export const Hello = ({params,location}) => {
    console.log(params,location);
    return (
        <h3>Hello,{params.name}! You like {location.query.food}.</h3>
    )
}