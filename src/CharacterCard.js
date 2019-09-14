import React from 'react';
import './App.css';

export default class CharacterCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    activate = () => {
        if (!this.state.active) {
            this.setState({ active: true})
        }
    }
    render() {
        let activeClass=this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )

    }
}