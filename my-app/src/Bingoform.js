import React, { useState } from "react";
// import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';

function Bingoform(props) {
  const [text, Settext] = useState("");

  //Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    Settext(newText);
    props.showAlert("Text Converted to UpperCase" , "Success")
  };
  //Lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    Settext(newText);
    props.showAlert("Text Converted to LowerCase" , "Success")
  };
  //handle - textarea
  const handleOnchange = (e) => {
    Settext(e.target.value);
  };
  // copy
  const [copied, setCopied] = useState();
  const CopyAll = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      console.log(copied);
      props.showAlert("Copied to Clipboard" , "Success")
    });
  };
  //clear all

  const ClearAll = () => {
    let newtext = " ";
    Settext(newtext);
    props.showAlert("Text Cleared" , "Success")
  };
  //speak

  const Speak = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
   
  };

  
  // Dark mode

  // const[mystyle,setMystyle] = useState({
  //   color: ' black',
  //   backgroundColor: 'white'
  // })
  // const [btntext,setBtntext] = useState("Enable Dark Mode")
  //  const toggleStyle = ()=>{
  //   if(mystyle.color === 'white'){
  //     setMystyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setBtntext("Enable Dark Mode")
  //   }
  //   else{
  //     setMystyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     setBtntext("Enable Light Mode")
  //   }
  //  }

  return (
    <div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 style={{ color: props.textColor }} className="Heading my-3">Convert Your Text to Upper/Lower Cases</h2>
        <div className="mb-3">
          <textarea
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              backgroundColor: props.mode === "dark" ? "#13466e" : "white"
            }}
            value={text}
            onChange={handleOnchange}
            placeholder="Enter Your Text"
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button disabled={text.length===0}
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary mx-1  my-1"
        >
          UpperCase
        </button>
        <button disabled={text.length===0}
          type="button"
          onClick={handleLoClick}
          className="btn btn-primary mx-1 my-1"
        >
          LowerCase
        </button>
        <button disabled={text.length===0}
          type="button"
          onClick={CopyAll}
          className="btn btn-primary mx-1 my-1"
          style={{cursor:"copy"}}
        >
          Copy
        </button>
        <button disabled={text.length===0}
          type="button"
          onClick={ClearAll} 
          className="btn btn-primary mx-1 my-1"
        >
          Clear All
        </button>
        <button disabled={text.length===0} type="button" onClick={Speak} className="btn btn-primary mx-1 my-1">
          Speak
        </button>
       
      
    

        {/* <button type="button" onClick={toggleStyle} className="btn btn-primary my-1 mx-1">{btntext}</button> */}
        <div
          style={{
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        >
          <h2 style={{ color: props.textColor }} className="Heading my-2">Your Text Summary</h2>

          <p style={{ color: props.textColor }}>
            {" "}
            {text.split(/\s+/).filter((element)=>{ return element.length!== 0}).length} words and {text.length} characters
          </p>
          <p style={{ color: props.textColor }}>
            {0.008 * text.split(" ").filter((element)=>{ return element.length!== 0}).length.toFixed(2)} Minutes required to read
          </p>
          <h2 style={{ color: props.textColor }} className="Heading my-3">Preview</h2>
          <h5 style={{ color: props.textColor }} className=" paragraph px-1 py-1">{text}</h5>
        </div>
      </div>
    </div>
  );
}

export default Bingoform;
