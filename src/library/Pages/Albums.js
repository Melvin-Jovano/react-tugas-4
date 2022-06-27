import React from "react";
import {IoMdDisc} from "react-icons/io"

class Albums extends React.Component{
    render(){
        return(
            <div className="pt-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <IoMdDisc className="noAlbumsIcon"/>
                    <span className="noAlbumsText">No albums yet</span>
                    <span className="noAlbumsDescription">Albums you add to your library will show here</span>
                </div>
            </div>
        )
    }
}

export default Albums;