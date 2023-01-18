import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import style from './SearchBar.module.css';
import { getAllDogs, getNameDogs } from "../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.allDogs);

    const [name, setName] = useState("");

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])

    const handleSubmit = (event) => {
        dispatch(getNameDogs(name))
    }

    const handleChange = (event) => {
        const {value} = event.target;
        setName(value);
    }

    return (
        <div>
            <input className={style.Input} type='text' placeholder="Search..." onChange={event => handleChange(event)}/>
            <button className={style.button} type='button' onClick={(event)=>handleSubmit(event)}>Search</button>
        </div>
    )
}

export default SearchBar;