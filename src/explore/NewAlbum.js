import React from 'react';
import Card from '../home/Card';
import {MdOutlineNavigateNext} from 'react-icons/md'

class NewAlbum extends React.Component {

    render() { 
        return (  
        <div>
            <div className="d-flex justify-content-between">
                <div className='fs-1 fw-bolder text-white'>
                    New albums & single
                </div>
                <div className='fs-1 fw-bolder'>
                    <span href="#mixedForYouCarousel" role="button" data-bs-slide="prev">
                        <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                    </span>
                    &nbsp;&nbsp;
                    <span href="#mixedForYouCarousel" role="button" data-bs-slide="next">
                        <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                    </span>
                    </div>
                </div>
                <div>
                    <div className="text-center my-3">
                        <div className="row my-auto justify-content-center">
                            <div id="mixedForYouCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner mb-3" role="listbox">
                                    <Card type={8} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default NewAlbum;