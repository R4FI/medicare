import React,{useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Row,Col,Button, Spinner } from 'react-bootstrap';
import { Input } from '@mui/material';
import doc from "../../../images/adddoctor/doctor.png";
import { Link,useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Doc = () => {
 //import from firebase authentication 
const [loginData,setLogIndata] = useState({});
const {registerDoctor,isLoading} = useAuth();

//use for save data
const handleOnBlur = e =>{
  const field = e.target.name;
  const value = e.target.value;
  const newLogInData = {...loginData};
  newLogInData[field] = value;
  setLogIndata(newLogInData);
  
  // console.log(newLogInData);
} 
//handle onSubmit this one is use for prevent reload the page
const handleOnSubmit = e =>{
  if (loginData.password !== loginData.password2) {
    alert('Password Missmatch');
    return
  }
  registerDoctor(loginData.email , loginData.password,loginData.name,loginData.number, history);
  e.preventDefault();
}

// redirect
// const location = useLocation();
const history = useHistory();

// const redirect_uri = location.state?.from || '/';
// // handle google signup
// const handleGoogleSignIn= () => {
//   signInUsingGoogle()
//       .then(result => {
//           history.push(redirect_uri);
//       })
// } 
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={6} xs={12}>
                    <img className="avatarimg" src={doc} alt="" /> <br />
            <TextField onBlur={handleOnBlur} name="name" type="text" id="standard-basic" label="Your Name" variant="standard" required className="w-75"/> <br />
            <TextField onBlur={handleOnBlur} name="email" type="email" id="standard-basic" label="Your Email" variant="standard" required className="mt-3 w-75"/> <br />
            <TextField onBlur={handleOnBlur} name="number" type="number" id="standard-basic" label="Phone Number" variant="standard" required className="w-75 mt-3"/> <br />
            <TextField onBlur={handleOnBlur} name="password" type="password" id="standard-basic" label="Password" variant="standard" required className="w-75 mt-3"/> <br />
            <TextField onBlur={handleOnBlur} name="password2" type="password" id="standard-basic" label="Confirm Password" variant="standard" required className="w-75 mt-3"/> <br /> 
            <Input name="image"  className="mt-3" accept="image/*" id="contained-button-file" multiple type="file" required/> <br />
            <Button type="submit" className="mt-5 btnclr" variant="outline-dark" >Sign Up</Button> <br />
            <Link className="redirectlog tex-center text-dark mt-5 fs-4" as={Link} to="/login">Already have a account? Log in</Link>
                </Col>
                </Row>
                </Container>
            </form>
            {isLoading && <Spinner animation="border" />}

        </div>
    );
};

export default Doc;