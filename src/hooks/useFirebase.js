import { useEffect, useState } from "react";
import authenticationInit from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "firebase/auth";
import {getIdToken, GoogleAuthProvider,updateProfile, signInWithPopup} from "firebase/auth";


authenticationInit();

const useFirebase =()=>{
const [error] = useState("");
 const [user,setUser] = useState({});
 const [doc,setDoc] = useState({});
 const [attnd,setAttnd] = useState({});
 const [isLoading,setisLoading] = useState(true);
 const [admin,setAdmin] = useState(false);
 const [doctor,setDoctor] = useState(false);
 const [attendee,setAttendee] = useState(false);
 const [token,setToken] = useState('');
 //===============
 const auth = getAuth();

// user registration
 const registerUser = (email,password,name,number,history)=>{
     setisLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const newUser = {email,displayName:name};
      setUser(newUser);
        saveUser(email,name,number,'POST');
      updateProfile(auth.currentUser, {
        displayName: name,
      })
      .then(() => {
        
      })
      .catch((error) => {

      });     
      history.replace('/');
        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      })
      .finally(()=>setisLoading(false));
 }
//  doctor registration
 const registerDoctor = (email,password,name,number,history)=>{
     setisLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const newDoctor = {email,displayName:name};
      setDoc(newDoctor);
        saveDoctor(email,name,number,'POST');
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        
      }).catch((error) => {

      });     
      history.replace('/');
        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      })
      .finally(()=>setisLoading(false));
 }
//   Register Attendee
 const registerAttendee = (email,password,name,number,history)=>{
     setisLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const newAttendee = {email,displayName:name};
      setAttnd(newAttendee);
        saveAttendee(email,name,number,'POST');
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        
      }).catch((error) => {

      });     
      history.replace('/');
        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      })
      .finally(()=>setisLoading(false));
 }


// log in
 const loginUser = (email,password,location,history) =>{
  signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
const destination = location.state?.from || '/';
history.replace(destination);
// Signed in 
// const user = userCredential.user;
// ...
})
.catch((error) => {
// const errorCode = error.code;
// const errorMessage = error.message;
})
.finally(()=>setisLoading(false)) ;
}


//  setup google log in
const googleProvider = new GoogleAuthProvider();

      //user SIGN IN with google 
      const signInUsingGoogle = () => {
        setisLoading(true);
       return signInWithPopup(auth, googleProvider)
        .then((result)=>{
          const user = result.user;
          saveUser(user.email,user.displayName,'PUT');
        })
        .catch((error)=>{

        })

    }

    useEffect(()=>{
      const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) { 
              setUser(user);
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              
              })
            }
              else {
                setUser({})
              }
              setisLoading(false);
          });
          return () => unSubscribed;
     },[auth])

   

  // logout
  const logout = () => {
      setisLoading(true);
      signOut(auth).then(() => {
         
      }).catch((error) => {
        
      })
          .finally(() => setisLoading(false));
  }
    // Admin
    useEffect(() => {
      fetch(`http://localhost:5000/users/${user?.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
  }, [user?.email]);

  // save user
 const saveUser = (email,displayName,number,method)=>{
    const user = {email,displayName,number}
    fetch ('http://localhost:5000/users',{
      method : method,
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })

    .then()

 }
//  save doctor
 const saveDoctor = (email,displayName,number,method)=>{
    const doctor = {email,displayName,number}
    fetch ('http://localhost:5000/doctors',{
      method : method,
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(doctor)
    })

    .then()

 }
 // Doctor
 useEffect(() => {
  fetch(`http://localhost:5000/doctors/${doctor.email}`)
      .then(res => res.json())
      .then(data => setDoctor(data.doctor))
}, [doctor.email]);

// save attendee
const saveAttendee = (email,displayName,number,method)=>{
  const attendee = {email,displayName,number}
  fetch ('http://localhost:5000/attende',{
    method : method,
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(attendee)
  })

  .then()

}

// Attendee
useEffect(() => {
  fetch(`http://localhost:5000/attende/${attendee.email}`)
      .then(res => res.json())
      .then(data => setAttendee(data.attendee))
}, [attendee.email]);



 return{
     user,
     admin,
     doc,
     attnd,
     attendee,
     doctor,
     token,
     error,
    isLoading,
    registerUser,
    registerDoctor,
    registerAttendee,
    signInUsingGoogle,
    loginUser,
    logout,
 }


}

export default useFirebase;