import React,{useState,useEffect} from 'react';
import { Container, Row,Col, Table } from 'react-bootstrap';
import img from "../../../images/adddoctor/doctor.png";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
const AddDoctor = () => {
  const [email,setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [doctor, setdoctor] = useState([]);

//  use effect for fetch all doctor info
useEffect(() => {
    fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setdoctor(data))
}, [doctor]); 

  const handleSubmit = e => {
    const user = { email };
    fetch('http://localhost:5000/doctors/doctor', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                console.log(data);
                setSuccess(true);
            }
        })

    e.preventDefault()
}
    const handleOnBlur = e => {
      setEmail(e.target.value);
  }
    return (
        <div>
            <Container className="shadow-sm p-5 border">
                <h4 className="text-center">Add Doctor</h4>
             <Row className="d-flex  jsutify-content-center align-items-center">
                <Col md={6}>
                <img src={img} className="w-75" alt="" />
                </Col>


                <Col md={6}>
                <h2>All Doctor:{doctor.length}</h2>
                <Table striped bordered >
                   
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Doctor Name</th>
                                <th>Doctor Email</th>
                                <th>Doctor Number</th>
                                {/* <th>Attende Image</th> */}
                            </tr>
                        </thead>
                        
                            {doctor?.map((doctors,index)=>(
                                <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{doctors?.displayName}</td>
                                    <td>{doctors?.email}</td>
                                    <td>{doctors?.number}</td>
                                    {/* <td>{attendee?.image}</td> */}
                                    
                                    {/* <td>
                                    <Button  onClick={()=>{handleAttendeSubmit(attendee?.email)}}
                                        variant="contained">Add attende</Button>
                                        </td> */}
                                   
                                </tr>
                            </tbody>
                           
                           ))}
                    
                    </Table>
                <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Doctor</Button>
            </form>
            {success && <Alert severity="success">Made Doctor Successfully!</Alert>}
                </Col>
            </Row>
                </Container>
        </div>
    );
};

export default AddDoctor;