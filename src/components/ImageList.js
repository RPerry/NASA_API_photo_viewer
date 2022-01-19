import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import './ImageListStyles.css';
import ImageCard from './ImageCard';


class ImageList extends Component {
    state = {
        imageData: [{}],
        allImagesArray: []
    }

    // fetching NASA API data, mapping each image to an instance of the ImageCard component
    fetchData = async () => {
        await axios.get('https://api.nasa.gov/planetary/apod?api_key=WfGraIlNaXvgCGLH59jlNqOOYhZ6bDeKRcFgiAJE&count=9&thumbs=true')
        .then((response) => {

            this.setState({imageData: response.data})

            let imageArray = [];
            this.state.imageData.map(image => {
                imageArray.push(
                    <ImageCard
                        title={image.title}
                        url={image.url}
                        explanation={image.explanation}
                        date={image.date}
                    />
                )
            })
            this.setState({allImagesArray: imageArray});
        })
        .catch((error) => {
            console.log(error)
        });
    }
    componentDidMount() {
        this.fetchData();
    }
     
    render() {
        return(
            // iterating through the array of all of the imagecards and displaying them
            <div className='allImages'>
                {this.state.allImagesArray.map((image) => (
                    <div className="image">
                        {image}
                    </div>
                ))}
            </div>

        );
    }
}

export default ImageList;