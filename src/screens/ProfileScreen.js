import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from "../features/userSlice"
import { auth } from '../firebase';
import Nav from "../Nav"

function ProfileScreen() {
    const user = useSelector(selectUser);
    // const [products, setProducts] = useState([]);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
          <h1>Edit Profile</h1>
          <div className="profileScreen_info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            <div className="profileScreen_details">
                <h2>{user.email}</h2>
                <div className="profileScreen_plans">
                    <h3>Plans</h3>
                    <div className="plansScreen">
                        <div className="plansScreen_plan">
                            <div className="plansScreen_info">
                                <h5>Premium</h5>
                                <h6>4K + HDR</h6>
                                </div>
                                <button className="subscribeButton">
                                Subscribe
                            </button>
                            </div>
                            <div className="plansScreen_plan">
                            <div className="plansScreen_info">
                                <h5>Basic</h5>
                                <h6>720p</h6></div>
                                <button className="subscribeButton">
                                Subscribe
                            </button></div>
                            <div className="plansScreen_plan">
                            <div className="plansScreen_info">
                                <h5>Standard</h5>
                                <h6>1080p</h6>  
                            </div>
                            <button>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <button onClick={() => auth.signOut()} className="profileScreen_signOut">Sign Out</button>
                </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default ProfileScreen
