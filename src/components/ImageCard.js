import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ImageCardStyles.css';

class ImageCard extends Component {

    state = {
        like: false,
    }

    likeClick = () => {
        let cardLike = this.state.like;
        cardLike = !cardLike;
        this.setState({like: cardLike});
    }

    render () {
        return (
            <div className="card">
                <h3>Identifying Number: 5354545</h3>
                {/* <img src= {this.props.image} alt="Earth from space"></img>  */}
                <img src= "https://upload.wikimedia.org/wikipedia/commons/9/90/World_Globe_Map.jpg" alt="Earth from space" height= "100%" width="100%" ></img> 
                <p> Date of Capture {this.props.date}</p>
                <button onClick={() => this.likeClick()}>
                    {this.state.like === true ? "Unlike" : "Like" }
                </button>
            </div>
        );
    }
}

ImageCard.propTypes = {

};

export default ImageCard;