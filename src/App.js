
import React, {  useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';

function App() {
 const [mode , setMode] = useState('dark');
const [alert,setAlert] = useState(null);   //alert is object here
const showAlert = (message,type)=>{
setAlert({
  msg : message,type:type
})
setTimeout(() => {
  setAlert(null);
}, 3000);
}
 const toggleMode = ()=>
 {
  if(mode==='dark'){
    setMode('light');
    showAlert(" Dark Mode Is Enabled","Sucess");
  }
  else{
    setMode('dark');
    showAlert(" Light Mode Is Enabled","Sucess");
  }
 }
  return (
 
    <>
 
 <Navbar tittle = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
 <Alert alert ={alert} />
 <Textform showAlert={showAlert} heading=" Enter Your Text Here To Analyze"/>
    </>
  );
}


export default App;
