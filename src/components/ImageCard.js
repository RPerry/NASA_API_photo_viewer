import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles/ImageCardStyles.css';

class ImageCard extends Component {
    render () {
        return (
            <div className="card">
                <h3>Identifying Number: {this.props.identifier}</h3>
                <img src= {this.props.image} alt="Earth from space"></img>
                <p> Date of Capture {this.props.date}</p>
                <button>{this.state.like}</button>
            </div>
        );
    }
}

ImageCard.PropTypes = {

};

export default ImageCard;