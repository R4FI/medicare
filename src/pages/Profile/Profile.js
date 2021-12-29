import React from 'react';
import Header from '../Shared/Header/Header';
import './Profile.css';
import  img from "../../images/adddoctor/user.png";
import Slider from '@mui/material/Slider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import { Container, Row,Form,Col,Button, FloatingLabel} from 'react-bootstrap';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
const Profile = () => {
  const [value, setValue] = React.useState([]);
  const [value1, setValue1] = React.useState([]);

  function valuetext(value) {
    return `${value}°C`;
  }
  const handleOnSubmit = e =>{
    e.preventDefeault();
  }

   
    return (
        <div>
            <Header></Header>

           <div className="userProfile">
               <Container>
                <img src={img} alt="" className="propic"/>
                <form onSubmit={handleOnSubmit}>
                  <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Name</Form.Label>
                              <Form.Control type="Text" placeholder="Enter Name" />
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Water Intake</Form.Label>
                              <Form.Control type="text" placeholder="intake" />
                                  </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Sleep Schedule</Form.Label> <br />
                    <h4>From</h4>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Sleep Schedule</Form.Label> 
                    <h4>To</h4>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                        label="Basic example"
                        value={value1}
                        onChange={(newValue) => {
                          setValue1(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  
                  </Form.Group>
                  </Row>

  {/* fever level */}
  <Form.Label>Fever Lebel</Form.Label>
  <Box sx={{ width: 400 }}>
      <Slider
        aria-label="Temp"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={10}
        marks
        valueLabelDisplay="auto"
        min={10}
        max={103}               
      />
    </Box>
  
  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Oxygen Level</Form.Label>
    <Slider
        aria-label="SPO2"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
          
  </Form.Group>

  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Address" />
  </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
    <Form.Label>Symptoms</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Headeche</option>
        <option>Tiredness</option>
        <option>Nausea</option>
        <option>Constipation</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Cough</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Dry</option>
        <option>Wet</option>
      </Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Chest Pain</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Moderate</option>
        <option>Severe</option>
       
      </Form.Select>
    </Form.Group>
  </Row>
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a suggestions here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>

  {/* <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

  <Button className="mt-4" variant="primary" type="submit">
    Submit
  </Button>
</form>
           </Container>
           </div>

        </div>
    );
};

export default Profile;