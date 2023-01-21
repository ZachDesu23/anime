import React from "react";
import Nav from "../components/Nav";
import '../styles/Details.css'
import { useLocation, useParams } from "react-router-dom";

export default function AnimeDetail(){
    const [anime, setAnime] = React.useState([]);
    const date = useLocation();
    const details = date.state.id;

    React.useEffect(() => {
        async function getAnime() {
            const res = await fetch(`https://gogoanime.consumet.org/anime-details/${details}`);
            const data = await res.json();
            setAnime(data);
        }
        getAnime()
    }, [])
    
    
    return(
        <>
        <Nav/>
        <div className="main">
        <div className="main--content">
            <div className="anime--img--container">
                <img src={anime.animeImg} alt="" />
            </div>
            <div className="main--text">
                <h1>{anime.animeTitle}</h1>
                <h2>Other Name:</h2>
                <h2>{anime.otherNames}</h2>
                <h2>Synopsis:</h2>
                <p>{anime.synopsis}</p>
                <h3>Status: {anime.status}</h3>
                <h3>Type: {anime.type}</h3>
               
            
               
            </div>
            
        </div>
        </div>
        </>
    )
}