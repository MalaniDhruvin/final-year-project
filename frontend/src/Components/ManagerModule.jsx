import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { IoAddOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import '../style/ManagerModule.css'

const ManagerModule = () => {
    const data = [
        {
            name: 'John Deo',
            email: 'johndoe2211@gmail.com',
            phone: '+33757005467',
            gender: 'Male',
            type: 'UI/UX Designer'
        },
        {
            name: 'Shelby Goode',
            email: 'shelbygoode481@gmail.com',
            phone: '+33757005467',
            gender: 'Female',
        },
        {
            name: 'John Deo',
            email: 'johndoe2211@gmail.com',
            phone: '+33757005467',
            gender: 'Male',
        },
        {
            name: 'Shelby Goode',
            email: 'shelbygoode481@gmail.com',
            phone: '+33757005467',
            gender: 'Female',
        },
        {
            name: 'John Deo',
            email: 'johndoe2211@gmail.com',
            phone: '+33757005467',
            gender: 'Male',
        },
        {
            name: 'Shelby Goode',
            email: 'shelbygoode481@gmail.com',
            phone: '+33757005467',
            gender: 'Female',
        },
        {
            name: 'John Deo',
            email: 'johndoe2211@gmail.com',
            phone: '+33757005467',
            gender: 'Male',
        },
        {
            name: 'Shelby Goode',
            email: 'shelbygoode481@gmail.com',
            phone: '+33757005467',
            gender: 'Female',
        },
        {
            name: 'John Deo',
            email: 'johndoe2211@gmail.com',
            phone: '+33757005467',
            gender: 'Male',
        },
        {
            name: 'Shelby Goode',
            email: 'shelbygoode481@gmail.com',
            phone: '+33757005467',
            gender: 'Female',
        },
        {
            name: 'John Deo',
            email: 'johndoe2211@gmail.com',
            phone: '+33757005467',
            gender: 'Male',
        },
        {
            name: 'Shelby Goode',
            email: 'shelbygoode481@gmail.com',
            phone: '+33757005467',
            gender: 'Female',
        },
        {
            name: 'John Deo',
            email: 'johndoe2211@gmail.com',
            phone: '+33757005467',
            gender: 'Male',
        },
        {
            name: 'Shelby Goode',
            email: 'shelbygoode481@gmail.com',
            phone: '+33757005467',
            gender: 'Female',
        },
    ];

    const [makeVisible, setMakeVisible] = useState(null);
    const handleVisibility = (index) => {
        setMakeVisible(index === makeVisible ? null : index);
    }
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar></Sidebar>
            <div className="manager-content-container">
                <div className="manager-header-content">
                    <h4>Employees</h4>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 10px', border: 'none', color: 'white', backgroundColor: '#605BFF', borderRadius: '10px' }}><IoAddOutline style={{ color: 'white' }} />Add Employee</button>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr onClick={() => handleVisibility(index)} key={index}>
                                    <td style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }}>
                                        <div className="table-cell">
                                            <img
                                                className="avatar"
                                                src={`https://ui-avatars.com/api/?name=${item.name}`}
                                                alt="Avatar"
                                            />
                                            <span>{item.name}</span>
                                        </div>
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
                                        <span className={`gender ${item.gender.toLowerCase()}`}>
                                            {item.gender}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            {data.map((item, index) => (
                makeVisible === index && (
                    <div key={index} className="employee-info">
                        <div className="employee-info-header">
                            <img style={{ borderRadius: '20px' }} src={`https://ui-avatars.com/api/?name=${item.name}`} alt={item.name} />
                            <h5 style={{ marginTop: '5px' }}>{item.name}</h5>
                            <p style={{ marginTop: '-8px', fontSize: '12px' }}>{item.type}</p>
                        </div>
                        <div className="employee-info-contact">
                            <h5>Contact Info</h5>
                            <div className="contact-info">
                                <MdEmail style={{ fontSize: '25px', color: 'b4b4bf' }} />
                                <p>{item.email}</p>
                            </div>
                            <div className="contact-info">
                                <FaPhoneAlt style={{ fontSize: '20px', color: 'b4b4bf' }} />
                                <p>{item.phone}</p>
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}

export default ManagerModule;