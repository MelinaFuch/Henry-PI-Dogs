import React from "react";
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={style.coteinerAll}>
            <h1 className={style.title}>Welcome!  U・ᴥ・U</h1>
            <img className={style.image} src={'https://images.ctfassets.net/550nf1gumh01/3jTA9gElyutziswlbD8bDC/3c80bcb3c1541fd570895cc314c61a3d/E_EASY_1_1024x1024.jpeg?q=80&w=800'} alt='background-dog'/>
            <Link to='/home'>
                <button className={style.button}>Come on! Let's see puppies</button>
            </Link>
        </div>
    )
}

export default LandingPage;