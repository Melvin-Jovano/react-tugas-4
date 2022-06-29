import React, { Fragment } from "react";
import {MdOutlineNavigateNext} from 'react-icons/md'
import Navbar from "../navbar/Navbar";
import Headline from "./HeadLine"
import Card from '../home/Card';
import Mood from './MoodAndGenres'
import Trending from './Trending'
import NewAlbum from './NewAlbum';
import './explore.css'


class Explore extends React.Component {
  render(){
    return(
      <Fragment>
        <Navbar activeIndex='2'/>
        <div className="containerr">

          {/* Headline */}
          <div className="pt-4 mt-4">
            <Headline />
          </div>

          {/* New Album & Single */}
          <div className="pt-4 mt-4">
            <NewAlbum />
          </div>
          {/* New Album & Single */}

          {/* Mood & Genres */}
          <div className="pt-4 mt-4">
            <div className="d-flex justify-content-between">
              <div className='fs-1 fw-bolder text-white'>
                Moods & genres
              </div>
              <div className='fs-1 fw-bolder'>
                <span href="#mood" role="button" data-bs-slide="prev">
                  <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                </span>
                &nbsp;&nbsp;
                <span href="#mood" role="button" data-bs-slide="next">
                  <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                </span>
              </div>
            </div>
            <div>
              <div>
                <div id="mood" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner mb-3" role="listbox">
                    <Mood />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mood & Genres */}

          {/* Trending */}
          <div className="pt-5">
            <div className="d-flex justify-content-between">
              <div className='fs-1 fw-bolder text-white'>
                Mixed for you
              </div>
              <div className='fs-1 fw-bolder'>
                <span href="#trending" role="button" data-bs-slide="prev">
                  <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                </span>
                &nbsp;&nbsp;
                <span href="#trending" role="button" data-bs-slide="next">
                  <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                </span>
              </div>
            </div>
            <div>
              <div>
                <div id="trending" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner mb-3" role="listbox">
                    <Trending />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Trending */}

          {/* New Music Videos */}
          <div>
            <div className="d-flex justify-content-between mb-2">
              
              <div className='fs-1 fw-bolder text-white'>
                New music videos
              </div>
              
              <div className='fs-1 fw-bolder'>
                <span href="#newMusicVideos" role="button" data-bs-slide="prev">
                  <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1 rotate90deg'/>
                </span>
                &nbsp;&nbsp;
                <span href="#newMusicVideos" role="button" data-bs-slide="next">
                  <MdOutlineNavigateNext className='text-white rounded-circle border border-light p-1 border-1'/>
                </span>
              </div>
            </div>
          
            <div>
              <div className="text-center my-3">
                <div className="row my-auto justify-content-center">
                    <div id="newMusicVideos" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner mb-3" role="listbox">
                        <Card type={9} />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Explore;