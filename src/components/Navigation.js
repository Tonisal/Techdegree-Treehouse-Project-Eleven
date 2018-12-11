import React from 'react';

const Navigation = (props) => {


    const categories = props.categories;

    return (
        <nav className="main-nav">
            <ul>
                {categories.map((category) =>
                    <li key={category.id}>
                        <a href="#">{category.name}</a>
                    </li>
                )}
            </ul>
        </nav>
    )
};

export default Navigation;