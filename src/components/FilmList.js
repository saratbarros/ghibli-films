import FilmBlock from './FilmBlock';
import React, { useState, useEffect } from "react";

export default function FilmList({ setter }) {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const url = "https://ghibliapi.herokuapp.com/films";
        fetch(url)
        .then(r => r.json())
        .then(r => setFilms(r));
    }, []);


    return (
        <div>
            {
                films.map((setter, i) => {
                    return (
                        <FilmBlock
                            key={i}
                            film={setter}
                        />    
                    )
                }).filter((e,k) => k <5)
            }
        </div>
    );
}