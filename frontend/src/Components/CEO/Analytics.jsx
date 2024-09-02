import React from 'react'
import Sidebar from './SidebarCEO'
import '../../style/CEO/Analytics.css'

const Analytics = () => {
  return (
    <div className='analytics-content-container'>
      <Sidebar />
      <div style={{ width: '100%', }}>
        <div className="analytics-container">
          <h4>Analytics</h4>
          <div className="date-container">
            <input type="date" name="" id="" />
            <input type="date" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics;