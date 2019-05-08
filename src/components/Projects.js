import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import cryptodash from '../images/cryptodashimg.png'
import '../App.css'
import ProjCarousel from './ProjCarousel';



class Projects extends Component{
    state = {

    }
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render(props){
        return (
        <div id={this.props.id} style={{marginTop: 200}}>
            <h1 className='subtitle'>Work_</h1>

            <div style={{display: 'flex', justifyContent:'space-around', marginTop: 70, marginLeft: 200, marginRight: 200}}>
            <ProjCarousel />
            </div>
         </div> 
    )
}}

export { Projects }