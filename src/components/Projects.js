import React, { Component } from 'react'
// import Home from './Home'
import {Link} from "react-router-dom";
import Navbar from './Navbar';

class Projects extends Component{
    render(){
        return (
            <div className="projectsWrapper">
            <Navbar/>
                <h1 className="projectsTitle">My Projects</h1>

                <div className="counter-btn-div">
                    <Link to="/Counter">
                            <button className="counter-btn">Counter Project</button>
                    </Link>
                </div>

                <div className="address-btn-div">
                    <Link to="/AddressBook">
                        <button className="address-btn">Address Book Project</button>
                    </Link>
                </div>

                <div className="toDoContainer">
                    <Link to="/ToDoList">
                        <button className="todo-btn">To Do List</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Projects;