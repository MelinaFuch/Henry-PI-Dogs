import React from 'react';
import { Link } from 'react-router-dom';
import style from './Dog.module.css'

const Dog = ({image, name, temperament, weight_min, weight_max, id }) => {
    const firstLetter = (str) => {
        const firstLetter = str.charAt(0).toUpperCase();
        const restOfStr = str.slice(1);
        return firstLetter.concat(restOfStr);
    }

    return (
        <div className={style.conteinerAll}>
            <Link className={style.link_detail} to={`/dogs/${id}`}>
                <h3 className={style.Name}>{firstLetter(name)}</h3>
                <img className={style.Image} src={image} alt={name}/>
            </Link>
                <div className={style.conteinerData}>
                    <h5 className={style.nameData}>Weight:  </h5>
                    <p className={style.data}> Min: {weight_min}Kg. - Max: {weight_max}Kg.</p>
                </div>
                <div className={style.conteinerData}>
                    <h5 className={style.nameData}>Temperaments: </h5>
                    <p className={style.data}>{temperament}</p>
                </div>
        </div>
    )
}

export default Dog