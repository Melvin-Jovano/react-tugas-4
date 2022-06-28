import React, { Fragment } from "react";
import SongsData from "./songsData";
import SongCard from "./songsCard";

class songsItem extends React.Component{
    constructor(){
        super();
        this.state = SongsData
    }
    render(){
        let songs = this.state.map((song)=>{
            return(
                <Fragment>
                    <SongCard song={song}/>
                </Fragment>
            )
        });
        return(
            <Fragment>
                {songs}
            </Fragment>
        )
    }
}

export default songsItem;