import React, { Fragment } from "react";
import {MdMoreVert} from "react-icons/md"

class artistsItem extends React.Component{
    constructor(){
        super();
        this.state=[
            {
                cover : "https://lh3.googleusercontent.com/1-Ipiq-y8WyAcWn88nuxwTHaaBWMg8VkCBuP3puDCec-neD3v-7SqoBRzmmBKmA-lir_Ie70yw9EKHk=w120-h120-p-l90-rj",
                name : "Alan Walker",
                description : "2 songs",
                link : "https://music.youtube.com/browse/MPLAUCaXJEi-wOOVe2eZZHzyz4mQ"
            },
            {
                cover : "https://lh3.googleusercontent.com/w6lahCp_CVL6Dwd54MGB8Y_I-TXsMmMhDeM4Z_stmWh6B56H4e3x9M1q3juWODInuIBn90SeJl4RrpcN=w120-h120-p-l90-rj",
                name : "Maroon 5",
                description : "1 song",
                link : "https://music.youtube.com/browse/MPLAUCdFe4KkWwZ_twpo-UECR-Nw"
            },
            {
                cover : "https://lh3.googleusercontent.com/TAadzeojHFGU1EJ5jnOWDn6K8Cf8O2x0F04PVxnZwUEhcaYN0pA0dic49VU7OKGs7oovBTylWx70xhY=w120-h120-p-l90-rj",
                name : "Imagine Dragons",
                description : "2 songs",
                link : "https://music.youtube.com/browse/MPLAUC0aXrjVxG5pZr99v77wZdPQ"
            },
            {
                cover : "https://lh3.googleusercontent.com/TH3IXs5FL0GWk4BWPylXomZ_tUFV3sQQz8IaK1Hhw4sTTbFkCQlUXwAErsMvnoqjRxR5L1nXrsinYg=w120-h120-p-l90-rj",
                name : "Avicii",
                description : "3 songs",
                link : "https://music.youtube.com/browse/MPLAUCuACQmW04T3v9Mz_1_suFYw"
            }
        ]
    }
    render(){
        let artists = this.state.map((artist,index)=>{
            return(
                <Fragment>
                    <a href={artist.link} className="text-decoration-none" style={{color:"rgba(255,255,255,0.1)"}}>
                        <div className={index===0?"d-flex align-items-center px-2 justify-content-between border-top-0 artistCard" : "d-flex align-items-center px-2 justify-content-between artistCard"} style={{borderColor : "rgba(255,255,255,0.1)", borderTop : "solid 1px", paddingTop:10, paddingBottom:10}}>
                            <div className="d-flex">
                                <img src={artist.cover} alt="" className="rounded-circle" style={{height:56, width:56, marginRight:16}}/>
                                <div className="d-flex flex-column">
                                    <span className="text-white" style={{fontSize:16, fontWeight:500}}>{artist.name}</span>
                                    <span style={{color:"rgba(255,255,255,0.7)", fontSize:16, fontWeight:400}}>{artist.description}</span>
                                </div>
                            </div>
                            <div className="overlaySong">
                                <MdMoreVert style={{fontSize:24, color:"#aaa"}} title="More actions"/>
                            </div>
                        </div>
                    </a>
                </Fragment>
            )
        });
        return(
            <Fragment>
                {artists}
            </Fragment>
        )
    }
}
export default artistsItem;