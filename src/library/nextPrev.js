import React, { Fragment } from "react";
import {MdOutlineNavigateNext, MdOutlineNavigateBefore} from "react-icons/md";
import recentData from "./recentData";

class nextPrev extends React.Component{
    constructor(){
        super();
        this.state={
            counter : 1
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }
    increase(){
        this.setState({counter :this.state.counter + 1})
    }
    decrease(){
        this.setState({counter :this.state.counter - 1})
    }
    render(){
        let previous = <span role="button" href="#recentCarousel" data-bs-slide={this.state.counter === recentData.length ? "prev" : ""} onClick={this.state.counter === recentData.length ? this.decrease : ""}>
        <MdOutlineNavigateBefore className={this.state.counter === recentData.length ? 'text-white rounded-circle border border-secondary border-1 p-2 fs-1' : 'text-dark rounded-circle border border-dark border-1 p-2 me-3 fs-1'}/></span>;

        let next = <span role="button" href="#recentCarousel" data-bs-slide={this.state.counter === recentData.length ? "" : "next"} onClick={this.state.counter === recentData.length ? "" : this.increase} disabled={this.state.counter === recentData.length}>
        <MdOutlineNavigateNext className={this.state.counter === recentData.length ? 'text-dark rounded-circle border border-dark border-1 p-2 ms-3 fs-1' : 'text-white rounded-circle border border-secondary border-1 p-2 fs-1'}/></span>
        return(
            <Fragment>
                {previous}
                {next}
            </Fragment>
        )
    }
}
export default nextPrev;