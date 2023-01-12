import React from 'react';

const Dog = ({image, name, temperament, weight}) => {
    const temperaments = Array.isArray(temperament) ? temperament.map(temp => temp.dataValues.name) : temperament;
    
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} width='250px' height='250px'/>
            <h5>{weight}</h5>
            <h5>{temperaments}</h5>
        </div>
    )
}

export default Dog