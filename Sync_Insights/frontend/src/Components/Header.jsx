import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import logo from './logo.jpg';
import user from './user.jpg'
import {Link} from 'react-router-dom'
import DataType from "./DataType";

function Header() {
    const [showUserContainer, setShowUserContainer] = useState(false);
    const handleUserCLick = () => {
        // Set the state to true to show the Data container
        setShowUserContainer(true);
    };

    const handleuserclose = () => {
        // Set the state to true to show the Data container
        setShowUserContainer(false);
    };
    const [showDataContainer, setShowDataContainer] = useState(false);
    const [showSyncContainer, setShowSyncContainer] = useState(false);

    const handleButtonClick = () => {
        // Set the state to true to show the Data container
        setShowDataContainer(true);
    };

    const handleSyncButton = () => {
        // Set the state to true to show the Data container
        setShowSyncContainer(true);
    };

    const handleclose = () => {
        // Set the state to true to show the Data container
        setShowDataContainer(false);
    };
    const handleinsightclose = () => {
        // Set the state to true to show the Data container
        setShowSyncContainer(false);
    };
    return (
        <>
            <div className="navbar">
                <div className="logo-content">
                    <div className="logo">
                        <img src={logo} alt="Sync Insights" />
                    </div>
                    <div className="content">
                        <button className='import' onClick={handleButtonClick}>Insert Data</button>
                        <button className='sync' onClick={handleSyncButton}>Sync Insights</button>
                        <Link to="/manager/insert-user"><button className="import">Insert user</button></Link>
                    </div>
                </div>
                <div className="profile">
                    <img src={user} onClick={handleUserCLick} className="user" alt="User Profile" />
                </div>
            </div>
            {showUserContainer && (
                <div className='user-click-container'>
                    <div className="user-close-container">
                        <IoMdClose className="user-closebtn" onClick={handleuserclose} />
                    </div>
                    <div className="user-content-container">
                        email
                    </div>
                </div>
            )}
             {showDataContainer && (
                <div className='click-container'>
                    <div className="close-container">
                        <IoMdClose className="closebtn" onClick={handleclose} />
                    </div>
                    <div className="content-container">
                        
                    </div>
                </div>
            )}
             {showSyncContainer && (
                <div className='click-container'>
                    <div className="close-container">
                        <IoMdClose className="closebtn" onClick={handleinsightclose} />
                    </div>
                    <div className="content-container">

                    </div>
                </div>
            )}
        </>
    )
}

export default Header