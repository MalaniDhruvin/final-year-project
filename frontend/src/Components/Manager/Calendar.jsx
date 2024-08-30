import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import '../../style/Calendar.css';
import Sidebar from './Sidebar';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [task, setTask] = useState(false);

    const handleTask = (day) => {
        setTask(!task);
    }

    const renderHeader = () => {
        const monthName = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();

        return (
            <div className="calendar-header">
                <button onClick={() => changeMonth(-1)}>◀</button>
                <div style={{ color: '#4f4e6a', fontSize: '18px' }}>{`${monthName} ${year}`}</div>
                <button onClick={() => changeMonth(1)}>▶</button>
            </div>
        );
    };

    const renderDays = () => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className="calendar-days">
                {daysOfWeek.map((day) => (
                    <div key={day} className="calendar-day">{day}</div>
                ))}
            </div>
        );
    };

    const renderCells = () => {
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const daysInMonth = endOfMonth.getDate();

        const prevMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        const prevMonthDays = prevMonthEnd.getDate();

        const startDayOfWeek = startOfMonth.getDay();
        const daysArray = [];

        for (let i = startDayOfWeek; i > 0; i--) {
            daysArray.push(
                <div key={`prev-${i}`} className="calendar-cell prev-month">
                    <span>{prevMonthDays - i + 1}</span>
                </div>
            );
        }

        // Fill in the actual days of the current month
        for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push(
                <div key={day} onClick={() => handleTask(day)} className="calendar-cell">
                    <span>{day}</span>
                </div>
            );
        }

        // Fill in the remaining cells with the next month's dates
        const totalCells = daysArray.length;
        const remainingCells = 35 - totalCells;

        for (let i = 1; i <= remainingCells; i++) {
            daysArray.push(
                <div key={`next-${i}`} className="calendar-cell next-month">
                    <span>{i}</span>
                </div>
            );
        }


        return <div className="calendar-cells">{daysArray}</div>;
    };



    const changeMonth = (monthChange) => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + monthChange)));
    };

    return (<div style={{ display: 'flex', background: '#fafafb', position: 'relative' }}>
        <Sidebar></Sidebar>
        <h4 className='calendar-h4'>Calendar</h4>
        {task && (<div className='create-event'>
            <div className="event-header">
                <p style={{ fontSize: '20px', fontWeight: '500' }}>Create an Event</p>
                <IoMdClose onClick={()=>handleTask()} style={{ fontSize: '35px', borderRadius: '15px', padding: '4px 0', marginTop: '-12px', cursor: 'pointer', color: '#ee5d6f', backgroundColor: 'fef3f6' }} />
            </div>
        </div>)}

        <div className="calendar">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>

    </div>
    );
};

export default Calendar;
