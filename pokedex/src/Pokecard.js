import React, { Component } from 'react';

const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        let imgSrc = `${Poke_API}${this.props.id}.png`;
        return (
        <div className="Pokecard">
            <div className="Pokecard-title">{this.props.name}</div>
            <img className="Pokecard-image" src={imgSrc} />
            <div className="Pokecard-data">Type: {this.props.type}</div>
            <div className="Pokecard-data">EXP: {this.props.exp}</div>
        </div>
        );
    }
}

export default Pokecard