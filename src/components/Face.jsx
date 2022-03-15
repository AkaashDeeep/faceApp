import React from 'react';
import faceImage from './images/face-unlock.png';
import './Face.css';
import {useNavigate } from "react-router-dom";

const Face = () => {

  const navigate = useNavigate();
  const addUserDetails = async ()=>{
    await navigate('../Camera', { replace: true });
  }
  return (
    <>
        <div className="container_full">
            <div className='centerDiv'>
                <h1>Scan Your Face</h1>
                <div className="unlockImage">
                    <img src={faceImage} alt="unlock-image" onClick={()=> addUserDetails()}/>
                </div>
            </div>
        </div>
    </>
  )
};

export default Face;