import React from "react";
import '../styles/Card.css'
import {Link} from "react-router-dom";

export default function Card(props){

    return (
        <Link to={`/animeDetail/${props.item.id}`} style={{ textDecoration: 'none' ,color:'black'}} state={{id:props.item.id}}>        
        <div className="img--card">
            <img src={props.item.image} alt="Naruto Shippuden" />
            <h3>{props.item.title}</h3>

        </div>
        </Link>

    )
}