import React from 'react'

const EditableRow = () => {
  return (
    <tr>
        <td>
            <input type="text" 
            required="required" 
            placeholder='enter a name ..' 
            name="fullName"
            > </input>
        </td>
        <td>
            <input type="text" 
            required="required" 
            placeholder='enter a address ..' 
            name="address"
            > </input>
        </td>
        <td> 
        <input type="text" 
            required="required" 
            placeholder='enter a phoneNumber ..' 
            name="phoneNumber"
            > </input>
        </td>
        <td> 
            <input type="email" 
            required="required" 
            placeholder='enter a email ..' 
            name="email"
            > </input>
        </td>
    </tr>
  )
}
export default EditableRow
