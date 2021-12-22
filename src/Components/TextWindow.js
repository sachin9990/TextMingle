import React, { useState } from 'react'

function TextWindow(props) {

    const handleUpClick = () => {
        let upperCase = text.toUpperCase()
        setText(upperCase)
        props.showAlert("Converted to Upper case", "success")
    }

    const handleLoClick = () => {
        let lowerCase = text.toLowerCase()
        setText(lowerCase)
        props.showAlert("Converted to Lower case", "success")
    }

    const clear = () => {
        let clear = ("")
        setText(clear)
        props.showAlert("Cleared!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="container my-3">
                <div className="mb-3">
                    <h1 className="my-5" >{props.heading}</h1>
                </div>
                <div className="mb-3">
                    <textarea
                        style={{
                            color: props.mode === 'light' ? 'black' : 'white',
                            backgroundColor: props.mode === 'light' ? 'white' : '#005b6a'
                        }}
                        className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Upper Case</button>
                <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lower Case</button>
                <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={clear} >Clear Text Area</button>
            </div>

            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="container my-4">
                <h2>Your text summary</h2>
                <p>Number of words: {text.split(/s+/).filter((element) => { return element.length !== 0 }).length}</p>
                <p>Number of characters: {text.length}</p>
                {/* <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p> */}
                <p>Approximate time to read: {0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} minutes.</p>
                <p> <b>Raw Text:</b> {text.length > 0 ? text : "Put some text above"}</p>
            </div>
        </>

    )
}

export default TextWindow
