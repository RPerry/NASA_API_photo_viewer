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

    fetchData = async () => {
        await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
        .then((response) => {

            console.log(response.data)
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
        console.log(this.state.imageData[0]);
    }
    componentDidMount() {
        this.fetchData();
    }
     
    render() {
        console.log(this.state.allImagesArray);
        return(
            <div className='allImages'>
                {this.state.allImagesArray.map((image) => (
                    <div className="image">
                        {image}
                    </div>
                ))}
                {/* {this.state.allImagesArray[0]} */}
            </div>

            // <ImageCard />
        );
    }
}

export default ImageList;