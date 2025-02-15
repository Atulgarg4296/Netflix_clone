import React, { useEffect } from 'react'
import LoginPage from './LoginPage'
import BrowsePage from './BrowsePage'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter} from 'react-router-dom'
// import { onAuthStateChanged } from 'firebase/auth'
// import {auth} from '../utils/Firebase';
// import { addUser, removeUser } from '../utils/userSlice'
// import { useDispatch } from 'react-redux'

const Body = () => {
    // const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<LoginPage/>
        },
        {
            path:"/browse",
            element:<BrowsePage/>
        } 
    ]); 


       

 


   


  return (
      <RouterProvider router={appRouter}></RouterProvider>

  )
}
export default Body