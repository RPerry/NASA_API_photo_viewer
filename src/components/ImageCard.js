import React, {Component} from 'react';
import './ImageCardStyles.css';

class ImageCard extends Component {

    state = {
        like: false,
        backgroundColor: "antiqueWhite"
    }

    likeClick = () => {
        // to like and unlike an image card. When the image is liked, the background turns pink
        let cardLike = this.state.like;
        cardLike = !cardLike;
        this.setState({like: cardLike});
        cardLike === true ? this.setState({backgroundColor: "pink"}) : this.setState({backgroundColor: "antiqueWhite"});
    }


    render () {
        return (
            <div className="card" style= {{backgroundColor: this.state.backgroundColor}}>
                <h3>{this.props.title}</h3>
                <img src= {this.props.url} alt="The galaxy"></img> 
                <p>{this.props.explanation.substr(0, 500) + '\u2026'}</p>
                <p> Date of Capture: {this.props.date}</p>
                <button onClick={this.likeClick}>
                    {this.state.like === false ? "Like" : "Unlike" }
                </button>
            </div>
        );
    }
}

export default ImageCard;