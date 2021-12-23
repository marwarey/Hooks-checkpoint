import React, { useState } from 'react';
import './App.css';
import{ moviedata } from './Components/MoviesData'
import MoviesList from './Components/MoviesList';
import Navigation from './NavBar/Navigation';
import AddMovies from './Components/AddMovies';


const App = () => {
 
  const [movies,setMovies ]= useState(moviedata)
  
  const [title,setTitle]= useState ("")
  const [rate, setRate]=useState(0)
  const handleAdd=(newMovie)=>{setMovies([...movies,newMovie])}

  console.log(rate)
  return (
    <div className="App">
      <Navigation title={title} setTitle={setTitle} rate={rate} setRate={setRate}/>
      <AddMovies handleAdd={handleAdd}  />
     
     <MoviesList movies={movies} title={title} rate={rate}/>    
     </div>
  );
}

export default App;
