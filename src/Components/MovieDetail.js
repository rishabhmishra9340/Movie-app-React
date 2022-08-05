import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import "./movie.css"
const MovieDetail = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="container">
            <div className="detail">
            <h1>{currentMovieDetail.original_title }</h1>
               <h4>Rating : {(currentMovieDetail.vote_average/2).toFixed(1)}/5</h4>
                  <p>{currentMovieDetail.overview}</p>
                  <h4>Release Date - {currentMovieDetail.release_date}</h4>
                  <h4>Original-language - {currentMovieDetail.original_language}</h4>
            </div>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}></img>
            </div>
        </div>
    )

    }
export default MovieDetail