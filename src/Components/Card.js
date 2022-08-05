import Pagination from "./Pagination";
import React ,{useState}from "react";
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
                        <h5 className="star" ><span class="fa fa-star checked"></span>{(movie.info.vote_average/2).toFixed(1)}/5</h5>
                    </div>
                    
                </div>
            </div>
            </Link>
            
        </>
    )
}
export default Card;