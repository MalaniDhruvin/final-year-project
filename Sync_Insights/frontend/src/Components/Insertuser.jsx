import React from 'react'
import './Insertuser.css'
function Insert_user() {
  return (
    <div className='act-user'>
        <div className='user-add'>
            <input type="text" name="fullname" placeholder="fullname"/>
            <input type="text" name="username" placeholder="username"/>
            <input type="text" name="email" placeholder="email"/>
            <select name="department" id="department">
              <option value="Sales">Sales</option>
              <option value="Finance">Finance</option>
              <option value="hOperationsr">Operations</option>
            </select>
            <select name="position" id="position">
              <option value="Manager">Manager</option>
              <option value="Associate">Associate</option>
              <option value="Analyst">Analyst</option>
            </select>            
            <input type="text" name="password" placeholder="password"/>
            {/* <input type="text" name="role" placeholder="role"/> */}
            <button>Add User</button>
        </div>
    </div>
  )
}

export default Insert_user