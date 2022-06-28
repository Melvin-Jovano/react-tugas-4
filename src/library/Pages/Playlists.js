import React, { Fragment } from "react";
import PlaylistsItems from "../playlistsItem";

class Playlists extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="row gx-0 gap-4">
                    <PlaylistsItems/>
                </div>
            </Fragment>
        )
    }
}

export default Playlists;