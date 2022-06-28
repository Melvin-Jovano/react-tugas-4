import React, { Fragment } from "react";
import {MdOutlineThumbDown, MdOutlineThumbUp, MdThumbDown, MdThumbUp, MdMoreVert, MdPlayArrow} from "react-icons/md";

class songCard extends React.Component{
    constructor(props){
        super(props);
        this.data={
            cover : this.props.song.cover,
            judul : this.props.song.title,
            penyanyi : this.props.song.singer,
            album : this.props.song.album,
            panjang : this.props.song.length,
            linkLagu : this.props.song.linkLagu,
            linkPenyanyi : this.props.song.linkSinger,
            linkAlbum : this.props.song.linkAlbum
        };
        this.state={
            like : false,
            dislike : false
        }
        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
    }
    handleLike(){
        if(this.state.dislike){
            this.setState((state)=>{
                return {dislike : false}
            })
        }else{
            this.setState((state)=>{
                return {like : !this.state.like}
            })
        }
    }
    handleDislike(){
        if(this.state.like){
            this.setState((state)=>{
                return {like : false}
            })
        }else{
            this.setState((state)=>{
                return {dislike : !this.state.dislike}
            })
        }
    }
    render(){
        return(
            <Fragment>
                <div className="d-flex p-2 align-items-center justify-content-between songCard" style={{borderColor : "rgba(255,255,255,0.1)", borderTop : "solid 1px"}}>
                    <div className="position-relative">
                        <img src={this.data.cover} alt="" style={{width : 32, height : 32}} className="me-4"/>
                        <MdPlayArrow className="position-absolute playSongs overlaySong"/>
                    </div>
                    <div className="d-flex justify-content-between flex-fill">
                        <div className="d-flex" style={{width:"calc(100%/3)"}}>
                            <a href={this.data.linkLagu} className="text-white text-decoration-none songsTitle" title={this.data.judul}>
                                {this.data.judul}
                            </a>
                        </div>
                        <div className="d-flex flex-fill">
                            <div className="d-flex" style={{marginLeft:16, width:"calc(100%/2)"}}>
                                <a href={this.data.linkPenyanyi} className="text-decoration-none hoverStyle" style={{color:"rgba(255,255,255,0.7)"}} title={this.data.penyanyi}>
                                    {this.data.penyanyi}
                                </a>
                            </div>
                            <div className="d-flex" style={{marginLeft:16}}>
                                <a href={this.data.linkAlbum} className="text-decoration-none hoverStyle" style={{color:"rgba(255,255,255,0.7)"}} title={this.data.album}>
                                    {this.data.album}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center" style={{marginLeft:16, color:"#909090", width:136}}>
                        <div className="d-flex overlaySong">
                            <div className="px-2 me-2" title="Dislike" style={{cursor:"pointer"}} onClick={this.handleDislike}>
                                {this.state.dislike ? <MdThumbDown className="" style={{fontSize:24}}/> : <MdOutlineThumbDown className="" style={{fontSize:24}}/>}
                            </div>
                            <div className="px-2" title="Like" style={{cursor:"pointer"}} onClick={this.handleLike}>
                                {this.state.like ? <MdThumbUp style={{fontSize:24}}/> : <MdOutlineThumbUp style={{fontSize:24}}/>}
                            </div>
                        </div>
                        <div className="px-2 ms-2 overlaySong" title="More Actions" style={{cursor:"pointer"}}>
                            <MdMoreVert style={{fontSize:24}}/>
                        </div>
                    </div>
                    <span style={{color:"rgba(255,255,255,0.7)", marginLeft:32}} title={this.data.panjang}>
                        {this.data.panjang}
                    </span>
                </div>
            </Fragment>
        );
    }
}
export default songCard;