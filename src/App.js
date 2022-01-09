import React, { useState } from 'react';
import './App.css';
import{ moviedata } from './Components/MoviesData'
import MoviesList from './Components/MoviesList';
import Navigation from './NavBar/Navigation';
import AddMovies from './Components/AddMovies';
import Home from './Components/Home';
import { Route } from "react-router-dom";
import Details from './Components/Details';

const App = () => {
 
  const [movies,setMovies ]= useState(moviedata)
  
  const [title,setTitle]= useState ("")
  const [rate, setRate]=useState(0)
  const handleAdd=(newMovie)=>{setMovies([...movies,newMovie])}

  console.log(rate)
  return (
    <div className="App">
      <Navigation title={title} setTitle={setTitle} rate={rate} setRate={setRate}    />
      <AddMovies handleAdd={handleAdd}  />
      <Route exact path='/movies'  render={()=><MoviesList movies={movies} title={title} rate={rate}></MoviesList>}/>    
      <Route exact path='/' component={Home} />
      <Route  exact  path='/details/:id'       render={(props)=> <Details {...props}  movies={movies}   ></Details> }    ></Route>

   </div>
  );
}

export default App;
