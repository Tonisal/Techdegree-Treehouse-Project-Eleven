import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {


    const categories = props.categories;

    return (
        <nav className="main-nav">
            <ul>
                {categories.map((category) =>
                    <li key={category.id}>
                        <NavLink activeClassName="active" to={category.path}>{category.name}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
};

export default Navigation;