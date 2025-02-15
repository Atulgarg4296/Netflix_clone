import React, { useRef, useState } from 'react'
import { Validations } from '../utils/Validations';
// import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Form = () => {
  const[isSignInForm,setIsSignInForm] = useState(true);
  const[errorMessage,setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const sampleError = "This is sample error";
  
  const toggleForm = ()=>{
    setIsSignInForm(!isSignInForm);
   
  }

  const SubmitForm = (e)=>{
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value
    const name = fNameRef.current?.value;
    const lastName = lNameRef.current?.value; 

    const error = Validations(email,password);
    setErrorMessage(error);
    
    if(error===null){
     if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
      const user = userCredential.user;
        updateProfile(user, {
        displayName:name+ " " + lastName
           }).then(() => {
            // Dispatch an action to update the redux store as well
            const{uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            // navigate('/browse');
       
      }).catch((error) => {
        setErrorMessage(error.message);
      });
  
      
        })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("Email is already registered");
          });

     }

     else{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // navigate('/browse');
       
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage("Invalid credentials");
  });
     }
     
    } 
  }

  return (
    <div className='h-screen flex justify-center'>
      <div className='h-1/2 md:h-2/3 w-96 my-24 mb-44 py-6 bg-black flex justify-center rounded bg-opacity-80'>
      <form className='text-white'>
        <h1 className='font-bold text-3xl'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {isSignInForm? ""  : <input type='text' ref={fNameRef} placeholder='First Name' className='mt-8 w-60 h-11 rounded bg-gray-700 block px-2'></input>}
        {isSignInForm? ""  : <input type='text' ref={lNameRef} placeholder='Last Name' className='my-4 w-60 h-11 rounded bg-gray-700 block px-2'></input>}
        <input  type='text' ref={emailRef} placeholder='Email' className='my-4 w-60 h-11 rounded bg-gray-700 block px-2'></input>
        <input type='password' ref={passwordRef} placeholder='Password' className='my-4 w-60 h-11 rounded bg-gray-700 block px-2'></input>
        <p className='text-red-600'>{errorMessage}</p>
        <button type='submit' className='bg-red-600 w-60 h-11 rounded mt-6 mb-4 block' onClick={SubmitForm}>{isSignInForm?"Sign In": "Sign Up"}</button>
        <p className='inline pl-2' >{isSignInForm? "New to Netflix? " : "Already registered? "}</p>
        <p className='inline cursor-pointer' onClick={toggleForm}>{isSignInForm?"Sign Up":"Sign In"}</p>
      </form>
      </div>
    </div>
  )
}

export default Form