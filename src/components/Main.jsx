import React from "react";
import Card from "./Card";
import '../styles/Main.css'
import { Link } from "react-router-dom";

export default function Main() {
    const [data, setData] = React.useState([]);
    const [genre, setGenre] = React.useState(['action']);
    const [search, setSearch] = React.useState([]);

    React.useEffect(() => {
        async function getAnime() {
            const res = await fetch(`https://gogoanime.consumet.org/genre/${genre}`);
            const data = await res.json();
            setData(data);
        }
        getAnime()
    }, [genre])


    // const popularAnime = data.map(anime => <Card key={anime.animeId} animeList={anime.animeTitle} />);
    const popularAnime = data.map(anime =>{
    return(
    <Card key={anime.animeId} item={anime} />
    )});


    const getGenre = async function getGenre() {
        const res = await fetch("https://gogoanime.consumet.org/popular");
        const data = await res.json();
        setData(data);
    }
    

    const getSearch = async function getSearch() {
        const res = await fetch(`https://gogoanime.consumet.org/search?keyw=${search}`);
        const data = await res.json();
        setData(data);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          getSearch();
        }
      }
    


    return (
        <div className="main--div">
            <div className="main--selector">
                <button id="myBtn" className="btn--popular" onClick={getGenre}>Popular Anime</button>
                <select onChange={e => setGenre(e.target.value)}>
                    <option>action</option>
                    <option>adventure</option>
                    <option>cars</option>
                    <option>comedy</option>
                    <option>crime</option>
                    <option>dementia</option>
                    <option>demons</option>
                    <option>drama</option>
                    <option>fantasy</option>
                    <option>game</option>
                </select>
                <input type="text" placeholder="Search Anime" onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                <button className="btn--popular" onClick={getSearch}  >Search Anime</button>
            </div>

            <div className="card--container">
                {popularAnime}
            </div>

        </div>
    )
}