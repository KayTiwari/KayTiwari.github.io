import React, {Component} from 'react';
import '../App.css';
import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends Component{

    state = {

    }

    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render(){
    return (
        <div>
            <nav className='navbar'>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='links'
                onClick={this.scrollToTop}
              >Home</Link>

              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='links'
            >About</Link>

            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='links'
            >Projects</Link>

            <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='links'
            >Resume</Link>

            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='links'
            >Contact</Link>
            </nav>
        </div>
    )
}
}

export { Navbar }