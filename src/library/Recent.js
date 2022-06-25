import React, { Fragment } from "react";
import { MdPlayArrow } from "react-icons/md";
import {BiDotsVerticalRounded} from "react-icons/bi";
import recentData from "./recentData";
import "./Library.css"

class Recent extends React.Component{
    constructor(){
        super();
        this.state = recentData;
    }
    render(){
        let recentRow = this.state.map((item,index)=>{
            return(
                <Fragment>
                    <div className={(index === 0 )? "carousel-item active" : "carousel-item"}>
                        <div className="row gap-0 justify-content-around">
                            {item.map((data)=>{
                                let cardType = 
                                <div className="card-img position-relative">
                                    <a href={data.linkLagu} title={data.title}>
                                        <img src={data.cover} alt=""  className={data.type === "Song" ? "bg-black rounded" : "bg-black rounded"} height={160}/>
                                        <div className={data.type === "Song" ? "overlay" : "overlayPlaylist"}>
                                            <BiDotsVerticalRounded className="threeDots"/>
                                            {data.type === "Song" ? "" :
                                                <div className="rounded-circle buttonWrap">
                                                    <MdPlayArrow className="playlistButton"/>
                                                </div>}
                                        </div>
                                        {data.type === "Chart" ?
                                            <div className="rounded-circle buttonWrap">
                                                <MdPlayArrow className="playlistButton"/>
                                            </div> : ""
                                        }
                                        <MdPlayArrow className={data.type === "Song" ? "position-absolute top-50 start-50 translate-middle text-white fs-1" : "d-none"}/>
                                    </a>
                                </div>
                                let artistType = 
                                <span className={data.type === "Song" ? "artistUnderline" : ""}>
                                    {data.artist}
                                </span>
                                
                                return(
                                    <div className="card border-0 px-0 bg-transparent" style={{width:160}}> 
                                        {cardType}
                                        <div className="card-body p-0 text-white text-start mt-2">
                                            <h6 className="mb-0">{data.title}</h6>
                                            <p className="card-text text-white-50 text-wrap mt-1">
                                                {data.type} • {artistType}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Fragment>
            )
        });
        return(
            <Fragment>
                {recentRow}
            </Fragment>
        )
    }
}

export default Recent;