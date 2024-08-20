import React from 'react'
import { IoMenu } from "react-icons/io5";
import '../style/LoginPage.css';

const Navbar = () => {
  return (
    <nav>
    <input type="checkbox" id="check" name="" value="" />
    <label for="check" id="checkbtn"><IoMenu className="menu" /></label>
    <img src='logo.jpg' alt="SyncInsights" className="logo" />
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Pricing</a></li>
    </ul>

  </nav>
  )
}

export default Navbar