import React from 'react'
import Sidebar from './Sidebar'
import '../../style/Manager/Schedule.css'
import { IoAddOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

const ScheduleEmp = () => {
    const data = [{ date: '12/08/2024', time: '10:10 AM', location: 'Surat' },
    { date: '12/08/2024', time: '10:10 AM', location: 'Surat' },
    { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' }, { date: '12/08/2024', time: '10:10 AM', location: 'Surat' },
    ]
    return (
        <div className='schedule-container'>
            <Sidebar></Sidebar>
            <div className="manager-content-container">
                <div className="manager-header-content">
                    <h4>Schedule List</h4>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', border: 'none', color: 'white', backgroundColor: '#605BFF', borderRadius: '10px' }}><IoAddOutline style={{ color: 'white' }} />Add New</button>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}>
                                        <div style={{ gap: '10px' }} className="table-cell">
                                            <FaCalendarAlt style={{ fontSize: '19px', color: '#4285f4' }} />
                                            <span style={{ fontSize: '15px', fontWeight: '400' }}>{item.date}</span>
                                        </div>
                                    </td>
                                    <td><GoClockFill style={{ marginRight: '10px', color: '#68677f', fontSize: '20px' }} />{item.time}</td>
                                    <td>
                                        <div style={{ color: '#605bff', backgroundColor: '#f0efff', borderRadius: '20px', padding: '6px 16px', marginTop: '-5px', width: 'max-content' }}>
                                            <FaLocationDot style={{ marginRight: '10px' }} />
                                            {item.location}
                                        </div>
                                    </td>
                                    <td style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
                                        <button className="action-button edit">Edit</button>
                                        <button className="action-button delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}

export default ScheduleEmp;