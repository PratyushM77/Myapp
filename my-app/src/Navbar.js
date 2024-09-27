import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
  
      <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Hola">Link</Link>
        </li>

        </ul>

        <button type="button" onClick={props.Bluemode} className="btn btn-primary mx-2 my-1">Blue theme</button>
        <button type="button" onClick={props.Redmode}  className="btn btn-danger mx-2 my-1">Red theme</button>
        <button type="button" onClick={props.Coalmode}  className="btn btn-secondary my-1 mx-2">Coal theme</button>
        <button type="button" style={{color:'white'}} onClick={props.SkyMode}  className="btn btn-info mx-2 my-1">Sky theme</button>
        <button type="button" style={{color:'white'}} onClick={props.Goldenmode}  className="btn btn-warning my-1 mx-2">Golden theme</button>

        <div className={`form-check my-2 form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </div>
  </div>
</nav>
      </div>
   
  )
}

export default Navbar
