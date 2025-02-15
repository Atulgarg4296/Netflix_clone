import React from 'react'
import Logo from '../utils/Logo.png'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser } from '../utils/userSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      dispatch(removeUser());
      navigate('/');
      
    }).catch((error) => {

    });
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
                const{uid,email,displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}))
                navigate('/browse');
               
           
            
        
        } else {
          dispatch(removeUser());
          navigate('/');
        }
      });
},[])


  return (
    <div className='flex justify-between items-center'>
    <div className='h-24 md:border-none'>
        <img src={Logo} alt='logo' className='md:h-24 md:w-52  px-2 md:px-2' ></img>
    </div>
    
    {user && <div>
      <p className='md:px-14 px-10 text-lg font-serif md:visible hidden md:block'>{user?.displayName}</p>
      <button className='text-black md:font-bold md:text-xl h-10 rounded w-24 md:w-32 mx-10 md:px-5 md:mx-14 bg-red-500 transition duration-300 hover:bg-white' onClick={handleSignOut}>Sign out</button>
    </div>
 }

    </div>    
  )
}

export default Header