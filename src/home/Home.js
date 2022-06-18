import {Component, Fragment} from 'react';
import Navbar from '../navbar/Navbar';

class Home extends Component {
 render() {
    return (
      <Fragment>
        <Navbar activeIndex='1' />
        <div>
          <center>
            <div className='fs-2 fw-bold mt-5'>Turu...</div>
            <iframe title='title' src="https://giphy.com/embed/EZICHGrSD5QEFCxMiC" width="480" height="480" frameBorder="0" allowFullScreen></iframe>
          </center>
        </div>
      </Fragment>
      
    );
  }
}

export default Home;
