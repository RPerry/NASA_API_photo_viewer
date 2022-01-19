import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './ImageCardStyles.css';

class ImageCard extends Component {

    state = {
        like: false,
        shareLink: false,
        backgroundColor: "antiqueWhite"
    }

    likeClick = () => {
        // to like and unlike an image card. When the image is liked, the background turns pink
        let cardLike = this.state.like;
        cardLike = !cardLike;
        this.setState({like: cardLike});
        cardLike === true ? this.setState({backgroundColor: "pink"}) : this.setState({backgroundColor: "antiqueWhite"});
    }

    ShareableLink = () => {
        return(
            <p>Here's the URL so you can share this image: {this.props.url}</p>
        )
    }

    shareClick = () => {
        // to show the and hide the shareable image link
        let isShareLink = this.state.shareLink;
        isShareLink = !isShareLink;
        this.setState({shareLink: isShareLink});
    }

    render () {
        return (
            <div className="card" style= {{backgroundColor: this.state.backgroundColor}}>
                <h3>{this.props.title}</h3>
                <img src= {this.props.url} alt="The galaxy"></img> 
                <p>{this.props.explanation}</p>
                <p> Date of Capture: {this.props.date}</p>
                <button onClick={this.likeClick}>
                    {this.state.like === false ? "Like" : "Unlike" }
                </button>
                <button onClick={this.shareClick}>{this.state.shareLink ? "Close" : "Share" }</button>
                <div className="shareLink">
                    {this.state.shareLink ? <this.ShareableLink /> : null}
                </div>
            </div>
        );
    }
}

// ImageCard.propTypes = {

// };

export default ImageCard;