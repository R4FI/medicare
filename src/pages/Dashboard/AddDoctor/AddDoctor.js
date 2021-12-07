import React,{useState} from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import img from "../../../images/adddoctor/doctor.png";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { Input } from '@mui/material';
const AddDoctor = () => {
  const [email,setEmail] = useState('');
  const [image,setImage] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    if (!image) {
      return;
      
    }
    const formData = new FormData();
    formData.append('email',email); 
    formData.append('image',image);
    fetch('http://localhost:5000/doctors', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  if(data.insertedId){
    <Alert severity="success">Doctor Added Successfully</Alert>

  }
})
.catch(error => {
  console.error('Error:', error);
});

  }
    return (
        <div>
            <Container className="shadow-sm p-5 border">
                <h4 className="text-center">Add Doctor</h4>
             <Row className="d-flex  jsutify-content-center align-items-center">
                <Col md={6}>
                <img src={img} className="w-50" alt="" />
                </Col>


                <Col md={6}>
          <form onSubmit={handleSubmit}>
          <TextField className="w-50" onChange={e=>setEmail(e.target.value)}
          required
          id="standard-required"
          label="Email"
          type="email"
          variant="standard"
        />
        <br />
        <Stack direction="row" className="mt-1" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input onChange={e=>setImage(e.target.files[0])} accept="image/*" type="file" />  <br />
        <Button type="submit" className="mt-2" variant="outlined">Add Doctor</Button>
      </label>
    </Stack>
          </form>
                </Col>
            </Row>
                </Container>
        </div>
    );
};

export default AddDoctor;