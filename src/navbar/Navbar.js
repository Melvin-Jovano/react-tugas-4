import './navbar.css';
import {FaSearch, FaChromecast} from 'react-icons/fa';
import {Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.activeIndex
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

    render() {
        return (
            <div className='bg-black py-3 px-3'>

                <div className='d-flex justify-content-between'>
                    <div>
                        <img className="logo style-scope ytmusic-nav-bar" alt="" src="//music.youtube.com/img/on_platform_logo_dark.svg" />
                    </div>

                    <div className='text-muted fs-5'>
                        <center>
                            <span data-id='1' className={this.state.activeIndex === '1' ? 'text-white cursor-pointer fw-bold mx-4' : 'cursor-pointer fw-bold mx-4'} onClick={this.setActiveIndex}>
                                Home
                            </span>
                            <span data-id='2' className={this.state.activeIndex === '2' ? 'text-white cursor-pointer fw-bold mx-4' : 'cursor-pointer fw-bold mx-4'} onClick={this.setActiveIndex}>
                                Explore
                            </span>
                            <span data-id='3' className={this.state.activeIndex === '3' ? 'text-white cursor-pointer fw-bold mx-4' : 'cursor-pointer fw-bold mx-4'} onClick={this.setActiveIndex}>
                                Library
                            </span>
                            <span data-id='4' className={this.state.activeIndex === '4' ? 'text-white cursor-pointer fw-bold mx-4' : 'cursor-pointer fw-bold mx-4'} onClick={this.setActiveIndex}>
                                <FaSearch />&emsp;Search
                            </span>
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
  