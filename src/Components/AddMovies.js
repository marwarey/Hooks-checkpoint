import{ useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap'
const AddMovies =({ handleAdd})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [title , setTitle] = useState("")
    const [description, setDescription]=useState('')
    const [image , setImage] = useState("")
    const [rate,setRate]=useState()
   
     

   
    
     return (
          <div>
               <Button variant="primary" onClick={handleShow} >
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
            <Form.Label>title :</Form.Label>
                <Form.Control type="text" placeholder="add the name of movie" value={title} onChange={(e)=>setTitle(e.target.value)} />
                            
            </Form.Group>
        
            <Form.Group >
            <Form.Label>picture :</Form.Label>
                <Form.Control type="text" placeholder="add the url picture of movie" value={image} onChange={(e)=>setImage(e.target.value)} />
                            
            </Form.Group>
            <Form.Group >
            <Form.Label>description:</Form.Label>
                <Form.Control type="text" placeholder="add description of movie" value={description} onChange={(e)=>setDescription(e.target.value)} />
                            
            </Form.Group>
            <Form.Group >
            <Form.Label>rate:</Form.Label>
                <Form.Control type="text" placeholder="add description of movie" value={rate} onChange={(e)=>setRate(e.target.value)} />
                            
            </Form.Group>

            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
           onClick={()=>  handleAdd({id:Math.random(),title,description,image,rate})}>
            Save Changes
          </Button>
         
        </Modal.Footer>
      </Modal>
        </div>
    );
}


export default AddMovies