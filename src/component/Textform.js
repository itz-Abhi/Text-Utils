import React,{useState} from 'react'



export default function Textform(props) {
    const [Text, setText] = useState('Enter Text Here'); //default value when blanked

const handleUpclick = ()=>{
    console.log("Clicked " + Text);  
    let newtext = Text.toUpperCase();
    setText(newtext); 
    props.showAlert(" Converted To Upper Case" , "Sucess")       //update text  to capital...
}
const handleloclick = ()=>{// <font size="5"> Welcome to GeeksforGeeks </font>
  console.log("Clicked " + Text);  
  let netext = Text.toLowerCase();
  setText(netext); 
  props.showAlert("Converted To Lower Case" , "Sucess") ;    //update text  to capital...
}
const handlehiclick = ()=>{
  console.log("Clicked " + Text);  
  let newtext = "Cleared History";
  setText(newtext); 
  props.showAlert("Cleared History" , "Sucess")  ;
  
}
const handleOnchange = (event)=>{
    console.log("Changed");
    setText(event.target.value);  //text state ko update kr rhe handle event
}
  return (
    <>

<div class="p-3 mb-2 bg-success text-white">

 <div className="container ">
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control p-3 mb-2 bg-secondary text-white"  value={Text} id="myBox" onChange={handleOnchange} rows="8"></textarea>
</div> 
<button className="btn btn-primary m-4" onClick={handleUpclick}>Convert Into Uppercase</button>
<button className="btn btn-primary " onClick={handleloclick}>Convert Into Lowercase</button>
<button className="btn btn-primary m-4" onClick={handlehiclick}>Clear</button>
</div>
<div className="container my-3">
  <h1>Your Text Summary </h1>
  <p>{Text.split(" ").length} words and {Text.length} characters</p>
  <p>{0.008*Text.split(" ").length} minutes to read.</p>
  <h2>Preview</h2>
  <p>{Text}</p>
</div>
</div>

</>
  )
}
