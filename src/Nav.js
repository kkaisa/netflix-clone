import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, []);

  return (
    <div className={`nav ${show &&'nav_black'}`}>
        <div className='nav_contents'>
            <img onClick={() => navigate("/")} className='nav_logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"/>
            <img onClick={() => navigate("/profile")} className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
        </div>
    </div>
  )
}

export default Nav
