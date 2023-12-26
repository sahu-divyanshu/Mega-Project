import {useDispatch} from "react-redux"
import { useEffect, useState } from 'react'
import './App.css'
import authService from "./appwrite/auth";
import {login,logout} from "./store/authSlice"
import { Footer, Header } from "./components";

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){ dispatch(login({userData}));}
      else{ dispatch(logout());}
    })
    .finally(()=> setLoading(false))
  },[])

  if(loading){
    return (
      <div className="">Loading</div>
    )
  }
  else{
    return (
      <div className="min-h-screen flex flex-wrap content-between bg-bg">
        <div className="w-full block">
          <Header/>
          <main>
            
          </main>
          <Footer/>
        </div>
      </div>
    )

    
  }
}

export default App
