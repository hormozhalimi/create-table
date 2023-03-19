//import logo from './logo.svg';

import React, {useState,Fragment} from "react";
import { nanoid } from 'nanoid';
import './App.css';
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";




const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormDate] = useState({
    fullName :'',
    address:'',
    phoneNumber:'',
    email:''
  })
        //it update the form 
  const handleAddFormChange = (event)=>{ 
    event.preventDefault();

    const feildName=event.target.getAttribute('name');
    const feildValue=event.target.value;
    const newFormData={...addFormData};
    newFormData[feildName]=feildValue;
    setAddFormDate(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();


    const newContact={
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

  };
  return (
    <div className="app-container">
      <form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>

        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
                <EditableRow/>         
              <ReadOnlyRow contact={contact}/>
            </Fragment>
              
          ))}
        </tbody>
      </table> 
      </form>

      <h2> Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type= "text" 
        name="fullName" 
        required="required" 
        placeholder="Enter a name....."
        onChange={handleAddFormChange}
        />
        <input type= "text" 
        name="address" 
        required="required" 
        placeholder="Enter a address...."
        onChange={handleAddFormChange}
        />
        <input type= "text" 
        name="phoneNumber" 
        required="required" 
        placeholder="Enter a phoneNumber....."
        onChange={handleAddFormChange}
        />
        <input type= "email" 
        name="email" 
        required="required" 
        placeholder="Enter an email....."
        onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
