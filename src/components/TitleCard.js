import React from 'react';
import '../App.css';
import facial from '../images/propic.png'


const TitleCard = () => {
    return (
        <div className='titlecardcontainer'>
            <div style={{display: 'flex', flexDirection:'column'}}>
            <h1 className='fullname'>Abhi K. Tiwari</h1>
            <img className='propic' src={facial} />
            <h2 className="typez">
            <span className="typer" id="main" data-words="Innovate from new perspectives., Design elegantly., Work with passion., Make the world go round." data-delay="90" data-colors="#daa35c,#62acb5,maroon,black"> data-deleteDelay="1000"></span>
            <span className="cursor" data-owner="main"></span>
            </h2>
            <h2 className='title'>Full Stack Engineer</h2>
            </div>
        </div>
    )
}

export {TitleCard}