import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { 
    getAllDogs, 
    getAllTemperaments, 
    filterTemperaments, 
    filterCreated, 
    orderByName
} from '../../redux/actions';
import Dog from '../Dog/Dog';
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar";

const Home = () => {
    const dispatch = useDispatch();

    const allDogs = useSelector(state => state.allDogs);
    const allTemperaments = useSelector(state => state.allTemperaments);

    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const [order, setOrder] = useState('');

    const indexLastDog = currentPage * dogsPerPage;
    const indexFirstDog = indexLastDog - dogsPerPage;
    const currentDogs = allDogs?.slice(indexFirstDog, indexLastDog);

    console.log(currentDogs)

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(()=>{
        dispatch(getAllDogs())
        dispatch(getAllTemperaments())
    }, [dispatch])

    const handleOnClick = (event) => {
        event.preventDefault()
        dispatch(getAllDogs())
    }

    const handleFilterTemperaments = (event) => {
        event.preventDefault()
        const {value} = event.target;
        dispatch(filterTemperaments(value));
    }

    const handleFilterCreated = (event) => {
        event.preventDefault()
        const {value} = event.target;
        dispatch(filterCreated(value));
    }

    const handleOrder = (event) => {
        event.preventDefault()
        const {value} = event.target;
        dispatch(orderByName(value));

        setCurrentPage(1);
        setOrder(`Sorted ${value}`);
    }

    return (
        <div>
            <Link to='/createdog'>
                <button>Create dog</button>
            </Link>
            <h1>aun vivo... por ahora</h1>
            <button onClick={event => handleOnClick(event)}>Reload Page</button>
            
            <div>
                <select onChange={event => handleFilterCreated(event)}>
                    <option value='all'>All dogs</option>
                    <option value='bds'>Created</option>
                    <option value='api'>Existing</option>
                </select>

                <select onChange={event => handleFilterTemperaments(event)}>
                    <option value='temp'>All temperaments</option>
                    {
                        allTemperaments?.map(temp => {
                            return (
                                <option key={temp.id} value={temp.name}>{temp.name}</option>
                            )})
                    }
                </select>

                <select onChange={event => handleOrder(event)}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>

                <Paginated
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs?.length}
                    paginated={paginated}
                />
                <SearchBar/>
            
            {
                currentDogs?.map(dog => {
                    return (
                        <Dog
                        key={dog.id}
                        id={dog.id}
                        image={dog.image}
                        name={dog.name}
                        temperament={!dog.created ? `${dog.temperament} ` : dog.Temperaments?.map(temp => `${temp.name} `)}
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