import React, { useState } from 'react'

export default function Textform(props) {

        const handleUpClick = () => {
                let newText = text.toUpperCase();
                setText(newText);
        }
        const handleLowClick = () => {
                let newText = text.toLowerCase();
                setText(newText);
        }
        const hendelOnChange = (event) => {

                setText(event.target.value);
        }
        const [text, setText] = useState('');
        let index = text.length;
        return (

                <>
                        <div className='container'>
                                <h1>{props.heading}</h1>
                                <div className='mb-3'>
                                        <textarea className='form-control' value={text} onChange={hendelOnChange} id="my box" rows="8"></textarea>
                                </div>
                                <button type='button' className='btn btn-primory ' onClick={handleUpClick}>Convert to UpperCase</button>
                                <button className='btn btn-primory mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
                        </div>
                        <div className='container my-2'>

                                <h1>Your text Summery</h1>
                                <p>{text.split(' ').filter((ele) => { ele.length !== 0 }).length} words and {text.length} characters</p>
                                <p>{0.08 * text.split(' ').length} Minutes read</p>
                                <h1>Preview</h1>
                                <p>{text}</p>
                        </div>
                </>

        )
}
