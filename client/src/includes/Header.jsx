import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component{
    render(){
        return (
<div>
<nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/Tutoriallist" className="navbar-brand">
           Kelvin Chemey
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/Tutoriallist"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Register"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
  {this.props.children}
</div>
        );
    }
}
export default Header;