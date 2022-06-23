import {Component, Fragment} from 'react';
import './home.css';
import { cardData } from './card_data';
import { your_favorite } from './your_favorite_data';
import {mixedForYou} from './mixed_for_you';
import CardItem from './CardItem';
import { mixed } from './mixed';
import {startRadioBasedOnASong} from './start_radio_based_on_a_song';
import CardMultiItem from './CardMultiItem';
import {recommendedForYou} from './recommended_for_you';
import { similarTo } from './similar_to';
import { newAlbum } from '../explore/newAlbumData';
import { newMusicVideos } from '../explore/newMusicVideos';

export default class Card extends Component {

    constructor(props) {
        super(props);   
        this.cardDatas = props.type === 1 
            ? cardData 
            : props.type === 2 
                ? your_favorite 
                : props.type === 3
                    ? mixedForYou 
                    : props.type === 4
                        ? mixed
                        : props.type === 5
                            ? startRadioBasedOnASong
                            : props.type === 6
                                ? recommendedForYou
                                : props.type === 7
                                    ? similarTo
                                    : props.type === 8
                                        ? newAlbum
                                        : props.type === 9
                                        ? newMusicVideos
                                        : newMusicVideos
    }

    render() {
        const cards = this.cardDatas.map((cardData, index) => {
            let cardItem = <CardItem data={cardData} />;

            if(this.props.type === 5) cardItem = <CardMultiItem data={cardData} />;
            return(
                <Fragment key={index}>
                    <div className={(index === 0) ? "carousel-item active height-for-card-carousel" : "carousel-item height-for-card-carousel"} >
                        {cardItem}
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
