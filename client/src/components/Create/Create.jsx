import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import validate from "./validate";
import style from './Create.module.css'
import { postDogs, getAllTemperaments } from "../../redux/actions";

const Create = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const allTemperaments = useSelector(state => state.allTemperaments);
    
    
    const [input, setInput] = useState({
        name: '',
        image: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span: '',
        temperament: []
    })
    const [error, setError] = useState({});
    
    useEffect(() => {
        dispatch(getAllTemperaments())
    }, [dispatch])
    
    const handleChange = (event) => {
        const {value} = event.target;
        setInput({
            ...input,
            [event.target.name]: value
        })

        setError(
            validate({
                ...input,
                [event.target.name]: value
            })
        )
        console.log(input)
    }

    const handleSelectTemp = (event) => {
        const {value} = event.target;
        if (input.temperament.length <= 4) {
            if (input.temperament === '') setInput({...input,
                temperament:[]})
            else if (Object.values(input.temperament).includes(value)) {
                Swal.fire({
                    title: `Temperamento Duplicado`,
                    icon: 'warning',
                    timer: 3000,
                    confirmButtonColor: 'orange',
                })
            }
            else {
                setInput({
                    ...input,
                    temperament: [...input.temperament, value]})
                
        }}
        else {
            Swal.fire({
                title: `Maximo 5 Temperamentos`,
                icon: 'info',
                timer: 2000,
                confirmButtonColor: 'orange',
            })
        }
    }
    
    
    const handleDeleteTemp = (event) => {
        const {value} = event.target;
        setInput({
            ...input,
            temperament: input.temperament.filter(temp => temp !== value)
        })
    }

    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!Object.keys(input).length || input.temperament.length === 0) {
            Swal.fire({
                title: 'Incomplete data',
                icon: 'error',
                text: 'You are required to fill in all the details',
                timer: 3000,
                confirmButtonColor: 'red',
            })
        } else if (Object.keys(error).length) {
            Swal.fire({
                title: 'Incorrect data',
                icon: 'error',
                timer: 3000,
                confirmButtonColor: 'red',
            })
        }
        else {
            dispatch(postDogs(input))
                Swal.fire({
                    title: `The dog ${input.name} was successfully created!`,
                    icon: 'success',
                    timer: 3000,
                    confirmButtonColor: 'green',
            })
            setInput({
                name: '',
                image: '',
                height_min: '',
                height_max: '',
                weight_min: '',
                weight_max: '',
                life_span: '',
                temperament: []
            })
            history.push('/home')
        }
    }

    return (
        <div className={style.boxForm}>
            <Link className={style.link_detail} to='/home'>
                <button  className={style.back}>← Back</button>
            </Link>

            <h1 className={style.title}>Create your dog  U ´ᴥ` U</h1>

            <form className={style.form} onSubmit={(event) => handleSubmit(event)}>
                <div className={style.boxInput}>
                    <label className={style.nombres}>Name: </label>
                    <input className={style.Input} type="text" value={input.name} name="name" onChange={handleChange}/>
                    <span className={style.error}>{error.name}</span>
                </div>

                <div className={style.boxInput}>
                    <label className={style.nombres}>Minimum height: </label>
                    <input className={style.Input} type="text" value={input.height_min} name="height_min" onChange={event => handleChange(event)}/>
                    
                {<span className={style.error}>{error.height_min}</span>}
                </div>

                <div className={style.boxInput}>
                    <label className={style.nombres}>Maximum height: </label>
                    <input className={style.Input} type="text" value={input.height_max} name="height_max" onChange={event => handleChange(event)}/>
                    {<span className={style.error}>{error.height_max}</span>}
                </div>

                <div className={style.boxInput}>
                    <label className={style.nombres}>Minimum weight: </label>
                    <input className={style.Input} type="text" value={input.weight_min} name="weight_min" onChange={event => handleChange(event)}/>
                    {<span className={style.error}>{error.weight_min}</span>}
                </div>

                <div className={style.boxInput}>
                    <label className={style.nombres}>Maximum weight: </label>
                    <input className={style.Input} type="text" value={input.weight_max} name="weight_max" onChange={event => handleChange(event)}/>
                    {<span className={style.error}>{error.weight_max}</span>}
                </div>

                <div className={style.boxInput}>
                    <label className={style.nombres}>Life span: </label>
                    <input className={style.Input} type="text" value={input.life_span} name="life_span" onChange={event => handleChange(event)}/>
                    {<span className={style.error}>{error.life_span}</span>}
                </div>

                <div className={style.boxInput}>
                    <label className={style.nombres}>Image: </label>
                    <input className={style.Input} type="text" value={input.image} name="image" onChange={event => handleChange(event)}/>
                    {<span className={style.error}>{error.image}</span>}
                </div>

                <div className={style.boxInput}>
                    <label className={style.nombres}>Temperaments: </label>
                    <select className={style.select} onChange={(event) => handleSelectTemp(event)}>
                        {
                            allTemperaments.map(temp => {
                                return (
                                    <option className={style.temp} value={temp.name} key={temp.id}>{temp.name}</option>
                                )}
                            )
                        }
                    </select>
                </div>

                <div className={style.temp}>
                {
                    input.temperament?.map(temp => (
                        <ul > 
                            <button className={style.delete} type="button" key={temp} value={temp} onClick={event => handleDeleteTemp(event)}>
                                x  {` ${temp} `}
                            </button>
                            
                        </ul>
                    ))
                }
                </div>
                

                
                <button className={style.submit} type="submit">Create</button>

            </form>
            
            
        </div>
    )
}

export default Create