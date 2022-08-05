
import React from "react";
import {Link} from "react-router-dom"
const Card=(movie)=>{
   
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
        <Link to={`/movie/${movie.info.id}`}>
        
        
            <div className="movies">
                <img src={img_path+movie.info.poster_path} className="Poster"></img>
                <div className="movie-Details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rating">{movie.info.vote_average}</p>
                    </div>
                    
                </div>
            </div>
            </Link>
        </>
    )
}
export default Card;