import React from 'react';
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();
    
    const navigateHandler = () => {
        navigate('products');
    }
    return (
        <div>
            <h1>Home Page Is Here!</h1>
            <button onClick={navigateHandler}>Navigate</button>
        </div>
    )
}

export default Home