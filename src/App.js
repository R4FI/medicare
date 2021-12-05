import './App.css';
// react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
//import components
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import Appointment from './pages/Home/Appointment/Appointment';
import ErrorFound from './pages/ErrorFound/ErrorFound';
import SitBooking from './pages/SitBooking/SitBooking';
import AuthProvide from './contexts/AuthProvide';
import Register from './pages/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import Dashborad from './pages/Dashboard/Dashborad';

function App() {
  return (
    <div>

      <AuthProvide>
        <Router>
         

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>


            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/dashboard">
             <Dashborad></Dashborad>
            </Route>

            <PrivateRoute path="/sitbooking/:bookingId">
              <SitBooking></SitBooking>
            </PrivateRoute>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <Route exact path="*">
              <ErrorFound></ErrorFound>
            </Route>

          </Switch>
          
        </Router>
      </AuthProvide>

    </div>
  );
}

export default App;
