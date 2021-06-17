
import React from 'react';

import { Link } from 'react-router-dom';

export default function Header(props){
    return (
    <nav className="navbar navbar-light bg-light">
  <Link className="navbar-brand mb-0 h1" exect to="/">Navbar { props.tittle }</Link>
  <Link exect to="/aboutus">About Us</Link>
  {
      props.searchBar ? <div> searchBar </div> : <div> no searchBar </div>
  }
  </nav>
    );
}

