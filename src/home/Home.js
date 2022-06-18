import {Component, Fragment} from 'react';
import Navbar from '../navbar/Navbar';
import {MdOutlineNavigateNext} from 'react-icons/md'
import './home.css';
import Card from './Card';

export default class Home extends Component {
 render() {
    return (
      <Fragment>
        <Navbar activeIndex='1' />
        <div className='bg-black'>
          
          <div className='container pt-4'>

            <div>
              <div className="d-flex justify-content-between mb-2">
                <div className='fs-2 fw-bolder text-white'>
                    Listen again
                </div>

                <div className='fs-2 fw-bolder'>
                  <span href="#listenAgainCarousel" role="button" data-bs-slide="prev">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                  </span>
                  &emsp;
                  <span href="#listenAgainCarousel" role="button" data-bs-slide="next">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                  </span>
                  &emsp;
                </div>
              </div>
             
              <div>

                <div className="text-center my-3">
                  <div className="row my-auto justify-content-center">
                      <div id="listenAgainCarousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner mb-3" role="listbox">
                              <Card />
                          </div>
                      </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        
        </div>
      </Fragment>
      
    );
  }
}
