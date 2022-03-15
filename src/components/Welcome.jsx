import React from 'react'
import {useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const addUserDetails = async ()=>{
    await navigate('../', { replace: true });
  }
  return (
    <>
        <div className="container_full">
            <div className="centerDiv">
                <h1>Welcome To The Home <br/> UserName</h1>
                <button className='commonBtn' onClick={()=> addUserDetails()}>Log out</button>
            </div>
        </div>
    </>
  )
}

export default Welcome;