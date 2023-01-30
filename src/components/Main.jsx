import React from "react";
import Card from "./Card";
import '../styles/Main.css'
import axios from "axios";

export default function Main() {
    const [data, setData] = React.useState([]);
    const [genre, setGenre] = React.useState(['action']);
    const [search, setSearch] = React.useState([]);


    React.useEffect(() => {
        async function getAnime() {
            await axios.get('https://api.consumet.org/anime/gogoanime/top-airing')
                .then(res => {
                    setData(res.data.results)
                    console.log(res.data.results)
                }).catch(err => console.log(err))
        }
        getAnime()
    }, [])

    // const popularAnime = data.map(anime => <Card key={anime.animeId} animeList={anime.animeTitle} />);
    const popularAnime = data.map(anime => {
        return (
            <Card key={anime.id} item={anime} />
        )
    });



    const getPopular = async function getPopular() {
        await axios.get('https://api.consumet.org/anime/gogoanime/top-airing')
            .then(res => {
                setData(res.data.results)
            }).catch(err => console.log(err))
    }


    const getSearch = async function getSearch() {
        await axios.get(`https://api.consumet.org/anime/gogoanime/${search}?page=${1}`)
            .then(res => {
                setData(res.data.results)
                console.log(res.data.results)
            }).catch(err => console.log(err))
    }
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getSearch();
        }
    }



    return (
        <div className="main--div">
            <div className="main--selector">
                <button id="myBtn" className="btn--popular" onClick={getPopular}>Popular Anime</button>
                {/* <select onChange={e => setGenre(e.target.value)}>
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
                </select> */}
                <input type="text" placeholder="Search Anime" onChange={e => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                <button className="btn--search" onClick={getSearch}  >Search Anime</button>
            </div>

            <div className="card--container">
                {popularAnime}
            </div>

        </div>
    )
}