import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';
import cryptodash from '../images/cryptodashimg.png';
import spacefighter from '../images/starfightervofficfix.png'
import tarotreads from '../images/tarotreads.png';
import wild5 from '../images/wild5.png';
import '../App.css';

class ProjCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          fade={true}
          nextIcon={<span aria-hidden="false" className="carousel-control-next-icon"/>}
        >
          <Carousel.Item>
            <a href='http://crypto-dash.surge.sh/'><img
              className="d-block w-100"
              src={cryptodash}
              alt="First slide"
            /></a>
            <Carousel.Caption>
              <div style={{backgroundColor: 'black', opacity:.85}}>
              <h3>CryptoDash.js</h3>
              <p>Live updating cryptocurrency dashboard created with React. Pulls data from various API's and relays data on prices, volumes, as well as crypto-related news. The graph updates every 24 hours with changes on the currency's price.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{backgroundColor:'black'}}><a style={{boxShadow: 'inset 0 0 0 500px rgba(0,0,0,.3)'}} href='http://tarotreads.surge.sh/'><img
              className="d-block w-100"
              src={tarotreads}
              alt="Second slide"
            /></a></div>
            <Carousel.Caption>
              <div style={{backgroundColor: 'black', opacity:.85}}>
              <h3>Simple Tarot Readings</h3>
              <p>Simple website made using react, pulls data from a tarot card API to use for 3 or 5 card major arcana tarot readings.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://spacefighterv.herokuapp.com/'><img
              className="d-block w-100"
              src={spacefighter}
              alt="Third slide"
            /></a>
  
            <Carousel.Caption>
              <div style={{backgroundColor: '#cccccc', opacity:.85, color: 'black'}}>
              <h3><span style={{color:'blue'}}>i</span>SpaceFighter<span style={{color:'red'}}>V</span></h3>
              <p>Space invaders clone made on React, includes User Authentication and storing scores on a database.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href='http://www.nyan.cat/'><img
              className="d-block w-100"
              src={wild5}
              alt="Fourth slide"
            /></a>
  
            <Carousel.Caption>
              <div style={{backgroundColor: '#cccccc', opacity:.85, color: 'black'}}>
              <h3>Wild5 (Work in progress)</h3>
              <p>A psychological wellness education mobile app coded in React Native targeted towards teenagers and young college students.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
export default ProjCarousel;
