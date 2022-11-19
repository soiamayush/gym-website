import React from 'react'
import "./footer.css"
import Github from "../../assets/github.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr/>
        <div className='footer'>
            <div className='social-links'>

            <img src={Github} alt=""/>
            <img src={Linkedin} alt=""/>
            <img src={Instagram} alt=""/>
            </div>
        <div className='logo-f'>
            <img src={Logo} alt=""/>
        </div>
        </div>

        <div className='blur f-blur1'></div>
        <div className='blur f-blur2'></div>
    </div>
  )
}

export default Footer