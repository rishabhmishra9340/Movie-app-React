
import React,{useState} from "react";
import { useEffect } from "react";
import Card from "./Card";
let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
console.log(url)
const Main=()=>{
    const [movieData,setData]=useState([]);
    const [url_set,setUrl]=useState(url);
    const [search,setSearch]=useState();
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            setData(data.results);
        });
    },[url_set])

   
    const searchMovie=(evt)=>{
       
        
            url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");
        
    }
    return(
        <>
            <div className="header">
              
                
                    <div className="search">
                        <input type="text" placeholder="Search movies..." 
                        className="search-input" onChange={(e)=>{setSearch(e.target.value)}} 
                        value={search} >
                        </input>
                        <button className="btn btn-primary" onClick={searchMovie}><span class="fa fa-search"></span></button>
                    </div>
                
            </div>
            <div className="container">

                
                {
                    (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                        return(
                            <Card info={res} key={pos}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Main;