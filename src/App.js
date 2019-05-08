import React, {Component} from 'react';
import { Navbar, TitleCard, About, Projects, Resume, Contact } from './components';
import { fadeInUp } from 'react-animations';
import Avatar from '@material-ui/core/Avatar';
import Radium, {StyleRoot} from 'radium';
import './App.css'
import { Link, animateScroll as scroll } from "react-scroll";
import pika from '../src/images/pikapika.gif'
import flavicon from '../src/images/flavicon.png'


//fade-in on scroll
class App extends Component{
    constructor(){
        super();

        this.state ={
            hasScrolled: false,
            theposition: 0
        }
    }
    scrollToTop = () => {
        scroll.scrollToTop();
      };

      componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
    
      listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height

        if (scrolled >= 0.27637260950030845) {
        this.setState({
          hasScrolled: true,
          theposition: scrolled
        })}
        if (scrolled < 0.27637260950030845){
            this.setState({
                hasScrolled: false,
                theposition: scrolled
            })
        }
      }
    render(){
        return (
            <div className='all'>
                <div className='avatar'><Avatar>AKT</Avatar></div>
                <Navbar img={flavicon} />
                <TitleCard id="home"/>
                <About id="about"/>
                {this.state.hasScrolled ? <StyleRoot><i style={styles.fadeInUp} onClick={this.scrollToTop} class="fas fa-chevron-circle-up fa-3x"></i></StyleRoot> : null}
                <Projects id="projects"/>
                <Resume id='resume'/>
                <Contact id='contact'/>
                {/* <div style={{width:'100%', height:0, paddingBottom:'75%', position:'relative'}}><iframe src="https://giphy.com/embed/1BURfsUHbv4eQ" style={{width:"50%", height:"50%", position: 'absolute'}} frameBorder="0" allowFullScreen></iframe></div><p></p> */}
                <div style={{width:'100%', height:'100%', position:'relative', margin: 0}}><img style={{width:"10%", height:"10%", margin: 0, position: 'absolute', left: 500}} src={pika}></img></div>
            </div>
        )
    }
}
const styles = {
    fadeInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
        position: 'fixed',
        bottom: '50%',
        right: -200,
        height: 300,
        width: 300,
        color: 'red',
        marginRight: 0,
        cursor: 'pointer',
        zIndex: 99,
      },
    }
export default App;