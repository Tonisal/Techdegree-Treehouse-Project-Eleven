// Import dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () =>
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/sunset'>Sunset</NavLink></li>
            <li><NavLink to='/cars'>Cars</NavLink></li>
            <li><NavLink to='/science'>Sciene</NavLink></li>
            <li><NavLink to='/beer'>beer</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>

        </ul>
    </nav>;

export default Navigation;
