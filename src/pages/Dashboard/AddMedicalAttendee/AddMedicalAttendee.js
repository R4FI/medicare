import React,{ useEffect, useState } from 'react';
import {  Col, Container,Row,Table } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { Alert, TextField } from '@mui/material';
import img from "../../../images/adddoctor/doctors.png"

const AddMedicalattende = () => {
  const [email,setEmail] = useState('');
  const [attende, setattende] = useState([]);
  const [success, setSuccess] = useState(false);
  
//  use effect for fetch all attende info
useEffect(() => {
    fetch('http://localhost:5000/attende')
        .then(res => res.json())
        .then(data => setattende(data))
}, [attende]); 

const handleOnBlur = e => {
    setEmail(e.target.value);
}
//   set role for attende
  const handleAttendeSubmit = e => {
      const user = { email };
      fetch('http://localhost:5000/attende/attendee', {
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
    return (
        <div>
             <Container className="shadow-sm p-5 border">

                 <Row  className="d-flex  jsutify-content-center align-items-center">
                     <Col md={6}>
                     <img src={img} className="w-50" alt="" />
                     </Col>


                     <Col md={6}>
                     <h2 className="pb-3">All Attende: {attende.length}</h2>

        <Table striped bordered >
           <thead>
               <tr>
                   <th>#</th>
                   <th>Attende Name</th>
                   <th>Attende Email</th>
                   <th>Attende Number</th>
                   {/* <th>Attende Image</th> */}
               </tr>
           </thead>
           
               {attende?.map((attendee,index)=>(
                   <tbody>
                   <tr>
                       <td>{index}</td>
                       <td>{attendee?.displayName}</td>
                       <td>{attendee?.email}</td>
                       <td>{attendee?.number}</td>
                       {/* <td>{attendee?.image}</td> */}
                       
                       {/* <td>
                       <Button  onClick={()=>{handleAttendeSubmit(attendee?.email)}}
                           variant="contained">Add attende</Button>
                           </td> */}
                      
                   </tr>
               </tbody>
              
              ))}
       
       </Table>
       <form onSubmit={handleAttendeSubmit}>
           <TextField variant="standard" onBlur={handleOnBlur}>

           </TextField>
             <Button  
                     type="submit"
                       variant="contained">Add attende</Button>
                           </form>
       {success && <Alert severity="success">Added</Alert>}
                     </Col>
                 </Row>
            
                </Container>
        </div>
    );
};

export default AddMedicalattende;
 