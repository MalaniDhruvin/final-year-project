import React from 'react'
import '../style/Datatype.css'
function DataType() {
  return (
        <div className='datype'>
            <div className='da-dec'>
                <input type="text" placeholder='Name' required />
                <select name="datatype" id="">
                    <option value="int">INT</option>
                    <option value="varchar">VARCHAR</option>
                    <option value="boolean">BOOLEAN</option>
                    <option value="string">STIRNG</option>
                </select>
                <button>Add</button>
            </div>
        </div>
  )
}

export default DataType