import React from 'react';

const Navbar = (props) =>{
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">

                <li><p className="link-light">{props.title}</p></li>

            </div>

        </nav>
    )
}

export default Navbar;