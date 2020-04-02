import React, { Component } from 'react'
// import Home from './Home'
import {Link} from "react-router-dom";

class Welcome extends Component{
    render(){
        return (
            <div className="welcomeWrapper">
                <h1 className="welcomeTitle">Kirsty Purkhardt</h1>

                <div className="welcome-btn-div">
                    <Link to="/Home" exact>
                            <button className="welcome-btn">Portfolio</button>
                    </Link>
                </div>

            </div>
        )
    }
}
export default Welcome;


