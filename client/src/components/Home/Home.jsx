import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs, getAllTemperaments } from '../../redux/actions';
import { Link } from "react-router-dom";
import Dog from '../Dog/Dog';


const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.getAllDogs);
    const allTemperaments = useSelector(state => state.getAllTemperaments)

    useEffect(()=>{
        dispatch(getAllDogs())
        dispatch(getAllTemperaments())
    }, [dispatch])

    const handleOnClick = (event) => {
        event.preventDefault()
        dispatch(getAllDogs())
    }

    return (
        <div>
            <Link to='/create_dog'>Create your dogson</Link>
            <h1>aun vivo... por ahora</h1>
            <button onClick={(event)=>handleOnClick(event)}>Reload Page</button>
            
            <div>
                <select>
                    <option value='temp'>All temperaments</option>
                    {
                        allTemperaments?.map(temp => {
                            return (
                                <option value={temp.name}>{temp.name}</option>
                            )})
                    }
                </select>
                <select>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select> 
            {
                allDogs?.map(dog => {
                    return (
                        <Dog
                        key={dog.id}
                        image={dog.image}
                        name={dog.name}
                        temperament={dog.temperament}
                        weight={dog.weight}
                        />
                    )
                })
            }               
            </div>            
        </div>
    )
}

export default Home;