import React, { useState } from "react";

export default function Textarea(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('success','Converted to uppercase.');
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('success','Converted to lowercase.');
  };
  const handleCapitalize = () => {
    let newText = "";
    for (let i = 0; i < text.split(" ").length; i++) {
      const word = text.split(" ")[i];
      let newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      newText = newText + newWord + " ";
      props.showAlert('success','Capitalized successfully.');
    }
    setText(newText.trim());
  };
  const handleSentence = () => {
    let newText = "";
    for (let i = 0; i < text.split(". ").length; i++) {
      const sentence = text.split(". ")[i];
      let newSentence =
        sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
      newText = newText + newSentence + ". ";
    }
    console.log(newText.lastIndexOf("."));
    if (newText.charAt(newText.lastIndexOf(".") - 1) === ".") {
      newText = newText.slice(0, -3);
    }

    setText(newText.trim());
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('success','Text is copied to the clipboard.');
  };
  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert('success','Extra spaces are removed.');
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <h1>{props.headingText}</h1>
      <div className="mb-3">
        <textarea 
        style={{color: props.mode==='dark'?'white':'black', background: props.mode==='dark'?'black':'white'}}
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows={8}
          value={text}
          onChange={handleOnChange}
          placeholder="type your text here"
        />
      </div>
      <button onClick={handleUpClick} className="btn btn-primary mx-1">
        Uppercase
      </button>
      <button onClick={handleLoClick} className="btn btn-primary mx-1">
        Lowercase
      </button>
      <button onClick={handleCapitalize} className="btn btn-primary mx-1">
        Capitalize
      </button>
      <button onClick={handleRemoveSpaces} className="btn btn-primary mx-1">
        Remove Extra Spaces
      </button>
      <button onClick={handleCopyText} className="btn btn-primary mx-1">
        Copy Text
      </button>
      <button onClick={handleSentence} className="btn btn-primary mx-1">
        Sentence
      </button>

      <button onClick={handleClear} className="btn btn-primary mx-1">
        Clear
      </button>
      {/* Summry of the text starting from here */}
      <h3 className="my-3">Text Summary</h3>
      <p>
        Words: {text.length ? text.trim().split(" ").length : 0} <br />
        Characters (including spaces): {text.length}
        <br />
        Characters (excluding spaces): {text.replaceAll(" ", "").length}
      </p>
      <p>{(0.0042 * text.trim().split(" ").length).toFixed(1)} Minutes read</p>
      <h2 className="my-2">Preview</h2>
      <p>{text.length > 0 ? text : "Type something to preview it here"}</p>
    </>
  );
}
