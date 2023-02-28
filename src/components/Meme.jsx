import React from 'react'


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topTex: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    // writing/addding the text from the form (input)
    function textChanged(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                [name]:value
            }
        })
    }

    return(
        <main>
            <form className='form'>
                <input
                    type="text"
                    placeholder='Top Text'
                    className='form-input'
                    value={meme.topText}
                    name="topText"
                    onChange={textChanged}
                />
                <input
                    type="text"
                    placeholder='Bottom Text'
                    className='form-input'
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={textChanged}
                />

                <button className='form-btn'>Change the meme image 🖼</button>

            </form>
            <h3>{meme.topText}</h3>
            <h3>{meme.bottomText}</h3>
        </main>
    )
} 