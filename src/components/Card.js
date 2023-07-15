import React, {Component} from "react";

class Card extends Component {
    render() {
        return <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${this.props.name}?100x100`} alt="robot"/>
            <h2>{this.props.name}</h2>
            <p>{this.props.email}</p>
        </div>
    }
}

export default Card;