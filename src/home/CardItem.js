import {Component, Fragment} from 'react';
import './home.css';

export default class CardItem extends Component {

    constructor(props) {
        super(props);   
        this.state = {
            data : props.data,
        };
    }

    render() {
        const cardsItems = this.state.data.map((data, index) => {
            let element = <img alt='' src={data.thumbnail} height='200' className={`w-100 ${data.isRounded ? 'rounded-circle' : 'rounded'}`}/>;

            if(data.isVideo) {
                element = <iframe height="193" className='w-100' src={data.thumbnail} title={index} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
            }

            return(
                <Fragment key={index}>
                    <div className={`cursor-pointer col-md-${data.span}`}>  
                        <div className="card border-0">
                            <div className={`card-img bg-black text-start`}>

                                {element}

                                <div className={`text-white fw-bold mt-2 ${data.isArtist ? 'text-center underline-on-hover' : ''}`}>
                                    {data.title}
                                </div>

                                <div className={`text-muted ${data.isArtist ? 'text-center' : ''}`}>
                                    {data.description}
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
