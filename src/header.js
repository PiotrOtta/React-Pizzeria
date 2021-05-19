import React from 'react'
import logo from './logo.png';
import './App.css';
import {Link} from 'react-router-dom'

const header = () => {
    return (
        <header className="App-header">
            <Link to="/" style={{zIndex: 2}}>
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <span className="Logo-span">Najlepsza pizza w mieście! <br /> 
                <Link to="/cart"><button className="Button-1">Koszyk</button></Link>
            </span>
        </header>
    )
}

export default header
