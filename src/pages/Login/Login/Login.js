import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
//image
import loginBanner from '../../../images/login-banner/logo-banner.jpg';
import googleLogo from '../../../images/google-logo.png';
//css file
import './Login.css'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const {
        signInUsingGoogle,
       loginUser,
    } = useAuth();
    //for email and password
    const [loginData,setLogIndata] = useState({});
  
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...loginData};
        newLogInData[field] = value;
        setLogIndata(newLogInData);
  }
  const handleLoginOnSubmit = e =>{
    loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();

  }
    // for data location and history
    const location = useLocation();
    const history = useHistory();
    //redirect
    const redirect_url = '/' || location.state;

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
   

    return (
        <div id="login">
            <Header></Header>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="login-banner mt-5">
                            <img className="img-fluid" src={loginBanner} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="login-form mt-5">
                            <h2 className="text-center">Login Your Account</h2>
                            <div>
                                <form onSubmit={handleLoginOnSubmit} className="w-75 mx-auto">
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Email</label>
                                        <input name="email"
                                            onBlur={handleOnBlur}
                                            type="text" className="form-control" placeholder="enter your email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>

                                        <input name="password"
                                            onBlur={handleOnBlur}
                                            type="password" className="form-control" placeholder="password at least 6 digit" required />
                                    </div>
                                    <div>
                                        <button
                                           
                                            type="submit" className="btn btn-brand fw-bold btn-lg logIn-btn w-25">LogIn</button>
                                    </div>
                                </form>
                            </div>
                            <p className="pt-3 pb-3 text-center"><strong>Fresher In MediCare?</strong>
                                <Link to="/register">
                                    Create Account
                                </Link></p>

                            <div className="text-center d-flex align-items-center justify-content-center">
                                
                                <button
                                    onClick={handleGoogleLogIn}
                                    className="btn btn-grad google-btn px-3 py-2 w-50"
                                > <img src={googleLogo} className=" gl-logo me-3" alt="" />Continue with Google</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;