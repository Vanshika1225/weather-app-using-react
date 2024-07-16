import React from 'react'
import Img from '../images/starting-img.webp'
import { useNavigate } from "react-router-dom";
import '../css/GettingStarted.jsx.css'

const GettingStarted = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/second-section')
    }
    return (
        <div className='Started-section'>
            <div className='Starting-img'>
                <img src={Img} alt="img" />
            </div>
            <div className='strting-button'>
                <button type='button' onClick={handleGetStarted}>Get started</button>
            </div>
        </div>
    )
}

export default GettingStarted