import React, { useState } from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdAnalytics } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import '../style/Sidebar.css'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const item = [{ img: <BiSolidDashboard style={{ fontSize: '20px', }} />, text: <p style={{ fontSize: '14px' }}>Dashboard</p> }, { img: <IoMdAnalytics style={{ fontSize: '20px' }} />, text: <p style={{ fontSize: '14px' }}>Analytics</p> }, { img: <FaFileInvoiceDollar style={{ fontSize: '20px' }} />, text: <p style={{ fontSize: '14px' }}>Invoice</p> }, { img: <FaCalendarAlt style={{ fontSize: '20px' }} />, text: <p style={{ fontSize: '14px' }}>Calender</p> }, { img: <IoIosNotifications style={{ fontSize: '20px' }} />, text: <p style={{ fontSize: '14px' }}>Notification</p> }, { img: <IoSettings style={{ fontSize: '20px' }} />, text: <p style={{ fontSize: '14px' }}>Setting</p> }];
    const handleClick = (index) => {
        setActiveIndex(index); // Update the active index
    };
    return (
        <div className="sidebar-container">
            <div className="sidebarmenu">
                <div className="sidebar-header">
                    <img src="Syn_logo.png" alt="Sync Insights" width={65} />
                    <h5 style={{ fontWeight: "600" }}>Sync Insights</h5>
                </div>
                <div className="sidebar-listcontainer">
                    <ul>
                        {item.map((item, index) => (
                            <li className='sidebar-list' key={index}
                                onClick={() => handleClick(index)} style={{ color: index === activeIndex ? '#605bff' : '#9a9a9a', }}>
                                {item.img}
                                {item.text}
                            </li>))}

                        <li className='sidebar-list'>
                            <img src="user.jpg" alt="user" width={45} height={45} style={{ borderRadius: '10px' }} />
                            <p style={{ fontSize: '12px' }}>Dhruvin Malani <br />Employee</p>
                            <IoLogOut style={{ fontSize: '25px' }} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;