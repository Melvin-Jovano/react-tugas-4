import React from "react";
import {MdSubscriptions} from "react-icons/md"

class Albums extends React.Component{
    render(){
        return(
            <div className="pt-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <MdSubscriptions className="emptyPageIcon" style={{fontSize:80}}/>
                    <span className="emptyPageText">No subscriptions yet</span>
                    <span className="emptyPageDescription">Channels you subscribe to will show here</span>
                </div>
            </div>
        )
    }
}

export default Albums;