import React, { Fragment } from "react";
import Navbar from "../navbar/Navbar";
import "./Library.css"

class Library extends React.Component{
    render(){
        return(
            <Fragment>
                <Navbar activeIndex = "3"/>
                <div className="container d-xl-flex justify-content-start px-0">
                    <ul className="text-uppercase fw-bold d-xl-flex justify-content-start px-0 my-0" id="libList">
                        <li className="liSpacing text-white border-bottom border-2">playlists</li>
                        <li className="liSpacing">albums</li>
                        <li className="liSpacing">songs</li>
                        <li className="liSpacing">artists</li>
                        <li className="liSpacing">subscriptions</li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Library;