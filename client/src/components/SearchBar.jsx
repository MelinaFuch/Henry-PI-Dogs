import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = (event) => {
        const {value} = event.target;
        event.preventDefault();
        setName(value);
        console.log(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getNameDogs(name))
        
    }

    return (
        <div>
            <input type='text' placeholder="Search..." onChange={event => handleInputChange(event)}/>
            <button type="submit" onClick={event => handleSubmit(event)}>Search</button>
        </div>
    )
}

export default SearchBar;