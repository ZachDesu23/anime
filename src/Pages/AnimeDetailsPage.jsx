import React from "react";
import Nav from "../components/Nav";
import '../styles/Details.css'
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

export default function AnimeDetail(){
    const [anime, setAnime] = React.useState([]);
    const [episode, setEpisode] = React.useState([]);
    const [show,setShow] = React.useState(false);
    const date = useLocation();
    const details = date.state.id;

    React.useEffect(() => {
        async function getAnimeDetails() {
            await axios.get(`https://api.consumet.org/anime/gogoanime/info/${details}`)
                .then(res => {
                    setAnime(res.data)
                    setEpisode(res.data.episodes)
                    console.log(res.data)
                }).catch(err => console.log(err))
        }
        getAnimeDetails()
    }, [])

    const popularAnime = episode.map(anime => {
        return (
            <div className="episodes">
                 <a className="episode-tag" href={anime.url} target="_blank">{anime.number}</a>
            </div>
          
        )
    });

    
    return(
        <>
        <Nav/>
        <div className="main">
        <div className="main--content">
            <div className="anime--img--container">
                <img src={anime.image} alt="" />
            </div>
            <div className="main--text">
                <h1>{anime.title}</h1>
                <h2>Other Name:</h2>
                <h2>{anime.otherName}</h2>
                <h2>Description:</h2>
                <p>{anime.description}</p>
                <h3>Status: {anime.status}</h3>
                <h3>Type: {anime.type}</h3>
                <h2>Episodes:</h2>
                <div className="main--episodes">
                 {popularAnime}
                </div>
                
            
            
               
            </div>
            
        </div>
        </div>
        </>
    )
}