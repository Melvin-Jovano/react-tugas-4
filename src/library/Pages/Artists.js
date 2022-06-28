import React from "react";
import ArtistsItem from "../artistsItem";

class Artists extends React.Component{
    render(){
        return(
            <div className="container" style={{marginTop:20}}>
                <ArtistsItem/>
            </div>
        )
    }
}

export default Artists;