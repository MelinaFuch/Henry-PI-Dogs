import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import style from './SearchBar.module.css';
import { getAllDogs, getNameDogs } from "../../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getNameDogs(name));
        setName('');
    }

    const handleChange = (event) => {
        const {value} = event.target;
        setName(value);
    }

    return (
        <div>
            <input className={style.Input} type='text' value={name} placeholder="Search..." onChange={event => handleChange(event)}/>
            <button className={style.button} type='button' onClick={(event) => handleSubmit(event)}>Search</button>
        </div>
    )
}

export default SearchBar;