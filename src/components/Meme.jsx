import React from 'react'
import { toPng } from 'html-to-image'
import download from "downloadjs"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    // state for memes data from api
    const [apiData, setApiData] = React.useState([])

    // get the api data 
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(memesData => setApiData(memesData.data.memes))
    //         
    // }, [])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            // const blob = await response.blob();
            setApiData(data.data.memes)
        }
        getMemes()
        
    }, [])

    // get the meme image from api
    function getImage() {
        const randomId = Math.floor(Math.random() * apiData.length)
        const url = apiData[randomId].url
        setMeme(prevState => {
            return {
                ...prevState, 
                randomImage: url
            }
        })
    }
    

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

    // download meme
    const canvas = document.getElementById("image-section");
    function downloadMeme() {
        toPng(canvas)
            .then(memeUrl => {
                download(memeUrl, "meme.png")
            })
    }

    return(
        <main>
            <div className='form'>
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

                <button className='btn' onClick={getImage}>
                    Change the meme image 🖼
                </button>
            </div>
            <div className='meme-image-section' id='image-section'>
                <img src={meme.randomImage} className='meme-image' id='im' />
                <h3 className='text topText'>{meme.topText}</h3>
                <h3 className='text bottomText'>{meme.bottomText}</h3>
            </div>
            <button className='btn save-btn' onClick={downloadMeme} >
                    Save
            </button>

        </main>
    )
} 