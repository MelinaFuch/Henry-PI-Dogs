import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postDogs, getAllTemperaments } from "../../redux/actions";

const Create = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const allTemperaments = useSelector(state => state.allTemperaments);

    const [input, setInput] = useState({
        name: '',
        image: '',
        height: '',
        weight: '',
        life_span: '',
        temperament: []
    })
    const [error, setError] = useState({});

    

    const handleChange = (event) => {
        const {value} = event.target;
        setInput({
            ...input,
            [event.target.name]: value
        })
        console.log(input)
    }

    const handleSelectTemp = (event) => {
        const {value} = event.target;
        setInput({
            ...input,
            temperament: [...input.temperament, value]
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        dispatch(postDogs(input));
        alert('Your dog has been successfully created');
        setInput({
            name: '',
            image: '',
            height: '',
            weight: '',
            life_span: '',
            temperament: []
        })
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getAllTemperaments())
    }, [dispatch])

    return (
        <div>
            <Link to='/home'>
                <button>Back</button>
            </Link>

            <h1>Create your dog breed</h1>

            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={input.name} name="name" onChange={handleChange}/>
                </div>

                <div>
                    <label>Height: </label>
                    <input type="text" value={input.height} name="height" onChange={event => handleChange(event)}/>
                </div>

                <div>
                    <label>Weight: </label>
                    <input type="text" value={input.weight} name="weight" onChange={event => handleChange(event)}/>
                </div>

                <div>
                    <label>Life span: </label>
                    <input type="text" value={input.life_span} name="life_span" onChange={event => handleChange(event)}/>
                </div>

                <div>
                    <label>Image: </label>
                    <input type="text" value={input.image} name="image" onChange={event => handleChange(event)}/>
                </div>

                <div>
                    <select onChange={(event) => handleSelectTemp(event)}>
                        {
                            allTemperaments.map(temp => {
                                return (
                                    <option value={temp.name}>{temp.name}</option>
                                )}
                            )
                        }
                    </select>
                </div>
                
                <ul><li>{input.temperament.map(temp => `${temp}, `)}</li></ul>
                
                <button type="submit">Create</button>

            </form>
            
            
        </div>
    )
}

export default Create