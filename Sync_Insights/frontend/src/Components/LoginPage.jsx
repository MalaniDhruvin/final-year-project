import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";
import logo from './logo.jpg';
import { Link } from "react-router-dom";
import './LoginPage.css';
import { useState } from "react";
import { loginUser } from "../Global/apiCall";


const LoginPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const getInfo = (i) => {
    console.log(i.target.name, i.target.value);
    setUser({ ...user, [i.target.name]: i.target.value });
  };
  const handleLoginForm = (e) => {
    e.preventDefault();
    loginUser(user)
      .then((response) => {
        console.log(response.data);
        if (
          // response.data.userData.entity_type == "owner" ||
          // response.data.userData.entity_type == "upper_management" ||
          // response.data.userData.entity_type == "lower_management"
          response.data.userData.position == "Manager"
        ) {
          window.location.href = "/insights";
        } else {
          window.location.href = "/insert-data";
        }
      })
      .catch((error) => {
        // console.log(error);
        alert(error.response.data.message);
      });
  };

  return (
    <div className="main-container-login">
      {/* <div className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="Sync Insights" />
        </div>
        <div className="last-container">
          <ul>
            <IoMdClose className="Close" />
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn"><IoMenu className="menu" /></label>
      </div> */}

      <nav>
        <input type="checkbox" id="check" name="" value="" />
        <label for="check" id="checkbtn"><IoMenu className="menu" /></label>
        <img src={logo} alt="SyncInsights" className="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>

      </nav>

      <div className="login-container">
        <div className="Name-container">
          <h1 className="name">Sync Insights</h1>
        </div>
        <div className="form-container">
          <form className="form"  method="post" onSubmit={handleLoginForm}>
            <label htmlFor="Emial">Username or email address</label>
            <input
              type="email"
              name="email"
              className="input"
              onChange={getInfo}  
            />
            {/* <input type="email" name="Email" required
              className="input" /> */}
            <label htmlFor="password" >Password</label>
            <input
              type="password"
              name="password"
              className="input"
              onChange={getInfo}
            />
            {/* <input type="password" name="Password" required
              className="input" /> */}
            <a className="forgot" href="#">Forgot password?</a>
            <div className="button">
              {/* <Link to="insight" className="Link"><button className="login">Login</button></Link> */}
              <button className="login" type="submit">Login</button>
            </div>

          </form>
        </div>
      </div>

      {/* <footer className="last">
            <span>Copyright <FaRegCopyright /> 2024 Sync Insights</span>
      </footer> */}

    </div>
  );
}

export default LoginPage;