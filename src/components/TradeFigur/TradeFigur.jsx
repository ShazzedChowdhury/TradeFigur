import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/logo.png'

const TradeFigur = () => {
    return (
        <Link to={"/"} className='flex items-center'>
            <img src={logo} className='h-10' />
            <p className='text-white font-bold text-xl'>Trade<span className='font-thin'>Figur</span></p>
        </Link>
    );
};

export default TradeFigur;