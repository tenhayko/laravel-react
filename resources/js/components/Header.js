import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>Tasksman</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul className="navbar-nav mr-auto">
	      <li className="nav-item active">
	        <Link className='nav-link' to='/create'>Create</Link>
	      </li>
	    </ul>
	   </div>
    </div>
  </nav>
)

export default Header