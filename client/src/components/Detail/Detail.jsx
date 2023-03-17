import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './Detail.module.css';
import { getDetail, resetDetail } from '../../redux/actions';
import Loading from "../Loading/Loading";

const Detail = (props) => {
    const dispatch = useDispatch();
    const dogId = useSelector(state => state.detail);

    useEffect(() => {
        const {id} = props.match.params;
        dispatch(getDetail(id));
        return dispatch(resetDetail());
    }, [dispatch])

    const firstLetter = (str) => {
        const firstLetter = str.charAt(0).toUpperCase();
        const restOfStr = str.slice(1);
        return firstLetter.concat(restOfStr);
    }

    return (
        <div className={style.conteinerAll}>
            <Link className={style.link_detail} to='/home'>
                <button className={style.button}>← Back</button>
            </Link>
            
            {
                dogId.length ? 
                <div className={style.conteinerData}>
                    <div className={style.conteinerName}>
                        <h1 className={style.Name}>{firstLetter(dogId[0].name)}</h1>
                    </div>

                    <img className={style.image} src={dogId[0].image} alt={dogId[0].id} width='250px' height='250px'/>

                    <div className={style.conteinerWeight}>
                        <h3 className={style.nameData}>Weight: Min: {dogId[0].weight_min}Kg. - Max: {dogId[0].weight_max}Kg.</h3> 
                    </div>

                    <div className={style.conteinerHeight}>
                        <h3 className={style.nameData}>Height: Min: {dogId[0].height_min} - Max: {dogId[0].height_max}</h3> 
                    </div>

                    <div className={style.conteinerLife}>
                        <h3 className={style.nameData}>Life span: {!dogId[0].created ? `${dogId[0].life_span}` : `${dogId[0].life_span } years`}</h3>
                    </div>

                    <div className={style.conteinerTemp}>
                        <h3 className={style.nameData}>Temperaments:  {!dogId[0].created ? `${dogId[0].temperament} ` : dogId[0].Temperaments?.map(temp => `${temp.name} `)}</h3>
                    </div>
                </div> : 
                <Loading/>
            }
        </div>
    )
}

export default Detail;