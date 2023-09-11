import React from 'react';
import './App.css';
import Header from './assets/Header';
import {   RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './assets/components/Home';
import Route from './assets/Route';
import About from './assets/components/About';
import Services from './assets/components/Services';
import Contact from './assets/components/Contact';
import SignUp from './assets/SignUp';
import Login from './assets/Login';


  const signUpData=async (info)=>{
    const res=await fetch('https://gymapp-8aa5e-default-rtdb.firebaseio.com/signup.json',{
      method:'POST',
      body:JSON.stringify(info),
      headers:{
      'content-Type':'application/json'
    }
    })
  }

  const loginData=async ()=>{
    const response=await fetch('https://gymapp-8aa5e-default-rtdb.firebaseio.com/signup.json')

    if(!response.ok){
      throw new Error('something went wrong')
    }
    const data=await response.json();
    const loadedcred=[];
    for(const key in data){
      loadedcred.push({
        id:key,
        name:data[key].name,
        email:data[key].email,
        password:data[key].pawwsord
      })
    }
    console.log(loadedcred);

  }


const router=createBrowserRouter([
  {path:'/',
  element:<Route/>,
  children:[
    {index:true,element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/services',element:<Services/>},
    {path:'/contact',element:<Contact/>},
    
  ]},
  
    {path:'/login',element:<Login onlogIn={loginData}/>},
    {path:'/signup',element:<SignUp onSignUp={signUpData}/>},   
  
  
])

function App() {

  
  return (
    <RouterProvider router={router} >
      <Header/>
    </RouterProvider>
  );
}

export default App;
