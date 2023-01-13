import React from 'react';
import { Link } from 'react-router-dom';

const Dog = ({image, name, temperament, weight, id }) => {
    //const temperaments = !created ? temperament : map(temp => temp.name);
    
    return (
        <div>
            <Link to={`/dogs/${id}`}>
                <h3>{name}</h3>
                <img src={image} alt={name} width='250px' height='250px'/>
                <h5>Weight: {weight}</h5>
                <span>Temperaments: {temperament}</span>
            </Link>
        </div>
    )
}

export default Dog