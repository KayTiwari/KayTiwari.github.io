import React, { Component } from 'react'
import '../App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { rubberBand, bounceOut, flipInX, flipOutX, rollIn, rollOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


class Contact extends Component{
    state = {
        phone: false,
        email: false,
        location: false
    }
    showPhone = (e) => {
        if (this.state.phone === false){
            this.setState({
                phone: true
            })} else {
                this.setState({
                    phone: false
                })
            }
        }
    showEmail = (e) => {
        if (this.state.email === false){
            this.setState({
                email: true
            })} else {
                this.setState({
                    email: false
                })
            }
        }
    showLocation = (e) => {
        if (this.state.location === false){
            this.setState({
                location: true
            })} else {
                this.setState({
                    location: false
                })
            }
        }

    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render(props){
        return (
            <div id={this.props.id} style={{marginTop: 330}}>
            <h1 className='subtitle'>Contact me_</h1>

            <div style={{display: 'flex', justifyContent:'space-around', marginTop: 100}}>

            <div onClick={this.showPhone} style={{}}>
            <span className='fa-stack fa-2x'>
            <i className="fas fa-spinner fa-pulse fa-stack-2x"></i>
            <i class="fas fa-mobile-alt fa-stack-1x"></i>
            </span>
            </div>

            <div onClick={this.showLocation} style={{}}>
            <span className='fa-stack fa-2x'>
            <i className="fas fa-square fa-stack-2x"></i>
            <i class="far fa-compass fa-spin fa-inverse fa-stack-1x"></i>
            </span>
            </div>

            <div onClick={this.showEmail} style={{}}>
            <span className='fa-stack fa-2x'>
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="far fa-envelope fa-inverse fa-stack-1x"></i>
            </span>
            </div>

            </div>

            <div style={{display: 'flex', justifyContent:'space-around', marginTop: 10, marginLeft:50}}>
            <div>{this.state.phone ? <StyleRoot><h2 style={styles.rubberBand}>+12485797254</h2></StyleRoot> : <StyleRoot><h2 style={[styles.bounceOut, {color: 'transparent'}]} >+12485797254</h2></StyleRoot >}</div>
            <div style={{marginLeft:100}}>{this.state.location ? <StyleRoot><h2 style={{fontSize: 20, justifyContent:'center', textAlign:'center'}}>Currently in:</h2><h2 style={styles.flipInX} >Salt Lake City, UT</h2></StyleRoot> : <StyleRoot><h2 style={{fontSize: 20, textAlign:'center'}}>Currently in:</h2><h2 style={{color: 'transparent'}}>Salt Lake City, UT</h2></StyleRoot>}</div>
            <div style={{marginLeft:0}}>{this.state.email ? <StyleRoot><h2 style={styles.rollIn} >abhi.kay.tiwari@gmail.com</h2></StyleRoot> : <StyleRoot><h2 style={{color: 'transparent'}}>abhi.kay.tiwari@gmail.com</h2></StyleRoot>}</div>
            </div>
            </div>
        )
    }
}
// className='contactinfophone'
// className='contactinfolocation'
// className='contactinfoemail'
const styles = {
    rubberBand: {
        animation: 'x 1s',
        animationName: Radium.keyframes(rubberBand, 'rubberBand')
      },
    bounceOut: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceOut, 'bounceOut')
      },
    flipInX: {
        animation: 'x 1s',
        animationName: Radium.keyframes(flipInX, 'flipInX')
      },
    flipOutX: {
        animation: 'x 1s',
        animationName: Radium.keyframes(flipOutX, 'flipOutX')
      },
    rollIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(rollIn, 'rollIn')
      },
    rollOut: {
        animation: 'x 1s',
        animationName: Radium.keyframes(rollOut, 'rollOut')
      },
  }

export { Contact };
