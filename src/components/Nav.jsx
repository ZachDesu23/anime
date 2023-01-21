import React from "react";
import '../styles/Nav.css';
import {Link} from 'react-router-dom';

export default function Nav(){

 

    return(
        <Link to="/">
        <nav>
            <img src="https://logos-world.net/wp-content/uploads/2021/08/Akatsuki-Emblem.png" alt="" />
        </nav>
        </Link>
    )
}