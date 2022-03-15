import React from 'react';
import './UserDetails.css';
import {useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const addUserDetails = async ()=>{
    await navigate('../Welcome', { replace: true });
  }
  return (
    <div className="container_full">
        <div className='centerDiv'>
            <h1>Please Fill Your Details</h1>
            <div className="form">
                <form action="">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />    
                    <input type="email" placeholder='Email' />
                    <input type="number" placeholder='Phone Number' />
                    <input type="text" placeholder='Address' />
                    <button type='submit' className='commonBtn' onClick={()=> addUserDetails()}> Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserDetails;