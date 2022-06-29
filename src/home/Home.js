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
          
          <div className='containerr'>
            {/* Your favourites Section */}
            <div>
              <div className="d-flex justify-content-between pt-4 mt-4">
                <div className='fs-1 fw-bolder text-white'>
                  Your favourites
                </div>
                <div className='fs-1 fw-bolder'>
                  <span href="#listenAgainCarousel" role="button" data-bs-slide="prev">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                  </span>
                  &nbsp;&nbsp;
                  <span href="#listenAgainCarousel" role="button" data-bs-slide="next">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                  </span>
                </div>
              </div>
              <div>
                <div className="text-center my-3">
                  <div className="row my-auto justify-content-center">
                      <div id="listenAgainCarousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner mb-3" role="listbox">
                              <Card type={2} />
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Your favourites Section */}

            {/* Listen Again Section */}
            <div>
              <div className="d-flex justify-content-between pt-4 mt-4">
                <div className='fs-1 fw-bolder text-white'>
                    Listen again
                </div>

                <div className='fs-1 fw-bolder'>
                  <span href="#yourFavouritesCarousel" role="button" data-bs-slide="prev">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                  </span>
                  &nbsp;&nbsp;
                  <span href="#yourFavouritesCarousel" role="button" data-bs-slide="next">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                  </span>
                </div>
              </div>
            
              <div>
                <div className="text-center my-3">
                  <div className="row my-auto justify-content-center">
                      <div id="yourFavouritesCarousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner mb-3" role="listbox">
                              <Card type={1}/>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Listen Again Section */}

            {/* Mixed For You Section */}
            <div>
              <div className="d-flex justify-content-between pt-4 mt-4">
                <div className='fs-1 fw-bolder text-white'>
                  Mixed for you
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
                              <Card type={3} />
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mixed For You Section */}

            {/* Charts Section */}
            <div>
              <div className="d-flex justify-content-between pt-4 mt-4">
                <div className='fs-1 fw-bolder text-white'>
                  Charts
                </div>

                <div className='text-sm text-start'>
                  <div className='text-muted cursor-pointer'>MORE</div>
                </div>
              </div>
            
              <div>
                <div className="text-center my-3">
                  <div className="row my-auto justify-content-center">
                      <div id="mixedCarousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner mb-3" role="listbox">
                              <Card type={4} />
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Charts Section */}

            {/* Start Radio Based On A Song Section */}
            <div>
              <div className="d-flex justify-content-between pt-4 mt-4">
                
                <div>
                  <div className='text-muted'>
                    START RADIO BASED ON A SONG
                  </div>
                  <div className='fs-1 fw-bolder text-white'>
                    Quick picks
                  </div>
                </div>
                

                <div className='fs-1 fw-bolder'>
                  <span href="#startRadioBasedOnASongCarousel" role="button" data-bs-slide="prev">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                  </span>
                  &nbsp;&nbsp;
                  <span href="#startRadioBasedOnASongCarousel" role="button" data-bs-slide="next">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                  </span>
                </div>
              </div>
            
              <div>
                <div className="text-center my-3">
                  <div className="row my-auto justify-content-center">
                      <div id="startRadioBasedOnASongCarousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner mb-3" role="listbox">
                              <Card type={5} />
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Radio Based On A Song Section */}

            {/* Recommended For You Section */}
            <div>
              <div className="d-flex justify-content-between pt-4 mt-4">
                
                <div className='fs-1 fw-bolder text-white'>
                  Recommended music videos
                </div>
                
                <div className='fs-1 fw-bolder'>
                  <span href="#recommendedForYouCarousel" role="button" data-bs-slide="prev">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                  </span>
                  &nbsp;&nbsp;
                  <span href="#recommendedForYouCarousel" role="button" data-bs-slide="next">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                  </span>
                </div>
              </div>
            
              <div>
                <div className="text-center my-3">
                  <div className="row my-auto justify-content-center">
                      <div id="recommendedForYouCarousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner mb-3" role="listbox">
                              <Card type={6} />
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recommended For You Section */}

            {/* Similar To Section */}
            <div>
              <div className="d-flex justify-content-between pt-4 mt-4">
                
                <div>
                  <table cellPadding={10}>
                    <tr>
                      <td rowSpan={2}>
                        <img className='rounded-circle' src='https://lh3.googleusercontent.com/1R7O2eSFP8Xv2bVPmyc8dB_HnLK723RizDuNT5x4MyLReA_7PFbI8OUnsuAYvo-VGdOabf_FqoBbFtY=w60-h60-p-l90-rj' alt=''/>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan={2} className='text-muted'>
                        SIMILAR TO
                        <div className='fs-1 fw-bolder text-white'>
                          YOASOBI
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                
                
                <div className='fs-1 fw-bolder'>
                  <span href="#similarToCarousel" role="button" data-bs-slide="prev">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                  </span>
                  &nbsp;&nbsp;
                  <span href="#similarToCarousel" role="button" data-bs-slide="next">
                    <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                  </span>
                </div>
              </div>
            
              <div>
                <div className="text-center my-3">
                  <div className="row my-auto justify-content-center">
                      <div id="similarToCarousel" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner mb-3" role="listbox">
                              <Card type={7} />
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Similar To Section */}

          </div>
        
        </div>
      </Fragment>
      
    );
  }
}
