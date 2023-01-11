import React from "react";
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to='/home'>
                <button>Come on! Let's see puppies</button>
            </Link>
        </div>
    )
}

export default LandingPage;