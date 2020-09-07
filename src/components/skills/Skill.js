import React, { Component } from 'react';


class Skill extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.percentage = props.percentage;

        this.state = {
            value: '',
        }

        this.mouseOver = this.mouseOver.bind(this);
        this.onMouseLeave = this.mouseLeave.bind(this);

    }

    mouseOver(){
        this.setState((prev)=>{
            return {
                value: this.percentage + '%'
            }
        })
    }

    mouseLeave(){
        this.setState((prev) => {
            return {
                value: '',
            }
        })
    }

    render(){
        return (
            <div className="skill"  onMouseOver={this.mouseOver} onMouseLeave={this.onMouseLeave} >
                <div className="name">
                    <span> { this.name } </span>
                    <span style={{color: "red"}}>{ this.state.value }</span>
                </div>
                <div className="percentage">
                    <div className="percentage-value" style={{ width: this.percentage + "%" }}></div>
                </div>
            </div>
        );
    }
}

export default Skill;