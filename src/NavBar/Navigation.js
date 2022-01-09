import React from 'react';
import {Container,Navbar,Nav,Form}from 'react-bootstrap'
import { Link } from "react-router-dom";
import Star from '../Components/Star';
  function Navigation ({title,setTitle, setRate,props}){

    return (
        <div >
            <Navbar bg="dark" variant="">
    <Container>
    <Navbar.Brand href="#">MoviesApp</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link as={Link} to='/movies' href="#movies">Movies</Nav.Link>
      <Nav.Link as= {Link}to='/'href='#home'>Home</Nav.Link>

    </Nav>

    <form >

    <Form.Control type="text" placeholder="Search" value={title} onChange={(e)=>setTitle(e.target.value)}/>

    </form>
    <Star    setRate={setRate}  />

    </Container>

  </Navbar>
  <Navbar bg="dark" variant="dark">


      </Navbar>

        </div>

    )
}
export default Navigation