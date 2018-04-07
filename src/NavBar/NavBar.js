import React from 'react'
import './styles/NavBar.css'

function NavBar() {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
                <li><a data-toggle="tab" href="#about">About</a></li>
            </ul>
        </div>
    )
}

export default NavBar