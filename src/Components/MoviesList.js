import React from "react";
import MoviesCard from "./MoviesCard";
const MoviesList=({movies,title,rate})=>{
    return (
        <div className='list_movies'>
        
        {movies.filter(el=>el.title.toUpperCase().includes(title.toUpperCase()) && el.rate>=rate).map(el=><MoviesCard el={el}/>)}  
    
    
        </div>
    )
}
export default MoviesList