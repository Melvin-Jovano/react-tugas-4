import React from "react";
import Card from '../home/Card';

class Trending extends React.Component{
    render(){
        return(
            <div>
                <div className="text-center my-3">
                    <div className="row my-auto justify-content-center">
                        <div id="recommendedForYouCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner mb-3" role="listbox">
                                <Card type={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Trending;