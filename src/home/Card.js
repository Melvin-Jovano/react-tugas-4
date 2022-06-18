import {Component, Fragment} from 'react';
import './home.css';
import { cardData } from './card_data';

export default class Card extends Component {

    constructor(props) {
        super(props);   
        this.cardDatas = cardData;
    }

    render() {
        const cards = this.cardDatas.map((cardData, index) => {
            return(
                <Fragment key={index}>
                    <div className={(index === 0) ? "carousel-item active" : "carousel-item"} >
                        <div className="col-md-2">  
                            <div className="card border-0">
                                <div className="card-img bg-black">
                                    <img alt='' src={cardData.thumbnail} className="img-fluid rounded"/>

                                    <div className='text-white fw-bold text-start mt-2'>
                                        {cardData.title}
                                    </div>

                                    <div className='text-muted text-start'>
                                        {cardData.description}
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
                {cards}
            </Fragment>
        );
    }
}
