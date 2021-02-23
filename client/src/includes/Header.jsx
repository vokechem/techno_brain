import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component{
    render(){
        return (
<div>
<div id="topbar" className="d-none d-lg-flex align-items-end fixed-top topbar-transparent">
    <div className="container d-flex justify-content-end">
      
    </div>
  </div>
  <header id="header" className="fixed-top header-transparent">
    <div className="container d-flex align-items-center">
      <h3 className="logo mr-auto"><a href="index.html">Tutorials</a></h3>
      
    </div>
  </header>
  {this.props.children}
</div>
        );
    }
}
export default Header;