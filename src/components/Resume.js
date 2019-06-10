import React, {Component} from 'react';
import resume from '../Resume.pdf'
import { Link, animateScroll as scroll } from "react-scroll";



class Resume extends Component{
    state = {

    }
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render(props){
        return (
            <div id={this.props.id} style={{marginTop: 200}}>
            <h2 className='subtitle'>Technologies & Resume</h2>
            <div class='container' style={{marginTop: 200}}>
            <div class='row'>
            <div class='col text-center'>
            <a href={resume} download="Abhisresume"><button type='button' class=" btn btn-primary w-50">Download (pdf)</button></a>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export { Resume };