import React from 'react'
import Sidebar from './Sidebar'
import '../../style/Schedule.css'
import { IoAddOutline } from "react-icons/io5";

const Schedule = () => {
    const data = [{ date: '12/08/2024', time: '10:10 AM', location: 'Surat' }]
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}>
                                        <div className="table-cell">
                                            {/* <img
                                                className="avatar"
                                                src={`https://ui-avatars.com/api/?name=${item.name}`}
                                                alt="Avatar"
                                            /> */}
                                            <span>{item.date}</span>
                                        </div>
                                    </td>
                                    <td>{item.time}</td>
                                    <td>{item.location}</td>
                                    {/* <td style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
                                        <span className={`gender ${item.gender.toLowerCase()}`}>
                                            {item.gender}
                                        </span>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}

export default Schedule;