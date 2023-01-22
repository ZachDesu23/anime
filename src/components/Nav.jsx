import React from "react";
import '../styles/Nav.css';
import {Link} from 'react-router-dom';
import ImageNav from "../img/Animania-noBg.png";

export default function Nav(){

 

    return(
   
        <nav>
            <Link to="/">
            <img src="https://logos-world.net/wp-content/uploads/2021/08/Akatsuki-Emblem.png" className="home" alt="" />
            
            <img src={ImageNav} className="animania"/>
            </Link>
        </nav>
        
    )
}