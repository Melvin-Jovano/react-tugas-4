import React, {Component, Fragment} from "react";
import { MdShowChart} from "react-icons/md";
import { BsMusicNote } from "react-icons/bs";
import { CgSmileMouthOpen } from "react-icons/cg";

class HeadLine extends React.Component{
    render(){
        return(
            <div className="container pt-4">
                <div className="row">
                    <div className="col-lg-4">
                        <div class="card-body headlineCard d-flex p-2 rounded">
                            <h2><BsMusicNote className="ms-3 ps-2 iconColor" /></h2> <h4 class="card-title text-white text-bold mt-2 ms-3 fw-bolder">New Realeases</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card-body headlineCard d-flex p-2 rounded">
                            <h2><MdShowChart className="ms-3 ps-2 iconColor" /></h2> <h4 class="card-title text-white text-bold mt-2 ms-3 fw-bolder">Charts</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card-body headlineCard d-flex p-2 rounded">
                            <h2><CgSmileMouthOpen className="ms-3 ps-2 iconColor" /></h2> <h4 class="card-title text-white text-bold mt-2 ms-3 fw-bolder">Mood & genres</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadLine;