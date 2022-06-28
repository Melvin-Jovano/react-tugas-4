import React from "react";
import Songsitem from "../songsItem";
import {IoShuffle} from "react-icons/io5"

class Songs extends React.Component{
    render(){
        return(
            <div className="container d-flex flex-column" style={{marginTop:20}}>
                <a href="#" className="text-decoration-none">
                    <div className="d-flex p-2 align-items-center">
                        <div className="position-relative me-4" style={{width:32, height:32, backgroundColor: "rgb(29,29,29)", borderRadius : 2, fontSize: 28}}>
                            <IoShuffle className="position-absolute top-50 start-50 translate-middle text-white"/>
                        </div>
                        <span className="text-white songsTitle">Shuffle all</span>
                    </div>
                </a>
                <Songsitem/>
            </div>
        )
    }
}

export default Songs;