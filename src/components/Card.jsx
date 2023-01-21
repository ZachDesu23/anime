import React from "react";
import '../styles/Card.css'
import {Link} from "react-router-dom";

export default function Card(props){

    return (
        <Link to={`/animeDetail/${props.item.animeId}`} style={{ textDecoration: 'none' ,color:'black'}} state={{id:props.item.animeId}}>        
        <div className="img--card">
            <img src={props.item.animeImg} alt="Naruto Shippuden" />
            <h3>{props.item.animeTitle}</h3>
            <h4 >{`Released Date: ${props.item.releasedDate}`}</h4>
        </div>
        </Link>

    )
}