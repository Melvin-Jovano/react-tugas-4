import React, {Fragment} from "react";
import { MdPlayArrow } from "react-icons/md";
import {BiDotsVerticalRounded} from "react-icons/bi";

class playlistsItems extends React.Component{
    constructor(){
        super();
        this.data = [
            {
                cover : "https://www.gstatic.com/youtube/media/ytm/images/pbg/create-playlist-@210.png",
                title : "New Playlist",
                type : "New"
            },
            {
                cover : "https://yt3.ggpht.com/5nRgYBUhY8V9aI2fJLbG9n0GbLo1fIwxUd-CZt9k-pFiModqcDJ0BLo-NtjRsNK-1mEPjm70SI6a=s576",
                title : "Mandarin Songs",
                description : "2 songs",
                link : "https://music.youtube.com/playlist?list=PLMNWl_tAxMyHVM7NtfEW5ExHq2cwGYySp"
            },
            {
                cover : "https://yt3.ggpht.com/Bch1XX_Eq7cNveFK-NS6cV7T1EjjXTAQBN0MrkznxNf7nOVGtCfnzdgkwHrjops-zgMeghYl5ig=s576",
                title : "English Songs",
                description : "8 songs",
                link : "https://music.youtube.com/playlist?list=PLMNWl_tAxMyGoOWpnq6A5o04lT-weizOr"
            }
        ]
    }
    render(){
        let playlistData = this.data.map((item)=>{
            return(
                <Fragment>
                    <div className="card border-0 px-0 bg-transparent" style={{width:160}}>
                        <div className="card-img position-relative">
                            <a href="">
                                <img src={item.cover} alt="" height={160} className="rounded"/>
                                <div className={item.type === "New" ? "" : "overlayPlaylist"}>
                                    <BiDotsVerticalRounded className={item.type === "New" ? "d-none" : "threeDots"}/>
                                    {item.type === "New" ? "" :
                                        <div className="rounded-circle buttonWrap">
                                            <MdPlayArrow className="playlistButton"/>
                                        </div>}
                                </div>
                            </a>
                        </div>
                        <div className="card-body p-0 text-white text-start mt-2">
                            <h6 className="mb-0">{item.title}</h6>
                            <p className="card-text text-white-50 text-wrap mt-1">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </Fragment>
            )
        });
        return(
            <Fragment>
                {playlistData}
            </Fragment>
        )
    }
}
export default playlistsItems;