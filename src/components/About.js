import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";




class About extends Component{

    state = {

    }
    scrollToTop = () => {
        scroll.scrollToTop();
      };


    render(){ 
    return (
        <div id={this.props.id} style={{marginBottom:300}}>
            <h1 className='subtitle'>About_</h1>
        
            <div style={{display: 'flex', justifyContent:'space-around', marginTop: 100}}>
            <div>
            <h2 style={{fontFamily: 'sans-serif', fontWeight: 700, color: '#333', marginBottom: 30, fontSize: 30}}>Hi, I'm Abhi</h2>
            <p style={{fontFamily: 'sans-serif', fontWeight: 400, color: '#333'}}>I am a software engineer from Detroit, Michigan.</p>
            <p style={{fontFamily: 'sans-serif', fontWeight: 400, color: '#333'}}>I have a deep passion for software and design and love creating something beautiful.</p>
            <p style={{fontFamily: 'sans-serif', fontWeight: 400, color: '#333'}}>Let's work together to build an elegant and user-friendly product.</p>
            <p style={{fontFamily: 'sans-serif', fontWeight: 400, color: '#333'}}>Explore my site and what I've built in the past.</p>
            </div>

            <div>
            <ul style={{listStyleType: 'none', fontSize: '20px'}}>
            <li style={{fontFamily: 'sans-serif', fontWeight: 400, color: '#333', marginBottom: 20}}><span style={{color: '#333', fontWeight: 600, fontFamily:'sans-serif'}}><i style={{marginRight: '10px'}} class="fas fa-map-marker-alt"></i>From : </span>Detroit, MI</li>
            <li style={{fontFamily: 'sans-serif', fontWeight: 400, color: '#333', marginBottom: 20}}><span style={{color: '#333', fontWeight: 600, fontFamily:'sans-serif'}}><i style={{marginRight: '10px'}} class="far fa-calendar-plus"></i>Date of Birth : </span>April 5 1995</li>
            <li style={{fontFamily: 'sans-serif', textAlign:'center', fontWeight: 700, color: '#333'}}><span style={{color: '#333', fontWeight: 700, fontSize: 40, alignSelf:'center', fontFamily:'sans-serif', cursor:'pointer'}}><a style={{color: '#333', textDecoration:'none'}} href='https://www.linkedin.com/in/abhi-tiwari-28578a179/'><i class="fab fa-linkedin"></i></a></span></li>
            <li style={{fontFamily: 'sans-serif', textAlign:'center', fontWeight: 700, color: '#333'}}><span style={{color: '#333', fontWeight: 700, fontSize: 40, alignSelf:'center', fontFamily:'sans-serif', cursor:'pointer'}}><a style={{color: '#333', textDecoration:'none'}} href='https://github.com/KayTiwari'><i class="fab fa-github"></i></a></span></li>
            </ul>
            </div>
            </div>
        </div>
    )
}
}

export { About }