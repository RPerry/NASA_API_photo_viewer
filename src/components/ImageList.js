import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './ImageListStyles.css';
import ImageCard from './ImageCard';


class ImageList extends Component {
    state = {
        imageData: [],
    }
    fetchData = async () => {
        // const response = await axios.get('https://api.nasa.gov/EPIC/api/natural/images?api_key=WfGraIlNaXvgCGLH59jlNqOOYhZ6bDeKRcFgiAJE');
        // this.setState({imageData: response.data})
        console.log(this.state.imageData);
    }
    render() {
        this.fetchData();
        
        // this.state.imageData.map(image => {
        //     return (
        //         <ImageCard
        //         identifier= {image.identifier}
        //         image= {image.image}
        //         date= {image.date}
        //         />
                
        //     )
        // })
            
        
        return(
            <div>
                <ImageCard 
                identifier={this.state.imageData[0].identifier}
                image={this.state.imageData[0].image}
                date={this.state.imageData[0].date}
                />
                test
            </div>

            // <ImageCard />
        );
    }
}

export default ImageList;