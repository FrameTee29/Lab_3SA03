import React from 'react';
import './App.css';

export default class CharacterCard extends React.Component{
    render(){
        return(
            <div class="card">{this.props.value}</div>
        );
    }
}