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
            <h2 className='subtitle'>Resume_</h2>
            <div style={{display: 'flex', flexDirection:'column', justifyContent:'space-around', marginTop: 200, marginLeft: 200, marginRight: 200}}>
            <a href={resume} download="Abhisresume"><button type='button' class="btn btn-primary btn-block">Download (pdf)</button></a>
            <h2 style={{textAlign:'center', marginTop: 30, marginBotton: 30}}>or</h2>
            <a href='https://docs.google.com/document/d/e/2PACX-1vSTm_lip1HWyg61ilcp930B8D7SbynE9i04mPF086q4Zy4gWWEsntxNhcIs-P0ZNxwEvY6lzHHxAA-1/pub'><button type='button' class="btn btn-link btn-block">Link to Google doc</button></a>
            </div>
            {/* <iframe style={{height: '100%', width: '100%', alignSelf:'center'}} src="https://docs.google.com/document/d/e/2PACX-1vSTm_lip1HWyg61ilcp930B8D7SbynE9i04mPF086q4Zy4gWWEsntxNhcIs-P0ZNxwEvY6lzHHxAA-1/pub?embedded=true"></iframe> */}
            </div>
        )
    }
}

export { Resume };