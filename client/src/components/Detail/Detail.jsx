import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions';

const Detail = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const dogId = useSelector(state => state.detail);

    useEffect(() => {
        const {id} = props.match.params;
        dispatch(getDetail(id));
    }, [dispatch])

    return (
        <div>
            <Link to='/home'>
                <button>Back</button>
            </Link>
            {
                dogId.length ? 
                <div>
                    <h1>Name: {dogId[0].name}</h1>
                    <img src={dogId[0].image} alt={dogId[0].name} width='250px' height='250px'/>
                    <h5>Weight: {dogId[0].weight}</h5>
                    <h5>Height: {dogId[0].height}</h5>
                    <h5>Life span: {dogId[0].life_span}</h5>
                    <h5>Temperaments: {!dogId[0].created ? `${dogId[0].temperament} ` : dogId[0].Temperaments?.map(temp => `${temp.name} `)}</h5>
                </div> : <p>Loading...</p>
            }
        </div>
    )
}

export default Detail;