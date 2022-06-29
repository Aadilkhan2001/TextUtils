import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {

  // convert text into upper case
  const convertUpper = () => {
    let uptext = text.toUpperCase();
    setText(uptext);
    props.showalert("converted in uppercase!!!",'success');

  }


  // convert text into lower case
  const convertLower = () => {
    let uptext = text.toLowerCase();
    setText(uptext);
    props.showalert("converted in lowercase!!!",'success');
  }

  //alllow user to type in text box when state is changed
  const changeText = (event) => {
    setText(event.target.value);
  }
  //Convert text into speech
  const SpeakText = () => {
    let data = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(data);
    props.showalert("speaking!!!!!",'success');
  }

  const [text, setText] = useState("");


  return (
    <>
      <div className="container">

          <h1 className='text-center'>{props.heading}</h1>

          <textarea className={`form-control 
              ${props.theme === 'yellow' && props.dark === true ? 'darkyellow1'
              : props.theme === 'yellow' ? 'yellow' 
              : props.theme === 'red' && props.dark === true ? 'darkred1'
              : props.theme === 'red' ? 'red' 
              : props.theme === 'magenta' && props.dark === true ? 'darkmagenta1' 
              : props.theme === 'magenta' ? 'magenta'
              : props.theme ==='light' && props.dark === true ? 'dark1'
              :'bg-light'} text text-${props.dark === true ? 'light' : 'dark'}`} 
              value={text} onChange={changeText} id="textbox" rows="8">
          </textarea>


        <div className="my-3">

        <button className=
                  {`${props.theme === 'yellow' && props.dark === true ? 'btn darkyellow1'
                  : props.theme === 'yellow' ? 'btn yellow' 
                  : props.theme === 'red' && props.dark === true ? 'btn darkred1'
                  : props.theme === 'red' ? 'btn red' 
                  : props.theme === 'magenta' && props.dark === true ? 'btn darkmagenta1' 
                  : props.theme === 'magenta' ? 'btn magenta'
                  : props.theme ==='light' && props.dark === true ? 'btn dark1'
                  :'btn btn-primary'}`} onClick={convertUpper}>
              Convert Uppercase
        </button>
        <button className=
                  {`${props.theme === 'yellow' && props.dark === true ? 'btn darkyellow1'
                  : props.theme === 'yellow' ? 'btn yellow' 
                  : props.theme === 'red' && props.dark === true ? 'btn darkred1'
                  : props.theme === 'red' ? 'btn red' 
                  : props.theme === 'magenta' && props.dark === true ? 'btn darkmagenta1' 
                  : props.theme === 'magenta' ? 'btn magenta'
                  : props.theme ==='light' && props.dark === true ? 'btn dark1'
                  :'btn btn-primary'} mx-2`} onClick={convertLower}>
              Convert Lowercase
        </button>
        <button className=
                  {`${props.theme === 'yellow' && props.dark === true ? 'btn darkyellow1'
                  : props.theme === 'yellow' ? 'btn yellow' 
                  : props.theme === 'red' && props.dark === true ? 'btn darkred1'
                  : props.theme === 'red' ? 'btn red' 
                  : props.theme === 'magenta' && props.dark === true ? 'btn darkmagenta1' 
                  : props.theme === 'magenta' ? 'btn magenta'
                  : props.theme ==='light' && props.dark === true ? 'btn dark1'
                  :'btn btn-primary'}`} onClick={SpeakText}>
              Speak
        
        </button>

        </div>

      

        <h3>Text Summary</h3>
        <p>
          {text.length} charachters {text.split(" ").length  - 1 } words
        </p>

        <p>{(text.split(" ").length - 1 ) * 0.008} Minuites to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter a text and show the previw"}</p>
      </div>
    </>

  )

}
Textform.propTypes = {
  heading: PropTypes.string,
}
