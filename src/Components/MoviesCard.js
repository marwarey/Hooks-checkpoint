import React from "react";
import{Card,ListGroup,ListGroupItem}from 'react-bootstrap'
const MoviesCard=({el})=>{
    return (
     
  <Card style={{ width: '18rem', height: '55rem' , margin:'0.5cm'}}>
  <Card.Img variant="top" src={el.posterUrl} style={{width:'7,5cm',height:'10cm'}}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text style={{width:'7cm',justifyContent:'center'}}>
      {el.description}
    </Card.Text>
  
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{el.id}</ListGroupItem>
    <ListGroupItem>{el.rate}</ListGroupItem>
    <ListGroupItem>{el.trailer}</ListGroupItem>
  </ListGroup>

</Card>
    )
}
export default MoviesCard