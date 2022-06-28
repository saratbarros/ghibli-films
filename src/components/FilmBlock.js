import React from 'react';

export default function FilmBlock ({ film }) {
    return (
        <div className="Block">
            <div className="Image">
                <img className="Filmimage" src={film.image} alt={film.title}/>
            </div>
            <div class="Info">
                <h2 key={film.id}>{film.title}</h2>
                <p>{film.description}</p>
                <button>SEE MORE</button>
                <img className ="Fade" alt="totoro" src={"https://www.clipartmax.com/png/full/98-981146_stickers-totoro-plus-my-neighbor-totoro.png"}/>
            </div>
        </div>
    );
}