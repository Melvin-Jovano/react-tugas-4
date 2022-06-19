import {Component, Fragment} from 'react';
import './home.css';
import {IoRadioOutline} from 'react-icons/io5';

export default class CardMultiItem extends Component {

    constructor(props) {
        super(props);   
        this.state = {
            data : props.data,
        };
    }

    render() {
        const cardsItems = this.state.data.map((data, index) => {
            return(
                <Fragment key={index}>
                    <div className={`cursor-pointer col-md-4 mt-3`}>  
                        <div className="card border-0">
                            <div className={`card-img bg-black text-start`}>
                                
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <img alt='' src={data.thumbnail} className={`w-100 img-fluid`}/>
                                    </div>

                                    <div className='col-md-10'>
                                        <div className='text-light'>
                                            {data.title}
                                        </div>

                                        <div className='text-muted'>
                                            <IoRadioOutline className='fs-5'/> {data.description}
                                        </div>
                                    </div>

                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        });

        return (
            <Fragment>
                <div className='row'>
                    {cardsItems}
                </div>
            </Fragment>
        );
    }
}
