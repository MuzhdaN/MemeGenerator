import React from 'react'


export default function Header() {
    return(
        <div className='header'>
            <img 
                src='/public/meme.jpg'
                className='logo' 
            />
            <h3 className='header-title'>Meme Generator</h3>
            <h4 className='header-subheading'>React course - project 4</h4>
        </div>
    )
}