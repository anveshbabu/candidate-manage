import React from 'react';
import './sidebar.scss';
import { Link } from "react-router-dom";
export class Sidebar extends React.Component {




    componentDidMount() {


    }






    render() {

        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Start Bootstrap </div>
                <div className="list-group list-group-flush">
                    <Link to="/" className="list-group-item list-group-item-action bg-light">Home</Link>
                    <Link to="/profile/123" className="list-group-item list-group-item-action bg-light">Profile</Link>

                </div>
            </div>
        )
    }



}



