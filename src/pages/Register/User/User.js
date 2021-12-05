import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Row,Col,Button, Spinner } from 'react-bootstrap';
import GoogleIcon from '@mui/icons-material/Google';
import { Link,useHistory,useLocation } from 'react-router-dom';
import './User.css';
import image from "../../../images/adddoctor/user.png";
import useAuth from '../../../hooks/useAuth';
const User = () => {
//import from firebase authentication 
const [loginData,setLogIndata] = useState({});
  const {signInUsingGoogle} = useAuth();
  const {user,registerUser,isLoading} = useAuth();

//use for save data
const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = {...loginData};
    newLogInData[field] = value;
    setLogIndata(newLogInData);
    console.log(newLogInData);
} 
//handle onSubmit this one is use for prevent reload the page
const handleOnSubmit = e =>{
    if (loginData.password !== loginData.password2) {
      alert('Password Missmatch');
    // <Alert severity="error">Password Missmatch</Alert>
      return
    }
    registerUser(loginData.email , loginData.password,loginData.name, history);
    e.preventDefault();
  }

// redirect
const location = useLocation();
const history = useHistory();

const redirect_uri = location.state?.from || '/';
// handle google signup
const handleGoogleSignIn= () => {
    signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
}
    return (
        <div>
             <form onSubmit={handleOnSubmit}>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={6} xs={12}>
                    <img src={image}  alt="" className="avatarimg"/> <br />
            <TextField onBlur={handleOnBlur} name="name" type="text" id="standard-basic" label="Your Name" variant="standard" required className="w-75"/> <br />
            <TextField onBlur={handleOnBlur} name="email" type="email" id="standard-basic" label="Your Email" variant="standard" required className="mt-3 w-75"/> <br />
            <TextField onBlur={handleOnBlur} name="number" type="number" id="standard-basic" label="Phone Number" variant="standard" required className="w-75 mt-3"/> <br />
            <TextField onBlur={handleOnBlur} name="password" type="password" id="standard-basic" label="Password" variant="standard" required className="w-75 mt-3"/> <br />
            <TextField onBlur={handleOnBlur} name="password2" type="password" id="standard-basic" label="Confirm Password" variant="standard" required className="w-75 mt-3"/> <br />
            <Button type="submit"  className="mt-3 btnclr" variant="outline-dark" >Sign Up</Button> <br />
            <Button  className="mt-3 mb-3 btnclr m-auto" variant="outline-dark" onClick={handleGoogleSignIn} size="lg">{<GoogleIcon />} Sign Up With Google</Button> <br />
            <Link className="redirectlog tex-center text-dark mt-5 fs-4" as={Link} to="/login">Already have a account? Log in</Link>
                </Col>
                </Row>
                </Container>
            </form>
            {isLoading && <Spinner animation="border" />}
        </div>
    );
};

export default User;