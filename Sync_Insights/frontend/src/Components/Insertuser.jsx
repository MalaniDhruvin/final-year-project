import React from 'react'
import './Insertuser.css'
function Insert_user() {
  return (
    <div className='act-user'>
        <div className='user-add'>
            <input type="text" name="username" placeholder="Username"/>
            <input type="text" name="Id" placeholder="UserId"/>
            <select name="department" id="">
              <option value="Tech">Tech</option>
              <option value="Tech">Marketing</option>
              <option value="Tech">HR</option>
              <option value="Tech">Design</option>
            </select>
            <input type="text" name="role" placeholder="role"/>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default Insert_user