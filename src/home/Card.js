import {Component, Fragment} from 'react';
import './home.css';
import { cardData } from './card_data';
import { your_favorite } from './your_favorite_data';
import {mixedForYou} from './mixed_for_you';
import CardItem from './CardItem';

export default class Card extends Component {

    constructor(props) {
        super(props);   
        this.cardDatas = props.type === 1 
            ? cardData 
            : props.type === 2 
                ? your_favorite 
                : props.type === 3
                    ? mixedForYou 
                    : mixedForYou;
    }

    render() {
        const cards = this.cardDatas.map((cardData, index) => {
            return(
                <Fragment key={index}>
                    <div className={(index === 0) ? "carousel-item active height-for-card-carousel" : "carousel-item height-for-card-carousel"} >
                        <CardItem data={cardData}/>
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
