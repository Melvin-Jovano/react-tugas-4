import './navbar.css';
import {FaSearch, FaChromecast} from 'react-icons/fa';
import {Component} from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.activeIndex,
            show: true,
        };
        this.setActiveIndex = this.setActiveIndex.bind(this);
    }

    setActiveIndex(event) {
        this.setState((state) => {
            return {
                activeIndex : event.target.dataset.id
            }
        });
    }

    setNavColor(navLinkIndex) {
        if(this.state.activeIndex === navLinkIndex)
            return 'white'
        else
            return 'grey'
    }

    setNavClass(navLinkIndex) {
        if(this.state.activeIndex === navLinkIndex)
            return 'text-white cursor-pointer fw-bold mx-4'
        else
            return 'cursor-pointer fw-bold mx-4'
    }
    toggle = () => this.setState((currentState) => ({
        show: !currentState.show
    }));
    
    render() {
        return (
            <div className='bg-black py-3 px-3'>

                <div className='d-flex justify-content-between'>
                    <div>
                        <img className="logo style-scope ytmusic-nav-bar" alt="" src="//music.youtube.com/img/on_platform_logo_dark.svg" />
                    </div>

                    <div className='fs-5'>
                        <center>
                            {   
                                this.state.show && 
                                <input type="text" name="name" className='showForm' /> && this.setNavClass('hi')
                            }
                            <Link to='/' style={{ textDecoration: 'none', color: this.setNavColor('1')}} className={this.setNavClass('1')}>
                                <span data-id='1' onClick={this.setActiveIndex} className='link-navbar'>
                                    Home
                                </span>
                            </Link>
                            
                            <Link to='/explore' style={{ textDecoration: 'none', color: this.setNavColor('2')}} className={this.setNavClass('2')}>
                                <span data-id='2' onClick={this.setActiveIndex} className='link-navbar'>
                                    Explore
                                </span>
                            </Link>
                            
                            <Link to='/library/playlists' style={{ textDecoration: 'none', color: this.setNavColor('3')}} className={this.setNavClass('3')}>
                                <span data-id='3' onClick={this.setActiveIndex} className='link-navbar'>
                                    Library
                                </span>
                            </Link>

                            <Link to='/' style={{ textDecoration: 'none', color: this.setNavColor('4')}} className="btn">
                                <span data-id='4' onClick={this.toggle} className='link-navbar'>
                                    <FaSearch />&emsp;Search
                                </span>
                            </Link>
                            
                            
                        </center>
                    </div>

                    <div>
                        <FaChromecast className='fs-4 text-white' />&emsp;&nbsp;&nbsp;
                        <img className="rounded-circle"alt="" width="26" src="https://lh3.googleusercontent.com/ogw/ADea4I6gpnYWJqeDkm6qZo8sgF4FFZM1osV1hi8jT1YALw=s32-c-mo" />
                    </div>
                </div>
            
            </div>
        );
    }
}
  
  export default Navbar;
  