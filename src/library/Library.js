import React, { Fragment } from "react";
import Navbar from "../navbar/Navbar";
import {NavLink, Outlet} from "react-router-dom";
import "./Library.css"

function Library(){
    return(
        <Fragment>
            <Navbar activeIndex = "3"/>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <span className="recentTitle text-white">Recent activity</span>
                </div>
            </div>
            <div className="container d-xl-flex justify-content-start px-0">
                <ul className="text-uppercase fw-bold d-xl-flex justify-content-start px-0 my-0" id="libList">
                    <li className="liSpacing">
                        <NavLink to="playlists" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"}>
                            playlists
                        </NavLink>
                    </li>
                    <li className="liSpacing">
                        <NavLink to="albums" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"}>
                            albums
                        </NavLink>
                    </li>
                    <li className="liSpacing">
                        <NavLink to="songs" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"}>
                            songs
                        </NavLink>
                    </li>
                    <li className="liSpacing">
                        <NavLink to="artists" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"}>
                            artists
                        </NavLink>
                    </li>
                    <li className="liSpacing">
                        <NavLink to="subscriptions" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"}>
                            subscriptions
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Library;