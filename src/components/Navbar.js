import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-a  text-decoration-none text-dark mx-3" aria-current="page" to="/">Home</Link>

                {/* <a className="nav-a  text-decoration-none text-dark" aria-current="page" href="#">Home</a> */}
              </li>


              <li className="nav-item">
                <NavLink className="nav-a a text-decoration-none text-dark mx-3" to="/about">{props.aboutText}</NavLink>
              </li>


              <div className='d-flex'>
                {/* onclick need function not function call so we used arrow function toggleMode with null as an argument */}
                <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>

              </div>


            </ul>


            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={() => { props.toggleMode(null) }} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Toggle mode</label>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
//isRequired ensure that we pass values from app or use default values
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "use in case we dont pass anything"
}
