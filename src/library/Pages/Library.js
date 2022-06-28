import React, { Fragment } from "react";
import Navbar from "../../navbar/Navbar";
import {NavLink, Outlet} from "react-router-dom";
import {MdHistory} from "react-icons/md";
import "../Library.css";
import Recent from "../Recent";
import NextPrev from "../nextPrev";
import Dropdown from "../dropdown";

class Library extends React.Component{
    constructor(){
        super();
        this.state={
            show : true
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }
    hide(){
        this.setState({show : false})
    }
    show(){
        this.setState({show : true})
    }
    render(){
        return(
            <Fragment>
                <Navbar activeIndex = "3"/>
                <div className="container px-4">
                    <div className="container pt-4 px-0 recentContainer">
                        <div className="d-flex align-items-center">
                            <span className="recentTitle text-white flex-grow-1">Recent activity</span>
                            <MdHistory className="fs-4 text-secondary me-3"/>
                            <NextPrev/>
                        </div>
                        <div className="container mt-3 mb-4 px-0">
                            <div id="recentCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-wrap = "false">
                                <div className="carousel-inner">
                                    <Recent />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container px-0 dataContainer">
                        <div className="container d-xl-flex justify-content-start px-0 navLine">
                            <ul className="text-uppercase fw-bold d-xl-flex justify-content-start px-0 my-0" id="libList">
                                <li className="liSpacing ms-0">
                                    <NavLink to="playlists" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"} onClick={this.show}>
                                        playlists
                                    </NavLink>
                                </li>
                                <li className="liSpacing">
                                    <NavLink to="albums" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"} onClick={this.hide}>
                                        albums
                                    </NavLink>
                                </li>
                                <li className="liSpacing">
                                    <NavLink to="songs" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"} onClick={this.show}>
                                        songs
                                    </NavLink>
                                </li>
                                <li className="liSpacing">
                                    <NavLink to="artists" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"} onClick={this.show}>
                                        artists
                                    </NavLink>
                                </li>
                                <li className="liSpacing">
                                    <NavLink to="subscriptions" className={({isActive})=> isActive? "linkStyle text-decoration-none text-white border-bottom border-2" : "linkStyle text-decoration-none text-secondary"} onClick={this.hide}>
                                        subscriptions
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={this.state.show ? "py-4 d-flex position-relative" : "d-none"}>
                            <Dropdown/>
                        </div>
                        <Outlet/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Library;