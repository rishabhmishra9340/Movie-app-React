import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import "./movie.css"
import{Link}from "react-router-dom"


const MovieDetail = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=461182fa2668493a72758c55a1789c35&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    

    return (

        
        <div className="container">
          
            <div className="detail">
              <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
              <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average/2: ""}/5 <i class="fas fa-star" />
                        </div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}
                        <h4>Original Language  {currentMovieDetail ?currentMovieDetail.original_language:""}</h4>
                        
            </div>
            
        </div>
        <div className="poster">
                <img className="img" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            {/* <div className="container"> */}
{/*             
<div className="detail">
<div className="back-to-home">
    <Link to='/'>  <i class="fa fa-long-arrow-left" aria-hidden="true" ></i></Link> </div>
<h1>{currentMovieDetail.original_title }</h1>
   <h4>Rating : {(currentMovieDetail.vote_average/2).toFixed(2)}/5</h4>
      <p>{currentMovieDetail.overview}</p>
      <h4><span>Release Date</span>  {currentMovieDetail.release_date}</h4>
      <h4><span>Original Language</span>  {currentMovieDetail.original_language}</h4>
</div>
<div className="poster">
    <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}></img>
</div> */}
</div>
        // </div>
        
    )
}

      
export default MovieDetail