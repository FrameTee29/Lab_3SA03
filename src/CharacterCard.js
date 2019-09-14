import React from 'react';
import './App.css';

export default class CharacterCard extends React.Component{
    render(){
        return(
            <div>{this.props.value}</div>
        );
    }
}