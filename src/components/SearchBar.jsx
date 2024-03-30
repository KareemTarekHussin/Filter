import Form from "react-bootstrap/Form";


export default function SearchBar(){
    
    return( <div className="row">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className=" rounded-pill"type="email" placeholder="Search by Name" />
      </Form.Group>
    </Form>
  </div>)

}