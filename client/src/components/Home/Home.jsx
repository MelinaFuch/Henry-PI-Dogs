import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import style from './Home.module.css';
import {
    getAllDogs, 
    getAllTemperaments, 
    filterTemperaments, 
    filterCreated, 
    orderBy
} from '../../redux/actions';
import Dog from '../Dog/Dog';
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
    const dispatch = useDispatch();

    const allDogs = useSelector(state => state.allDogs);
    const allTemperaments = useSelector(state => state.allTemperaments);

    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const [order, setOrder] = useState('');
    const [filter, setFilter] = useState('');

    const indexLastDog = currentPage * dogsPerPage;
    const indexFirstDog = indexLastDog - dogsPerPage;
    const dogsMax = Math.ceil(allDogs?.length / dogsPerPage);
    const currentDogs = allDogs?.slice(indexFirstDog, indexLastDog);

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(()=>{
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
    }, [dispatch])

    const handleOnClick = (event) => {
        event.preventDefault();
        dispatch(getAllDogs());
        dispatch(getAllTemperaments());
        setCurrentPage(1)
    }

    const handleFilterTemperaments = (event) => {
        event.preventDefault();
        const {value} = event.target;
        dispatch(filterTemperaments(value));
        setCurrentPage(1);
        setFilter(`Filtrado ${value}`);
    }

    const handleFilterCreated = (event) => {
        event.preventDefault()
        const {value} = event.target;
        dispatch(filterCreated(value));
        setCurrentPage(1)
        setFilter(`Filtrado ${value}`);
    }

    const handleOrder = (event) => {
        event.preventDefault()
        const {value} = event.target;
        dispatch(orderBy(value));
        setCurrentPage(1);
        setOrder(`Ordenado ${value}`);
    }

    return (
        <div>
            <div className={style.conteiner}>
                <Link className={style.link_detail} to='/'>
                    <button className={style.buttons}>← Back</button>
                </Link>
                <Link className={style.link_detail} to='/createdog'>
                    <button className={style.buttons}>Create dog</button>
                </Link>
                <button className={style.buttons} onClick={event => handleOnClick(event)}>Reload Page</button>
            </div>

            <h2 className={style.title}>List of puppies</h2>

            <div>
                <select className={style.select} onChange={event => handleFilterCreated(event)}>
                    <option className={style.options} value='all'>All dogs</option>
                    <option className={style.options} value='bds'>Created</option>
                    <option className={style.options} value='api'>Existing</option>
                </select>

                <select className={style.select} onChange={event => handleFilterTemperaments(event)}>
                    <option className={style.options} value='temp'>All temperaments</option>
                    {
                        allTemperaments?.map(temp => {
                            return (
                                <option key={temp.id} value={temp.name}>{temp.name}</option>
                                )})
                            }
                </select>

                
                <select className={style.select} onChange={event => handleOrder(event)}>
                    <option className={style.options} defaultValue>Order by</option>

                    <option className={style.options} value='asc'>A - Z</option>
                    <option className={style.options} value='desc'>Z - A</option>
                
                    <option className={style.options} value='min'>Minimum weight</option>
                    <option className={style.options} value='max'>Maximum weight</option>
                </select>
                <Paginated
                        dogsMax={dogsMax}
                        paginated={paginated}
                        currentPage={currentPage}
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
                        weight_min={dog.weight_min}
                        weight_max={dog.weight_max}
                        />
                    )
                })
            }               
            </div>
            <Paginated
                    dogsMax={dogsMax}
                    paginated={paginated}
                    currentPage={currentPage}
            />
        </div>
    )
}

export default Home;