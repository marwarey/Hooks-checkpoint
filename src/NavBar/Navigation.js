import React from 'react';
import {Container,Navbar,Nav,Form}from 'react-bootstrap'
import Star from '../Components/Star';
  function Navigation ({title,setTitle, setRate}){
   
    return (
        <div>
            <Navbar bg="dark" variant="">
    <Container>
    <Navbar.Brand href="#home">MoviesApp</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <form>
    <Form.Control type="text" placeholder="Search" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    </form>
    </Container>
  </Navbar>
  <Star    setRate={setRate}  />

        </div>

    )
}
export default Navigation