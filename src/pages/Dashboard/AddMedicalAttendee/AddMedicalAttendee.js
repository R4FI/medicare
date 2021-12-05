import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import img from "../../../images/adddoctor/doctor.png";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
const AddMedicalAttendee = () => {
    return (
        <div>
             <Container className="shadow-sm p-5 border">
                <h4 className="text-center">Add Medical Attendee</h4>
             <Row className="d-flex  jsutify-content-center align-items-center">
                <Col md={6}>
                <img src={img} className="w-50" alt="" />
                </Col>


                <Col md={6}>
          <TextField className="w-50"
          required
          id="standard-required"
          label="Required"
          defaultValue="Your Email"
          type="email"
          variant="standard"
        />
        <br />
        <TextField className="w-50"
          required
          id="standard-required"
          label="Required"
          type="password"
          defaultValue="Password"
          variant="standard"
        />
        <br />
        <Stack direction="row" className="mt-1" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />  <br />
        <Button className="mt-2" variant="outlined">Add Attendee</Button>
      </label>
    </Stack>
                </Col>
            </Row>
                </Container>
        </div>
    );
};

export default AddMedicalAttendee;