import React from 'react';
import './App.css';

export default class CharacterCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            active: false,
        }
    }

    activate = () =>{
        let activeName= this.state.active ? 'activeCard':'';
        let className = `card${activeName}`;

        return(

        <div className={className} onClick={this.activate}>
            {this.props.value}
        </div>
        );
    }
}