import React, { useState, useEffect } from 'react';
import "../styles/banner.css"
import axios from './../axios';
import requests from './../requests';

function Banner() {
    const [movie, SetMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            SetMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;

        }

        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__tittle">
                    {movie?.tittle || movie?.name || movie?.original_name}
                </h1>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">
                        Play
                    </button>
                    <button className="banner__button">
                        My List
                    </button>
                </div>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
