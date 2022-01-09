import React from "react";
import{Button, Card,ListGroup,ListGroupItem}from 'react-bootstrap'
import { Link } from "react-router-dom";
const MoviesCard=({el})=>{
    return (
    <div>
  <Card style={{ width: '18rem', height: '40rem' , margin:'0.5cm'}}>
  <Card.Img variant="top" src={el.posterUrl} style={{width:'7,5cm',height:'10cm'}}/>
  <Card.Body>
    <Card.Title >{el.title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{el.rate}</ListGroupItem>
    <ListGroupItem>{el.trailer}</ListGroupItem>
  </ListGroup>
  <Link to={`/Details/${el.id}`}><Button variant="success"style={{marginInline:'2.5cm'}}>Details</Button> </Link> 
</Card>
  </div>
    )
}
export default MoviesCard