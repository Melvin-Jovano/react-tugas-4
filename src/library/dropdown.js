import React from "react";
import {BsChevronDown} from "react-icons/bs";

class Dropdown extends React.Component{
    constructor(){
        super();
        this.state={
            tampil : false,
            recent : true,
            AtoZ : false,
            ZtoA : false,
            text : "Recently added"
        }
        this.dropdown = React.createRef();
        this.show = this.show.bind(this);
        this.pilihRecent = this.pilihRecent.bind(this);
        this.pilihAtoZ = this.pilihAtoZ.bind(this);
        this.pilihZtoA = this.pilihZtoA.bind(this);
    }
    show(){
        this.setState((state)=>{
            return{tampil : !this.state.tampil}
        })
    }

    pilihRecent(){
        this.setState({recent : true, AtoZ : false, ZtoA : false, text : "Recently added"})
    }
    pilihAtoZ(){
        this.setState({recent : false, AtoZ : true, ZtoA : false, text : "A to Z"})
    }
    pilihZtoA(){
        this.setState({recent : false, AtoZ : false, ZtoA : true, text : "Z to A"})
    }
    componentDidMount(){
        document.addEventListener("click", this.handleOutsideClick)
    }
    handleOutsideClick=(event)=>{
        if(this.dropdown && !this.dropdown.current.contains(event.target)){
            this.setState({tampil : false})
        }
    }
    render(){
        let tampilkan = 
                <div className={this.state.tampil ? "position-absolute d-flex flex-column text-white dropList" : "position-absolute d-flex flex-column text-white dropList d-none"}>
                    <div style={{paddingTop:12, paddingBottom:12}}>
                        <div className={this.state.recent ? "px-3 dropItem fw-bold selected" : "px-3 dropItem fw-bold"} onClick={this.pilihRecent}>
                            Recently added
                        </div>
                        <div className={this.state.AtoZ ? "px-3 dropItem fw-bold selected" : "px-3 dropItem fw-bold"} onClick={this.pilihAtoZ}>
                            A to Z
                        </div>
                        <div className={this.state.ZtoA ? "px-3 dropItem fw-bold selected" : "px-3 dropItem fw-bold"} onClick={this.pilihZtoA}>
                            Z to A
                        </div>
                    </div>
                </div>
        return(
            <div className="d-flex rounded-pill border align-items-center dropPill" style={{padding: 3}} onClick={this.show} ref = {this.dropdown}>
                <span className="dropSpacing text-white fw-bold">
                    {this.state.text}
                </span>
                <div className="pe-2 align-items-center" style={{height:27}}>
                    <BsChevronDown className="text-secondary fs-6 dropIcon"/>
                </div>
                {tampilkan}
            </div>
        )
        }
}

export default Dropdown;