import Alert from './Alert.js';
import Bingoform from './Bingoform.js';
import Hola from './Hola.js';
import Navbar from './Navbar.js'
import React,{useState} from 'react'
// import Recognition from './Recognition.js'
import{
  BrowserRouter as Router,
 Route,
  Routes
} from "react-router-dom"
 
function App() {

  const[alert,setAlert] = useState(null);


  const showAlert = (message,type)=>{
    setAlert({
      msg: message ,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  } 

//red

 const[red,setRed] = useState('light')
 const Redmode = ()=>{
  if(red=== 'light'){
    setRed('dark');
    document.body.style.backgroundColor = '#dc3545';
    setTextColor('white'); 
    showAlert("Red theme Enabled", "Success")
 }
 else{
  setRed('light')
  document.body.style.backgroundColor = 'white';
  setTextColor('black'); 
  showAlert("Red theme Disabled", "Success")
 }
} 

//blue

 const[blue,setBlue] = useState('light')
 const Bluemode = ()=>{
  if(blue=== 'light'){
    setBlue('dark');
    document.body.style.backgroundColor = '#1c62c8';
    setTextColor('white'); 
    showAlert("Blue theme Enabled", "Success")
 }
 else{
  setBlue('light')
  document.body.style.backgroundColor = 'white';
  setTextColor('black'); 
  showAlert("Blue theme Disabled", "Success")
 }
}
//coal

 const[coal,setCoal] = useState('light')
 const Coalmode = ()=>{
  if(coal=== 'light'){
    setCoal('dark');
    document.body.style.backgroundColor = '#6c757d';
    setTextColor('white'); 
    showAlert("Coal theme Enabled", "Success")
 }
 else{
  setCoal('light')
  document.body.style.backgroundColor = 'white';
  setTextColor('black'); 
  showAlert("Coal theme Disabled", "Success")
 }
}

//golden

const[golden,setGolden] = useState('light')
 const Goldenmode = ()=>{
  if(golden=== 'light'){
    setGolden('dark');
    document.body.style.backgroundColor = '#ffc107';
    setTextColor('white'); 
    showAlert("Golden theme Enabled", "Success")
 }
 else{
  setGolden('light')
  document.body.style.backgroundColor = 'white';
  setTextColor('black'); 
  showAlert("Golden theme Disabled", "Success")
 }
}

// sky

const[skyblue, setSkyblue]= useState('light')
const SkyMode = ()=>{
  if(skyblue === 'light'){
    setSkyblue('dark');
    document.body.style.backgroundColor = '#0dcaf0'
    setTextColor('white'); 
    showAlert("Sky theme Enabled", "Success")
    
  }
  else{
    setSkyblue('light')
    document.body.style.backgroundColor = 'white'
    setTextColor('black');
    showAlert("Sky theme Disabled", "Success")
  }
}

// Dark mode

  const[mode,setMode] = useState('light')
   const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setTextColor('white'); 
      showAlert("Dark mode Enabled", "Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setTextColor('black');
      showAlert("light mode Enabled", "Success")
    }
   }


   const [textColor, setTextColor] = useState('black');
  
   
  return (
    <>
 
 <Router> 
   <Navbar mode={mode} SkyMode={SkyMode}  Redmode = {Redmode} Goldenmode = {Goldenmode} Coalmode = {Coalmode} Bluemode={Bluemode}  toggleMode = {toggleMode}/>
   <Alert alert = {alert}/>
<div>


    <Routes>
       <Route path='/Hola' element={<Hola/>}/> 
      <Route path='/' element={<Bingoform showAlert= {showAlert} textColor={textColor} mode={mode} />}/>
    
    </Routes> 
  </div>
</Router>
</>
  );
}

export default App;
