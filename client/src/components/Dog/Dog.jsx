import React from 'react';

const Dog = ({image, name, temperament, weight}) => {
    return (
        <div>
            <h3>{name}</h3>
            <image srl={image} alt={name} width='200px' height='250px'/>
            <h5>{weight}</h5>
            <h5>{temperament}</h5>
        </div>
    )
}

export default Dog