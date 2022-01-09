import {React} from 'react';
import {Button, Card} from 'react-bootstrap'


function Details(props) {
    

const found= props.movies.find(el => el.id == props.match.params.id);



    return(
<div>
<Card className="text-center">
    <Card.Header>{found.title}</Card.Header>
    <Card.Body>
    <Card.Img  src={found.posterUrl}  style={{height:"500px", width:"300px",marginBottom:'1cm'}} />
    <Card.Text>
    {found.description}
    </Card.Text>

    <Button variant="success"   onClick={()=>props.history.goBack()}> Go Back</Button>
    </Card.Body>
  <Card.Footer className="text-muted">{found.id}</Card.Footer>

</Card>





</div>


    )
}

export default Details